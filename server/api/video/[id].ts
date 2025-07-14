import axios from 'axios'
import * as cheerio from 'cheerio'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id parameter',
      })
    }
    const { data } = await axios.get(String(`https://www.ieduchina.com/video/${id}.html`))
    const $ = cheerio.load(data)

    interface List {
      title: string
      cover: string
      id: number | null
      author: string
      authorImg: string
    }

    const videoMsg = {
      title: $('.video-title').text() || '',
      cover: $('#player-container-id').attr('poster') || '',
      videoUrl: $('#player-container-id').attr('value') || '',
      time: $('.oper .time').text()?.replace('发布时间：', ''),
      id: Number($('input[name=shipin_id]').val()) || '',
      author_id: Number($('input[name=shipin_user_id]').val()) || '',
      author: $('.desc').find('p').eq(0).find('a').text() || '',
      authorImg: $('.upmsg').find('img').attr('src') || '',
      num: Number($('.desc').find('p').eq(1).text().replace('视频：', '')) || '',
    }
    const list: List[] = []

    $('.video-list li').each((index, item) => {
      list.push({
        title: $(item).find('.list-title').find('p').text().replace('/\s+/g', '') || '',
        cover: $(item).find('img').attr('src') || '',
        id: Number($(item).find('a').attr('href')?.replace('/video/', '').replace('.html', '')) || null,
        author: $(item).find('.nums').find('span').text().replaceAll(' ', '').replaceAll('\n', '') || '',
        authorImg: $(item).find('.nums').find('i').attr('style')?.replace('background-image: url(', '').replace(')', '') || '',
      })
    })
    return {
      videoMsg,
      list,
    }
  }
  catch (__acc) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to scrape the website:${__acc}`,
    })
  }
})
