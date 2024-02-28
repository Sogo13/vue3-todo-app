import { createRouter, createWebHistory } from 'vue-router';

import checkout from '@/pages/checkout.vue';
import MainPage from "@/pages/MainPage.vue";
import goodPage from "@/pages/goodPage.vue";
import cart from "@/pages/cart.vue"
import authorisation from "@/pages/authorisation.vue"
import createGood from "@/pages/createGood.vue"
import login from "@/pages/login.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage,
            params: true
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: checkout,
            params: true
        },
        {
            path: '/goodPage',
            name: 'goodPage',
            component: goodPage,
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,

        },
        {
            path: '/authorisation',
            name: 'authorisation',
            component: authorisation,
            beforeEnter: (to, from, next) => {
                const isAuthenticated = localStorage.getItem('isAuthenticated');
                if (isAuthenticated === 'true') {
                    next({ name: 'createGood' });
                } else {
                    next();
                }}
        },
        {
            path: '/createGood',
            name: 'createGood',
            component: createGood,
            params: true
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            params: true
        },

    ]
});

export default router;