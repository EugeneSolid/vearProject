import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "@/pages/Homepage.vue";
import Marketplace from "@/pages/Marketplace.vue";
import Login from "@/pages/Login.vue";

const routes = [
    { path: '/', component: Homepage },
    { path: '/marketplace', component: Marketplace},
    { path: '/login', component: Login}
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
})

export default router