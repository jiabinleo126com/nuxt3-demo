import axios from 'axios'
import * as cheerio from 'cheerio'

export default defineEventHandler(async (event) => {
    const { url } = getQuery(event)

    if (!url) {
        throw createError({
            statusCode: 400,
            statusMessage: 'URL parameter is required'
        })
    }

    try {
        const { data } = await axios.get(String(url))
        const $ = cheerio.load(data)
        return {
            data: $
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to scrape the website'
        })
    }
})