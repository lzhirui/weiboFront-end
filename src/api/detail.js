import feach from '../utils/feach'

export function detailTabContent(data) {
    return feach({
        url:'/index/detail/get',
        params:data
    })
}


export function postCommentApi(data) {
    return feach({
        url:'/index/detail/commentPost',
        method:'post',
        data:data
    })
}
