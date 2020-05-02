import * as serverApi from './server'

export const fetchThread = ({ urlname, page }) => serverApi.get(`/v1/threads/${urlname}/comments?page=${page}`)
