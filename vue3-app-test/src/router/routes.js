
const routes = [
    {path: '/', component: () => import('../App.vue')}, //不异步
    {path: '/about', component: () => import('../views/About.vue')},
    {path: '/home', component: () => import('../views/Home.vue')},
]
export default routes
