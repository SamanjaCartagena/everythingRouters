import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import BrazilPage from '../views/BrazilPage.vue';
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
        path:'/brazil', name:'brazil', component:BrazilPage
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
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;