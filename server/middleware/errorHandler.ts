import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    // 让请求继续处理
    return await handleEvent(event)
  } catch (error) {
    console.error('[全局错误]', error)
    event.res.statusCode = 500
    return {
      code: 500,
      message: '服务器内部错误',
      data: null
    }
  }
})