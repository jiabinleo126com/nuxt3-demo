import axios from 'axios'
import * as cheerio from 'cheerio'
import { pool } from '~/server/api/utils/mysql'

export default defineEventHandler(async () => {
  // return new Date()
  try {
    const { data } = await axios.get(String('https://www.ieduchina.com/'))
    const $ = cheerio.load(data)

    interface IndexData {
      path?: string
      image?: string
      href?: string
      state?: number
      year?: string
      month?: string
      date?: string
      title?: string
      grade?: string
      id?: string
      author?: string
      userid?: any
      authorImage?: string
      cover?: string
    }
    const activity: IndexData[] = []
    const bannerlist: IndexData[] = []
    const verticalvideos: IndexData[] = []
    const horizontalvideos: IndexData[] = []
    const cityexpressdata: IndexData[] = []
    const hours24Data: IndexData[] = []
    // const focustodayImgData: IndexData[] = []
    const focustodayListData: IndexData[] = []

    $('.banner-img .swiper-slide').each((_, item) => {
      const path = $(item).find('a').attr('href') || ''
      const style = $(item).find('div').attr('style') || ''
      const imageMatch = style.match(/background-image:\s*url\((['"]?)(.*?)\1\)/)
      activity.push({
        path,
        image: imageMatch ? imageMatch[2] : '',
      })
    })
    $('.banner-list .swiper-slide').each((_, item) => {
      const stateImg = $(item).find('img').attr('src') || ''
      const dateText = $(item).find('.box>p').text().split('.')
      bannerlist.push({
        href: $(item).find('a').attr('href') || '',
        state: Number(stateImg.match(/\/t(\d+)\.png\?v=1/)?.[1]) || 3,
        year: dateText[0] || '',
        month: dateText[1] || '',
        date: $(item).find('.box>h3').text() || '',
        title: $(item).find('.text>p').eq(0).text() || '',
        grade: $(item).find('.text>p').eq(1).text().replace('适用年级:', '') || '',
      })
    })
    $('.video-con').find('ul').eq(0).find('li').each((index, item) => {
      verticalvideos.push({
        id: $(item).find('a').attr('href')?.split('/video/')[1].replace('.html', ''),
        image: $(item).find('a').find('img').attr('src'),
        title: $(item).find('p').text(),
        author: $(item).find('.nums').text(),
        authorImage: $(item).find('.nums').find('i').attr('style')?.replace('background-image: url(', '')?.replace(')', ''),
      })
    })
    $('.video-con .video2 li').each((index, item) => {
      horizontalvideos.push({
        id: $(item).find('a').attr('href')?.split('/video/')[1].replace('.html', ''),
        image: $(item).find('a').find('img').attr('src'),
        title: $(item).find('p').text(),
        author: $(item).find('.nums').text(),
        authorImage: $(item).find('.nums').find('i').attr('style')?.replace('background-image: url(', '')?.replace(')', ''),
      })
    })
    $('.city-express-wrap .contents').each((index, item) => {
      const list: any = []
      $('.right li', item).each((listindex, listitem) => {
        list.push(
          {
            title: $(listitem).find('p').text(),
            path: $(listitem).find('a').attr('href'),
          },
        )
      })
      const items = {
        title: $('#cityExpress').find('li').eq(index).find('span').text(),
        path: $('#cityExpress').find('li').eq(index).find('a').attr('href'),
        image1: {
          image: $(item).find('.left').find('.img').attr('style')?.replace('background-image: url(', '')?.replace(';)', ''),
          path: $(item).find('.left').find('a').attr('href'),
        },
        image2: {
          image: $(item).find('.center').find('a').eq(0).find('.img').attr('style')?.replace('background-image: url(', '')?.replace(';)', ''),
          path: $(item).find('.center').find('a').eq(0).attr('href'),
        },
        image3: {
          image: $(item).find('.center').find('a').eq(1).find('.img').attr('style')?.replace('background-image: url(', '')?.replace(';)', ''),
          path: $(item).find('.center').find('a').eq(1).attr('href'),
        },
        list,
      }
      cityexpressdata.push(items)
    })
    $(".swiper-hours24 .swiper-slide").each((index, item) => {
      hours24Data.push({
        path: $(item).find("a").attr("href"),
        title: $(item).find('p').text().replace(/^\d+\.\s*/, '')
      })
    })

    // $(".focustoday-img li").each((index, item) => {
    //   focustodayImgData.push({
    //     path: $(item).find(".box>a").attr("href"),
    //     userid: $(item).find(".author>a").attr("href")?.match(/\/(\d+)\.html$/)?.[1],
    //     cover: $(item).find(".img").attr("style")?.replace('background-image: url(', '')?.replace(')', ''),
    //     title: $(item).find(".box").find("p").text()
    //   })
    // })
    const [focustodayImgData] = await pool.query<any[]>('SELECT * FROM article ORDER BY time DESC LIMIT 6')

    return {
      activity,
      bannerlist,
      verticalvideos,
      horizontalvideos,
      cityexpressdata,
      hours24Data,
      focustodayImgData,
      focustodayListData
    }
  }
  catch (error) {
    return error
  }
})
