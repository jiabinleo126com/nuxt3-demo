import { defineNuxtConfig } from 'nuxt/config'
const routes = ["/topic/2025/hk12"]
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    postcss: {
        plugins: {
            "postcss-preset-env": {
                autoprefixer: {
                    overrideBrowserslist: [
                        'last 2 versions',
                        '> 1%',
                        'not dead'
                    ],
                    grid: true // 确保支持旧版浏览器的网格布局
                }
            }
        }
    },
    experimental: {
        payloadExtraction: false,//关闭 payload 预取
        // inlineSSRStyles: false// 关闭默认的样式内联
    },
    app: {
        baseURL: '/', // 应用根路径
        buildAssetsDir: 'statics', // 构建资源目录
    },
    devServer: {
        host: '0.0.0.0', // Listen on all network interfaces
        port: 3000,      // Optional: Change port if needed
    },
    vite: {
        base: '',// ✅ 设置资源和入口文件的基础路径为相对路径
        // plugins: [
        //     {
        //         name: 'force-lowercase-assets',
        //         generateBundle(_, bundle) {
        //             for (const fileName in bundle) {
        //                 const asset = bundle[fileName];
        //                 if (asset.fileName && /\.(png|jpe?g|gif|svg|webp|avif)$/.test(asset.fileName)) {
        //                     asset.fileName = asset.fileName; // 强制文件名转为小写
        //                 }
        //             }
        //         }
        //     }
        // ],
        // css: {
        //     // 强制提取所有 CSS
        //     devSourcemap: true
        // },
        build: {
            minify: false,// 关闭 JS 压缩和混淆
            cssCodeSplit: false,// 禁止 CSS 分割
            rollupOptions: {
                output: {
                    // manualChunks: () => "all-in-one",// JS 文件合并策略
                    // manualChunks: () => 'everything.js', // 禁用分包，所有 JS 合并
                    // entryFileNames: 'app.js', // JS 合并为 app.js
                    // chunkFileNames: 'app.js', // JS 合并为 app.js
                    // assetFileNames: 'assets/css/[name]-[hash].css',
                    // assetFileNames: (assetInfo) => {
                    // if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                    //     return 'style.css';
                    // }
                    // 只处理图片
                    // if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name || '')) {
                    //     // 只保留hash，扩展名小写
                    //     return 'image/[hash][extname]'.toLowerCase();
                    // }
                    // console.log(assetInfo.names[0]?.endsWith(".css"))
                    // console.log("assetInfo", assetInfo)
                    // if (assetInfo.names[0]?.endsWith(".css")) {
                    //     return "style/[hash].css";
                    // }
                    // return "[name].[ext]";

                    // return '[name][extname]'.toLowerCase();
                    // }
                }
            },
            // loaders: {
            //     less: {
            //         lessOptions: {
            //             javascriptEnabled: true
            //         }
            //     }
            // }
        }
    },
    css: [`./assets/css/reset.less`],
    nitro: {
        preset: 'static',
        prerender: {
            assets: true, // 关键配置
            crawlLinks: false, // 爬取链接进行预渲染
            routes, // 预渲染首页
            ignore: ['200', '404'] // 忽略路由
        } as any,
        devProxy: {
            // '/font': {
            //     target: 'https://www.ieduchina.com/statics/font',
            //     changeOrigin: true,
            //     prependPath: true
            // },
            '/statics': {
                target: 'https://www.ieduchina.com/statics',
                changeOrigin: true,
                prependPath: true
            },
            '/tencent-cdn': {
                target: 'https://cloudcache.tencentcs.com',
                changeOrigin: true,
                prependPath: true
            },
            '/indexPhp': {
                target: 'https://www.ieduchina.com',
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