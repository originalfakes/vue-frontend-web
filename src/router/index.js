import Vue from 'vue';
import VueRouter from 'vue-router';
import isMobile from '@/lib/isMobile';
// import VueCookies from 'vue-cookies';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import ('../views/pc'),
        beforeEnter: (to, from, next) => {
            if (isMobile()) {
                next('/mobile/home');
            }
            next();
        },
    },
    {
        path: '/page',
        name: 'page',
        component: () => import ('../views/pc'),
        beforeEnter: (to, from, next) => {
            if (isMobile()) {
                next('/mobile/home');
            }
            next();
        },
        children: [
            {
                path: '/sport',
                name: 'sport',
                component: () => import('../views/pc/sport'),
            },
            {
                path: '/yabo',
                name: 'yabo',
                component: () => import('../views/pc/yabo'),
            },
            {
                path: '/live',
                name: 'live',
                component: () => import('../views/pc/live'),
            },
            {
                path: '/electron',
                name: 'electron',
                component: () => import('../views/pc/slot'),
            },
            {
                path: '/lottery',
                name: 'lottery',
                component: () => import('../views/pc/lottery'),
            },
            {
                path: '/chess',
                name: 'chess',
                component: () => import('../views/pc/card'),
            },
            {
                path: '/movie',
                name: 'movie',
                component: () => import('../views/pc/movie'),
            },
            {
                path: '/service',
                name: 'service',
                component: () => import('../views/pc/service'),
            },
            {
                path: '/promotions',
                name: 'promotions',
                component: () => import('../views/pc/promotions'),
            },
            // 文案頁
            {
                path: '/copywriting',
                redirect: '/help',
                component: () => import('../views/pc/copywriting'),
                children:[
                    {
                        path: '/help/:id',
                        name: 'help',
                        component: () => import('../views/pc/copywriting/help'),
                    },
                    {
                        path: '/business/:id',
                        name: 'business',
                        component: () => import('../views/pc/copywriting/business'),
                    },
                    {
                        path: '/contact/:id',
                        name: 'contact',
                        component: () => import('../views/pc/copywriting/contact'),
                    },
                ],
            },
            // 會員中心
            {
                path: 'mcenter',
                component: () => import('../views/pc/mcenter'),
                children: [
                    {
                        path: '/mcenter/deposit',
                        name: 'deposit',
                        component: () => import('../views/pc/mcenter/deposit'),
                    },
                    {
                        path: '/mcenter/withdraw',
                        name: 'withdraw',
                        component: () => import('../views/pc/mcenter/withdraw'),
                    },
                    {
                        path: '/mcenter/transfer',
                        name: 'transfer',
                        component: () => import('../views/pc/mcenter/transfer'),
                    },
                    {
                        path: '/mcenter/tranRecord',
                        name: 'tranRecord',
                        component: () => import('../views/pc/mcenter/tranRecord'),
                    },
                    {
                        path: '/mcenter/betRecord',
                        name: 'betRecord',
                        component: () => import('../views/pc/mcenter/betRecord'),
                    },
                    {
                        path: '/mcenter/bank',
                        name: 'bank',
                        component: () => import('../views/pc/mcenter/bank'),
                    },
                    {
                        path: '/mcenter/usdt',
                        name: 'usdt',
                        component: () => import('../views/pc/mcenter/usdt'),
                    },
                    {
                        path: '/mcenter/member',
                        name: 'member',
                        component: () => import('../views/pc/mcenter/member'),
                    },
                    {
                        path: '/mcenter/friend',
                        name: 'friend',
                        component: () => import('../views/pc/mcenter/friend'),
                    },
                    {
                        path: '/mcenter/message',
                        name: 'message',
                        component: () => import('../views/pc/mcenter/message'),
                    },
                    {
                        path: '/mcenter/personal',
                        name: 'personal',
                        component: () => import('../views/pc/mcenter/personal'),
                    },
                    {
                        path: '/mcenter/changePsw',
                        name: 'changePsw',
                        component: () => import('../views/pc/mcenter/changePsw'),
                    },
                    {
                        path: '/mcenter/perfurds',
                        name: 'perfurds',
                        component: () => import('../views/pc/mcenter/perfurds'),
                    },
                ],
            },
        ],
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/pc/register'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/pc/login'),
    },
    {
        path: '/forgetPsw',
        name: 'forgetPsw',
        component: () => import('../views/pc/forgetPsw'),
    },
    // mobile
    {
        path: '/mobile/home',
        name: 'mobileHome',
        component: () => import('../views/mobile'),
    },
    {
        path: '/mobile/promotion',
        name: 'mobilePromotion',
        component: () => import('../views/mobile/promotion'),
    },
    {
        path: '/mobile/friend',
        name: 'mobileFriend',
        component: () => import('../views/mobile/share'),
    },
    {
        path: '/mobile/shareRecord',
        name: 'mobileShareRecord',
        component: () => import('../views/mobile/shareRecord'),
    },
    {
        path: '/mobile/service',
        name: 'mobileService',
        component: () => import('../views/mobile/service'),
    },
    {
        path: '/mobile/mcenter',
        name: 'mobileMCenter',
        component: () => import('../views/mobile/mcenter'),
    },
    {
        path: '/mobile/deposit',
        name: 'mobileDeposit',
        component: () => import('../views/mobile/deposit'),
    },
    {
        path: '/mobile/withdrawal',
        name: 'mobileWithdrawal',
        component: () => import('../views/mobile/withdrawal'),
    },
    {
        path: '/mobile/transfer',
        name: 'mobileTransfer',
        component: () => import('../views/mobile/transfer'),
    },
    {
        path: '/mobile/tranRecord',
        name: 'mobileTranRecord',
        component: () => import('../views/mobile/tranRecord'),
    },
    {
        path: '/mobile/betRecord',
        name: 'mobileBetRecord',
        component: () => import('../views/mobile/betRecord'),
    },
    {
        path: '/mobile/info',
        name: 'mobileInfo',
        component: () => import('../views/mobile/info'),
    },
    {
        path: '/mobile/member',
        name: 'mobileMember',
        component: () => import('../views/mobile/member'),
    },
    {
        path: '/mobile/about',
        name: 'mobileAbout',
        component: () => import('../views/mobile/about'),
    },
    {
        path: '/mobile/download',
        name: 'mobileDownload',
        component: () => import('../views/mobile/download'),
    },
    {
        path: '/mobile/question',
        name: 'mobileQuestion',
        component: () => import('../views/mobile/question'),
    },
    {
        path: '/mobile/login',
        name: 'mobileLogin',
        component: () => import('../views/mobile/login'),
    },
    {
        path: '/mobile/set',
        name: 'mobileSet',
        component: () => import('../views/mobile/set'),
    },
    {
        path: '/mobile/bank',
        name: 'mobilebank',
        component: () => import('../views/mobile/bank'),
    },
    {
        path: '/mobile/bankAdd',
        name: 'mobileBankAdd',
        component: () => import('../views/mobile/bankAdd'),
    },
    {
        path: '/mobile/usdt',
        name: 'mobileUsdt',
        component: () => import('../views/mobile/usdt'),
    },
    {
        path: '/mobile/usdtAdd',
        name: 'mobileUsdtAdd',
        component: () => import('../views/mobile/usdtAdd'),
    },
    {
        path: '/mobile/changePsw',
        name: 'mobileChangePsw',
        component: () => import('../views/mobile/changePsw'),
    },
    {
        path: '/mobile/game',
        name: 'mobileGame',
        component: () => import('../views/mobile/game'),
    },
    {
        path: '*',
        name: '404 page',
        component: () => import ('../views/pc/404'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
