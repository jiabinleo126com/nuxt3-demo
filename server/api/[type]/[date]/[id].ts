import axios from 'axios'
import * as cheerio from 'cheerio'
import { pool } from '~/server/api/utils/mysql'

export default defineEventHandler(async (event) => {

  const id = Number(event.context.params?.id)
  const date = event.context.params?.date
  const type = event.context.params?.type

  if (!id || !date || !type) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing id parameter',
    })
  }

  try {
    const [article] = await pool.query<any[]>('SELECT * FROM article WHERE type = ? AND id = ?', [type, id])
    const [user] = await pool.query<any[]>('SELECT * FROM user WHERE id = ?', [article[0].userid])
    delete article[0].userid
    return { ...article[0], user: user[0] }
  }
  catch (__acc) {
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to scrape the website:${__acc}`,
    })
  }
})