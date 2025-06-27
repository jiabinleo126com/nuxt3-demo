import { defineEventHandler } from 'h3'

interface ApiResponse {
  activity: Array<{
    path: string
    image: string
  }>
  bannerList: Array<{
    href: string
    state: number
    year: string
    month: string
    date: string
    title: string
    grade: string
  }>
  verticalVideos: Array<{
    id: string
    image: string
    title: string
    author: string
    authorImage: string
  }>
  horizontalVideos: Array<{
    id: string
    image: string
    title: string
    author: string
    authorImage: string
  }>
}

export default defineEventHandler(async (): Promise<ApiResponse> => {
  console.log('API请求开始处理')
  
  // 返回完整的模拟数据结构
  const mockData: ApiResponse = {
    activity: [{
      path: '/activities/1',
      image: '/images/activity1.jpg'
    }],
    bannerList: [{
      href: '/banners/1',
      state: 1,
      year: '2025',
      month: '06',
      date: '27',
      title: '示例活动',
      grade: '全部年级'
    }],
    verticalVideos: [{
      id: 'video1',
      image: '/images/video1.jpg',
      title: '示例视频1',
      author: '作者1',
      authorImage: '/images/author1.jpg'
    }],
    horizontalVideos: [{
      id: 'video2',
      image: '/images/video2.jpg',
      title: '示例视频2',
      author: '作者2',
      authorImage: '/images/author2.jpg'
    }]
  }

  console.log('API返回数据:', mockData)
  return mockData
})