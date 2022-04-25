import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import HawaiiPage from '../views/HawaiiPage.vue';
import JamaicaPage from '../views/JamaicaPage.vue';
import PanamaPage from '../views/PanamaPage.vue';

const routes=[
    {
        path:"/",
        name:"Home",
        component:HomePage,
    },
    {
        path:"/about",
        name:"About",
        component:AboutPage
    },
    {
        path:'/brazil', name:'brazil', 
        component:() => import(/* webpackChunkName:"brazil" */'@/views/BrazilPage')
    },
    {
        path:'/hawaii',
        name:'hawaii',
        component:HawaiiPage
    },
    {
        path:'/jamaica',
        name:'jamaica',
        component:JamaicaPage
    },
    {
        path:'/panama',
        name:'panama',
        component:PanamaPage
    },
    {path:'/destination/:id', component:() => import('@/views/DestinationShow.vue')}
];

const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:'vue-school-active-link'
})

export default router;