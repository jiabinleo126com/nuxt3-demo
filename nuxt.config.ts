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