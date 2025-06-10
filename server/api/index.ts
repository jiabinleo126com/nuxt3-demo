import axios from 'axios'
import * as cheerio from 'cheerio'

export default defineEventHandler(async () => {
    // return new Date()
    try {
        const { data } = await axios.get(String("https://www.ieduchina.com/"))
        const $ = cheerio.load(data)
        const activity: any = [],
            bannerList: any = [];
        $(".banner-img .swiper-slide").each((index, item) => {
            console.log(item)
            activity.push({
                path: $(item).find("a").attr("href"),
                image: $(item).find("div").attr("style")?.replace("background-image: url(", "").replace(");", "")
            })
        })
        $(".banner-list .swiper-slide").each((index, item) => {
            const stateImg: any = $(item).find("img").attr("src");
            bannerList.push({
                href: $(item).find("a").attr("href"),
                state: Number(/\/(t\d+)\.png\?v=1/.exec(stateImg)?.[1]?.replace("t", "")) || 3,
                year: $(item).find(".box>p").text().split(".")[0],
                month: $(item).find(".box>p").text().split(".")[1],
                date: $(item).find(".box>h3").text(),
                title: $(item).find(".text>p").eq(0).text(),
                grade: $(item).find(".text>p").eq(1).text().replace("适用年级:", ""),
            })
        })

        return {
            activity,
            bannerList
        }
    } catch (error) {
        return 2
    }
})