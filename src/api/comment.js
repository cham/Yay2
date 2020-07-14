import * as serverApi from './server'

export const postComment = ({ urlname, content }) => serverApi.post(`/v1/threads/${urlname}`, { content })
