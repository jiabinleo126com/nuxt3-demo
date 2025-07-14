import axios from 'axios'
import * as cheerio from 'cheerio'

export default defineEventHandler(async () => {
  // return new Date()
  try {
    const { data } = await axios.get(String('https://www.ieduchina.com/school/index.html'))
    const $ = cheerio.load(data)
    const banner: any = []
    const news: any = []
    $('.abroad-banner>a').each((index, item) => {
      banner.push({
        path: $(item).attr('href'),
        image: $(item).attr('style')?.replace('background-image: url(', '').replace(')', ''),
        title: $(item).find('p').text(),
      })
    })
    $('.abroad-news ul > li').each((index, item) => {
      const userPath: any = $(item).find('.source>a').attr('href')
      news.push({
        path: $(item).find('a').eq(0).attr('href') || '',
        image: $(item).find('a>img').eq(0).attr('src') || '',
        title: $(item).find('h2').text() || '',
        desc: $(item).find('.text p').text() || '',
        user: $(item).find('.source>a>span').text() || '',
        userid: userPath?.match(/\/(\d+)\.html/)[1] || '',
        userImg: $(item).find('.source img').attr('src') || '',
        time: $(item).find('.source>span').text() || '',
      })
    })
    // url.match(/\/(\d+)\.html/)[1]

    return {
      banner,
      news,
    }
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to scrape the website:${error}`,
    })
  }
})
