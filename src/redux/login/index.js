import cookie from 'react-cookies';

let initState = {
    islogin:cookie.load('islogin') ? true : false
}


const login = (state = initState, action) => {
    switch (action.type) {

        case 'LONGIN_OFF':
            return {
                ...state,
                islogin: action.data
            };

        case 'LONGIN_OUT':
            return {
                ...state,
                islogin: action.data
            };
        default:
            return {...state};
    }
}

export default login;
