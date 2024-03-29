import Vue from 'vue';
import VueRouter from 'vue-router';
// home不可按需引入,否则放在其中的全局样式会失效
import home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: {
            name: 'home',
        },
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            title: '首页',
        },
    },
    {
        path: '/solution',
        name: 'solution',
        component: () => import('@/views/solution.vue'),
        meta: {
            title: '策略池',
        },
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user.vue'),
        meta: {
            title: '我的',
        },
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
        meta: {
            title: '登录',
        },
    },

    {
        path: '/wkhmd/',
        name: 'wkhmd',
        component: () => import('@/views/well-known-hot-money-detail.vue'),
        meta: {
            title: '知名游资',
        },
    },
    {
        path: '/wkhm',
        name: 'wkhm',
        component: () => import('@/views/well-known-hot-money.vue'),
        meta: {
            title: '知名游资',
        },
    },
    {
        path: '/bbgs_solution/:id',
        name: 'bbgs_solution',
        component: () => import('@/views/bbgs-solution.vue'),
        meta: {
            // title: "步步高升策略池"
        },
    },
    {
        path: '/market_popularity',
        name: 'market_popularity',
        component: () => import('@/views/market-popularity.vue'),
        meta: {
            title: '市场人气',
        },
    },
    {
        path: '/daily_limit_analysis',
        name: 'daily_limit_analysis',
        component: () => import('@/views/daily-limit-analysis.vue'),
        meta: {
            title: '涨停板分析',
        },
    },
    {
        path: '/daily_limit_analysis_detail',
        name: 'daily_limit_analysis_detail',
        component: () => import('@/views/daily-limit-analysis-detail.vue'),
        meta: {
            title: '涨停板分析',
        },
    },
    {
        path: '/my_watchlist',
        name: 'my_watchlist',
        component: () => import('@/views/my-watchlist.vue'),
        meta: {
            title: '我的自选股',
        },
    },
    {
        path: '/longhu',
        name: 'longhu',
        component: () => import('@/views/longhu.vue'),
        meta: {
            title: '龙虎榜',
        },
    },
    {
        path: '/longhu_detail',
        name: 'longhu_detail',
        component: () => import('@/views/longhu-detail.vue'),
        meta: {},
    },
    {
        path: '/diagnose_report',
        name: 'diagnose_report',
        component: () =>
            import(
                /* webpackChunkName: "diagnose_report" */ '@/views/diagnose-report.vue'
            ),
        meta: {
            title: '诊断报告',
        },
    },
    {
        path: '/review_summary',
        name: 'review_summary',
        component: () => import('@/views/review-summary.vue'),
        meta: {
            title: '复盘总结',
        },
    },
    {
        path: '/business_fund',
        name: 'business_fund',
        component: () => import('@/views/business-fund.vue'),
        meta: {
            title: '板块行业',
        },
    },
    {
        path: '/concept_fund',
        name: 'concept_fund',
        component: () => import('@/views/concept-fund.vue'),
        meta: {
            title: '概念行业',
        },
    },
    {
        path: '/stock_detail/:id',
        name: 'stock_detail',
        component: () => import('@/views/stock-detail.vue'),
        meta: {},
    },
    {
        path: '/target_rank',
        name: 'target_rank',
        component: () => import('@/views/target-rank.vue'),
        meta: {
            title: '行业板块财务指标排名',
        },
    },
    {
        path: '/indicators_sort',
        name: 'indicators_sort',
        component: () => import('@/views/indicators-sort.vue'),
        meta: {
            title: '保险行业财务指标排名',
        },
    },
    {
        path: '/hold_history',
        name: 'hold_history',
        component: () => import('@/views/hold-history.vue'),
        meta: {
            title: '持仓历史',
        },
    },
    {
        path: '/hold_ranking',
        name: 'hold_ranking',
        component: () => import('@/views/hold-ranking.vue'),
        meta: {
            // title: "牛散最新持股排名"
        },
    },

    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search.vue'),
        meta: {
            title: '查牛散、私募、机构',
        },
    },
    {
        path: '/new_stakes',
        name: 'new_stakes',
        component: () => import('@/views/new-stakes.vue'),
        meta: {
            // title: "吕强最新持股"
        },
    },
];

const router = new VueRouter({
    scrollBehavior: () => ({
        y: 0,
    }),
    mode: 'history',
    routes,
});

export default router;
