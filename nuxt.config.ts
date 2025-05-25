export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    baseURL: './', // 应用根路径
    buildAssetsDir: 'static/', // 构建资源目录
  },
  nitro: {
    preset: 'static', // 使用静态部署模式
  },
  vite: {
    base: './' // ✅ 设置资源和入口文件的基础路径为相对路径
  }
})