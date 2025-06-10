import axios from 'axios'
import * as cheerio from 'cheerio'

export default defineEventHandler(async () => {
    // return new Date()
    try {
        const { data } = await axios.get(String("https://www.ieduchina.com/"))
        const $ = cheerio.load(data)
        const activity: any = [],
            bannerList: any = [],
            verticalVideos: any = [],
            horizontalVideos: any = [];
        $(".banner-img .swiper-slide").each((index, item) => {
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
        $(".video-con").find("ul").eq(0).find("li").each((index, item) => {
            verticalVideos.push({
                id: $(item).find("a").attr("href")?.split("/video/")[1].replace(".html", ""),
                image: $(item).find("a").find("img").attr("src"),
                title: $(item).find("p").text(),
                author: $(item).find(".nums").text(),
                authorImage: $(item).find(".nums").find("i").attr("style")?.replace("background-image: url(", "")?.replace(")", "")
            })
        })
        $(".video-con .video2 li").each((index, item) => {
            horizontalVideos.push({
                id: $(item).find("a").attr("href")?.split("/video/")[1].replace(".html", ""),
                image: $(item).find("a").find("img").attr("src"),
                title: $(item).find("p").text(),
                author: $(item).find(".nums").text(),
                authorImage: $(item).find(".nums").find("i").attr("style")?.replace("background-image: url(", "")?.replace(")", "")
            })
        })

        return {
            activity,
            bannerList,
            verticalVideos,
            horizontalVideos
        }
    } catch (error) {
        return 2
    }
})