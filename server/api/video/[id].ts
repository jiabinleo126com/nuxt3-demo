import axios from 'axios'
import * as cheerio from 'cheerio'
import { pool } from '~/server/api/utils/mysql'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id parameter',
      })
    }
    const [video] = await pool.query<any[]>('SELECT * FROM video WHERE id = ?', [id])
    if (video?.[0]) {
      const date = video[0].time;
      video[0].time = setTime(date)
    }
    const [list] = await pool.query<any[]>('SELECT * FROM video WHERE id != ? ORDER BY time DESC LIMIT 7', [id])
    if (!video.toString()) {
      const newVideo = await crawler(id)
      return { videoMsg: newVideo[0], list }
    }
    video[0].user = (await getUser(4920))[0]
    delete video[0].userid
    delete video[0].user.brief
    delete video[0].user.follow
    return { videoMsg: video[0], list }
    // return '数据库连接失败'
  }
  catch (__acc) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to scrape the website:${__acc}`,
    })
  }
})

async function crawler(id: number) {
  const { data } = await axios.get(String(`https://www.ieduchina.com/video/${id}.html`))
  const $ = cheerio.load(data)
  const title = $('.video-title').text() || ''
  const cover = $('#player-container-id').attr('poster') || ''
  const src = $('#player-container-id').attr('value') || ''
  const time = $('.oper .time').text()?.replace('发布时间：', '')
  const userid = Number($('input[name=shipin_user_id]').val()) || ''
  const num = Number($('.desc').find('p').eq(1).text().replace('视频：', '')) || ''
  await pool.execute(
    'INSERT INTO video (id, title, src, cover, time, userid, num) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [id, title, src, cover, time, userid, num],
  )
  const [newVideo] = await pool.query<any[]>('SELECT * FROM video WHERE id = ?', [id])
  return newVideo
}

async function getUser(userid: number) {
  const [user] = await pool.query<any[]>('SELECT * FROM user WHERE id = ?', [userid])
  return user
}

function addZero(num: number) {
  if (+num < 10)
    return `0${num}`
  return num
}
function setTime(date: any) {
  return `${new Date(date).getFullYear()} -${addZero(new Date(date).getMonth() + 1)} -${addZero(new Date(date).getDate())} ${addZero(new Date(date).getHours())}:${addZero(new Date(date).getMinutes())}:${addZero(new Date(date).getSeconds())}`
}
