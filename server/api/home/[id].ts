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
    const [user] = await pool.query<any[]>('SELECT * FROM user WHERE id = ?', [id])
    const [article] = await pool.query<any[]>('SELECT * FROM article WHERE userid = ?', [id])
    const [video] = await pool.query<any[]>('SELECT * FROM video WHERE userid = ?', [id])
    const [huodong] = await pool.query<any[]>('SELECT * FROM huodong WHERE userid = ?', [id])
    const content = article.length + video.length + huodong.length
    const articlelist: any = [];
    for (let index = 0; index < article.length; index++) {
      const element: any = article[index];
      articlelist.push({
        id: element.id,
        cover: element.cover,
        title: element.title,
        time: gettime(element.time),
        path: `/${element.type}/${settime(element.time)}/${element.id}`
        // http://www.ieduchina.com/zt/202507/130671.html
      })
    }
    if (user?.[0]) {
      return { ...user[0], content, article: articlelist }
    } else {
      const newuser = await crawler1(id)
      return { ...newuser, content, article, articlelist }
    }
    // return '数据库连接失败'
  }
  catch (__acc) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to scrape the website:${__acc}`,
    })
  }
})

function gettime(time: any) {
  const now = new Date().getTime();
  const dix = now - new Date(time).getTime()
  if (dix > 3 * 24 * 60 * 60 * 1000) {
    return `${new Date(time).getFullYear()}-${new Date(time).getMonth() + 1}-${new Date(time).getDate()}`
  }
  else if (dix > 24 * 60 * 60 * 1000 && dix <= 3 * 24 * 60 * 60 * 1000) {
    return `${Math.floor(dix / 1000 / 60 / 60 / 24)}天前`
  }
  else if (dix > 60 * 60 * 1000 && dix <= 24 * 60 * 60 * 1000) {
    return `${Math.floor(dix / 1000 / 60 / 60)}小时前`
  }
  else if (dix > 60 * 1000 && dix <= 60 * 60 * 1000) {
    return `${Math.floor(dix / 1000 / 60)}分钟前`
  }
  else if (dix <= 60 * 1000) {
    return `刚刚`
  }
}
function settime(time: any) {
  return `${new Date(time).getFullYear()}${addZero(new Date(time).getMonth() + 1)}`
}
function addZero(num: number) {
  if (+num < 10)
    return `0${num}`
  return num
}

async function crawler1(id: number) {
  const { data } = await axios.get(String(`https://www.ieduchina.com/home/${id}.html`))
  const $ = cheerio.load(data)
  const name = $('.user_msg .top span').text() || ''
  const image = $('.user_msg .top img').attr("src") || ''
  const biref = $('.user_msg .center .text p').text() || ''
  const follow = 0
  await pool.execute(
    'INSERT INTO user (id, name, image, brief, follow) VALUES (?, ?, ?, ?, ?)',
    [id, name, image, biref, follow],
  )
  const [newuser] = await pool.query<any[]>('SELECT * FROM user WHERE id = ?', [id])
  return newuser
}
