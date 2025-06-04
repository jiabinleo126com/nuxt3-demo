export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    app: {
        baseURL: './', // 应用根路径
        buildAssetsDir: 'static/', // 构建资源目录
        head: {
            script: [
                {
                    src: "https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js",
                    type: "text/javascript",
                    defer: true
                },
                {
                    src: "https://www.ieduchina.com/statics/pcc/js/swiper.min.js",
                    type: "text/javascript",
                    defer: true
                }, {
                    src: "https://cloudcache.tencentcs.com/qcloud/video/dist/tcadapter.1.0.0.min.js",
                    type: "text/javascript",
                    defer: true
                }, {
                    src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js",
                    type: "text/javascript",
                    defer: true
                }, {
                    src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js",
                    type: "text/javascript",
                    defer: true
                }, {
                    src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js",
                    type: "text/javascript",
                    defer: true
                }, {
                    src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js",
                    type: "text/javascript",
                    defer: true
                }, {
                    src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js",
                    type: "text/javascript",
                    defer: true
                }
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://www.ieduchina.com/statics/pc/css/swiper.min.css"
                }, {
                    rel: "stylesheet",
                    href: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css"
                }
            ]
        },
    },
    css: [`./assets/css/reset.less`],
    nitro: {
        preset: 'static', // 使用静态部署模式
    },
    vite: {
        base: './' // ✅ 设置资源和入口文件的基础路径为相对路径
    }
})