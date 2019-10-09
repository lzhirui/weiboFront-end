import feach from '../utils/feach'

export function sublogin(data) {
    return feach({
        url:'/index/user/post',
        method:'post',
        data:data
    })
}
