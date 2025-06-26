import axios from 'axios'
import * as cheerio from 'cheerio'
import { getQuery } from 'h3'

export default defineEventHandler(async (e) => {
    const query = getQuery(e);
    console.log("query", JSON.stringify(query))
    const pageNumber = query.page ? Number(query.page) : 1;
    console.log("pageNumber", pageNumber)
    try {
        const { data } = await axios.get(String("https://www.ieduchina.com/huodong?page=" + pageNumber))
        const $ = cheerio.load(data)
        const activily: any = [],
            page: number = +$('#pages').find("a").eq(-2).text().trim();
        $(".list li").each((acc_, item) => {
            activily.push({
                title: $(item).find('.title').text().trim(),
                dw: $(item).find('.detail').find("p").eq(0).text().trim().replace("主办单位：", ""),
                time: $(item).find('.detail').find("p").eq(1).text().trim().replace("开始时间：", ""),
                image: $(item).find('.image').attr('style')?.replace("background-image: url(", "").replace(");", ""),
                status: $(item).attr('class')?.includes('started') ? 1 : 0,
                nums: +$(item).find('.btn').find("span").text().trim().replace("人", ""),
                path: $(item).find('a').attr('href') || ''
            })
        })
        return {
            activily,
            page
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to scrape the website'
        })
    }
})