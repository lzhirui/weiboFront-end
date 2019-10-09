let actionCreator = (type, data) => ({
    type: type,
    data: data
})

export const userLogin = (data) => {
    return (dispatch) => {
        dispatch(actionCreator('USER_LOGIN', data))
    }
}


export const loginOff = (data) => {
    return (dispatch) => {
        dispatch(actionCreator('LONGIN_OFF', data))
    }
}

export const loginOut = (data) => {
    return (dispatch) => {
        dispatch(actionCreator('LONGIN_OUT', data))
    }
}
