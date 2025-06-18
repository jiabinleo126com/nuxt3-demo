import axios from 'axios'
import * as cheerio from 'cheerio'

export default defineEventHandler(async () => {
    // return new Date()
    try {
        const { data } = await axios.get(String("https://www.ieduchina.com/"))
        const $ = cheerio.load(data)


        interface IndexData {
            path?: string,
            image?: string,
            href?: string,
            state?: number,
            year?: string,
            month?: string,
            date?: string,
            title?: string,
            grade?: string,
            id?: string,
            author?: string,
            authorImage?: string
        }
        const activity: IndexData[] = [],
            bannerList: IndexData[] = [],
            verticalVideos: IndexData[] = [],
            horizontalVideos: IndexData[] = [];

        $(".banner-img .swiper-slide").each((_, item) => {
            const path = $(item).find("a").attr("href") || "";
            const style = $(item).find("div").attr("style") || "";
            const imageMatch = style.match(/background-image:\s*url\((['"]?)(.*?)\1\)/);
            activity.push({
                path,
                image: imageMatch ? imageMatch[2] : ""
            });
        });
        $(".banner-list .swiper-slide").each((_, item) => {
            const stateImg = $(item).find("img").attr("src") || "";
            const dateText = $(item).find(".box>p").text().split(".");
            bannerList.push({
                href: $(item).find("a").attr("href") || "",
                state: Number(stateImg.match(/\/t(\d+)\.png\?v=1/)?.[1]) || 3,
                year: dateText[0] || "",
                month: dateText[1] || "",
                date: $(item).find(".box>h3").text() || "",
                title: $(item).find(".text>p").eq(0).text() || "",
                grade: $(item).find(".text>p").eq(1).text().replace("适用年级:", "") || "",
            });
        });
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
        return error
    }
})