import feach from '../utils/feach'

export function homedata() {
    return feach({
        url:'/index/user/get',
        method:'get'
    })
}
