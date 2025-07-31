import axios from 'axios'
import * as cheerio from 'cheerio'
import { pool } from '~/server/api/utils/mysql'

export default defineEventHandler(async (event) => {
  const city = event.context.params?.city

  if (!city) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing id parameter',
    })
  }

  try {
    const [article] = await pool.query<any[]>('SELECT * FROM article WHERE type = ? AND city = ?', [city])
    // const [user] = await pool.query<any[]>('SELECT * FROM user WHERE id = ?', [article[0].userid])
    // delete article[0].userid
    // return { ...article[0], user: user[0] }
  }
  catch (__acc) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to scrape the website:${__acc}`,
    })
  }
})


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