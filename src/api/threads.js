import * as serverApi from './server'

export const fetchThreadListing = () => serverApi.get('/v1/threads')
