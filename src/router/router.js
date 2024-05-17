import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "@/pages/Homepage.vue";
import Marketplace from "@/pages/Marketplace.vue";
import Login from "@/pages/Login.vue";
import Profile from "@/pages/Profile.vue";
import ProfileWallets from "@/components/profile/ProfileWallets.vue";
import ProfileSettings from "@/components/profile/ProfileSettings.vue";
import ProfileClaimRent from "@/components/profile/ProfileClaimRent.vue";
import Portfolio from "@/pages/Portfolio.vue";
import Swap from "@/pages/Swap.vue";

const routes = [
    {path: '/', component: Homepage},
    {path: '/marketplace', component: Marketplace},
    {path: '/login', component: Login},
    {path: '/portfolio', component: Portfolio},
    {path: '/swap', component: Swap},
    {
        path: '/profile',
        component: Profile,
        children: [
            {
                path: '',
                component: ProfileSettings
            },
            {
                path: 'wallets',
                component: ProfileWallets
            },
            {
                path: 'claim-rent',
                component: ProfileClaimRent
            }
        ]
    }
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory('/vearProject/'),
    routes,
})

export default router