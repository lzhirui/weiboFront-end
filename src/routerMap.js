import React from 'react';
import Loadable from 'react-loadable';



const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    }
    else {
        return null;
    }
};

const Home = Loadable({
    loader: () => import('./view/home/index'),
    loading: MyLoadingComponent
});
const Login = Loadable({
    loader: () => import('./view/login/index'),
    loading: MyLoadingComponent
});
const List = Loadable({
    loader: () => import('./view/list/index'),
    loading: MyLoadingComponent
});
const Detail = Loadable({
    loader: () => import('./view/detail/index'),
    loading: MyLoadingComponent
});
const User = Loadable({
    loader: () => import('./view/user/index'),
    loading: MyLoadingComponent
});

//auth:true    判断页面是否需要登陆
export default [
    {path:'/',name:'Home',component:Home},
    {path:'/detail/:id',name:'Detail',component:Detail,auth:true},
    {path:'/list',name:'List',component:List},
    {path:'/login',name:'Login',component:Login},
    {path:'/user',name:'User',component:User}
]
