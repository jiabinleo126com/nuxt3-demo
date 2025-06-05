export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    postcss: {
        plugins: {
            autoprefixer: {
                overrideBrowserslist: [
                    'last 2 versions',
                    '> 1%',
                    'not dead'
                ]
            }
        }
    },
    experimental: {
        payloadExtraction: false//关闭 payload 预取
    },
    app: {
        baseURL: '/', // 应用根路径
        buildAssetsDir: 'static/js', // 构建资源目录
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
    vite: {
        base: '',// ✅ 设置资源和入口文件的基础路径为相对路径
        plugins: [
        ],
        // css: {
        //     // 强制提取所有 CSS
        //     devSourcemap: true
        // },
        build: {
            minify: false // 关闭 JS 压缩和混淆
            //     cssCodeSplit: true,
            //     rollupOptions: {
            //         output: {
            //             manualChunks: () => 'everything', // 禁用分包，所有 JS 合并
            //             entryFileNames: 'app.js', // JS 合并为 app.js
            //             chunkFileNames: 'app.js', // JS 合并为 app.js
            //             assetFileNames: (assetInfo) => {
            //                 if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            //                     return 'style.css';
            //                 }
            //                 return '[name][extname]';
            //             }
            //         }
            //     }
        }
    },
    css: [`./assets/css/reset.less`],
    nitro: {
        preset: 'static',
        prerender: {
            crawlLinks: false, // 爬取链接进行预渲染
            routes: ['/'], // 预渲染首页
            // ignore: ['/index','200','404'] // 不忽略任何路由
        },
        devProxy: {
            '/font': {
                target: 'https://www.ieduchina.com/statics/font',
                changeOrigin: true,
                prependPath: true
            }
        },
        // 缩小捆绑包
        minify: true,
        // 关闭源映射生成
        sourceMap: false,
    },

})