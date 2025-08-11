import axios from 'axios'
import * as cheerio from 'cheerio'
import { pool } from '~/server/api/utils/mysql'

export default defineEventHandler(async (event) => {

  const id = Number(event.context.params?.id)
  const date = event.context.params?.date
  let fullyear = 0
  let month = 0
  if (String(date).length == 6) {
    fullyear = Math.floor(Number(date) / 100)
    month = Number(date?.substring(4, 6))
  }
  const type = event.context.params?.type

  if (!id || !date || !type) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing id parameter',
    })
  }

  try {
    let user: any = []
    const [article] = await pool.query<any[]>('SELECT * FROM article WHERE event_type = ? AND fullyear = ?  AND month = ? AND id = ?', [type, fullyear, month, id])
    if (article?.length) {
      const [_user] = await pool.query<any[]>('SELECT * FROM user WHERE id = ?', [article[0].userid])
      delete article[0]?.userid
      user = _user
    } else {
      const article = await crawler(type, date, id)
      return { ...article[0], user: user[0] }
    }
    return { ...article[0], user: user[0] }
  }
  catch (__acc) {
    console.log("catch``````````````````````", __acc)
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to scrape the website:${__acc}`,
    })
  }
})


async function crawler(type: string, date: string, id: number) {
  const { data } = await axios.get(String(`https://www.ieduchina.com/${type}/${date}/${id}.html`))
  const $ = cheerio.load(data)
  const title = $("h1").text() || ""
  const desc = $("#main-cont>.con").html() || ""
  const time = $(".descs .nums p").eq(0).text() || ""
  const year = Number(new Date($(".descs .nums p").eq(0).text()).getFullYear())
  const month = Number(new Date($(".descs .nums p").eq(0).text()).getMonth() + 1)
  const cover = $(".rich_pages").eq(0)?.attr("src")
  const userid = Number($(".user-img>a")?.attr("href")?.match(/\/(\d+)\.html/)?.[1] || "")
  const address = $(".descs .nums p").eq(1)?.text()?.replace("发布于", "") || ""
  const city = ""
  await pool.execute(
    'INSERT INTO article (id, title, description, event_time,event_type, fullyear, month, userid, cover, address, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [id, title, desc, time, type, year, month, userid, cover, address, city],
  )
  const [article] = await pool.query<any[]>('SELECT * FROM article WHERE  id = ?', [id])
  return article
}