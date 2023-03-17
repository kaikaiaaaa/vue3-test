
const routes = [
    {path: '/', component: () => import('../App.vue')}, //不异步
    {path: '/about', component: () => import('../views/About.vue')},
    {path: '/home', component: () => import('../views/Home.vue')},
    {path: '/chart', component: () => import('../views/Chart.vue')},
]
export default routes
