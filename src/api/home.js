import feach from '../utils/feach'

export function homedata() {
    return feach({
        url:'/homepage',
        method:'get'
    })
}
