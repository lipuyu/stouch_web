import axios from '@/libs/api.request'

export const bookContent = (id) => {
  return axios.request({
    url: 'book/content/' + id,
    method: 'post'
  })
}

export const commitContent = (id, comment) => {
  return axios.request({
    data: {comment: comment},
    url: 'content/' + id + '/comment',
    method: 'post'
  })
}
