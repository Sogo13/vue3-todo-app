import { createRouter, createWebHistory } from 'vue-router';

import checkout from '@/checkout.vue';
import MainPage from "@/MainPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: checkout
        }
    ]
});

export default router;