import { createRouter, createWebHistory } from 'vue-router';

import checkout from '@/checkout.vue';
import MainPage from "@/MainPage.vue";
import goodPage from "@/goodPage.vue";
import cart from "@/cart.vue"
import authorisation from  "@/authorisation.vue"
import createGood from "@/createGood.vue"

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
            path: '/goodPage/:id',
            name: 'goodPage',
            component: goodPage,
            params: true
        },
        {
            path: '/cart/:id/:count',
            name: 'cart',
            component: cart,
            params: true
        },
        {
            path: '/authorisation',
            name: 'authorisation',
            component: authorisation,
            params: true
        },
        {
            path: '/createGood',
            name: 'createGood',
            component: createGood,
            params: true
        }

    ]
});

export default router;