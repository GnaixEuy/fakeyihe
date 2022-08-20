//jwt token 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU0NzQxMzc5LCJleHAiOjE2NTczMzMzNzl9.SI5jy8eoP4p1wSdco6knTRKABtZ5Eg9cWhbrOkQLxb4

const baseUrl = 'http://localhost:1337'

export const get = (uri: string) => {
  wx.showLoading({
    title: '加载中'
  })

  return new Promise<any>((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'GET',
      header: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1MDUzODM2LCJleHAiOjE2NTc2NDU4MzZ9.2fgctpgk87lzlmRKn4iPqbj5Ji9rPXDaRH5T4GYGkHE'
      },
      success: (res) => {
        resolve(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

export const post = (uri: string, data: object) => {
  wx.showLoading({
    title: '加载中'
  })

  return new Promise<any>((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'POST',
      data,
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

export default {
  get,
  post
}