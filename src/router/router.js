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
import Property from "@/pages/Property.vue";
import KeyInfo from "@/components/properties/pages/KeyInfo.vue";
import Financials from "@/components/properties/pages/Financials.vue";
import Blockchain from "@/components/properties/pages/Blockchain.vue";
import Timeline from "@/components/properties/pages/Timeline.vue";
import Documents from "@/components/properties/pages/Documents.vue";
import InvestmentSummary from "@/pages/InvestmentSummary.vue";

const routes = [
    {path: '/', component: Homepage},
    {path: '/marketplace', component: Marketplace},
    {path: '/login', component: Login},
    {path: '/portfolio', component: Portfolio},
    {path: '/swap', component: Swap},
    {
        path: '/property/:number',
        component: Property,
        children: [
            {
                path: '',
                component: KeyInfo
            },
            {
                path: 'financials',
                component: Financials
            },
            {
                path: 'blockchain',
                component: Blockchain
            },
            {
                path: 'timeline',
                component: Timeline
            },
            {
                path: 'documents',
                component: Documents
            },
        ]
    },
    {
        path: '/investment-summary',
        component: InvestmentSummary,
        props: true
    },
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