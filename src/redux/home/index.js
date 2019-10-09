// import Store from '../../utils/localStorage.js'
//
// // 从localStorage中获取当前城市
// let localStorageCity = Store.getItem('CITY_NAME');
//
// // 如果localStorage中没有值，则将localStorage设置为北京
// if(localStorageCity == null) {
//     localStorageCity = '北京'
//     Store.setItem('CITY_NAME', localStorageCity)
// }

import cookie from 'react-cookies';

let initState = {
    // localStorageCity
    city:'北京',
    userAccount:cookie.load('userAccount') ? cookie.load('userAccount') : {}
}

const userInfor = (state = initState, action) => {
    switch (action.type) {

        case 'CHANGE_CITY':
            return {
                ...state,
                city: action.data
            };

        case 'USER_LOGIN':
            return {
                ...state,
                userAccount: action.data
            };
        default:
            return {...state};
    }
}

export default userInfor;
