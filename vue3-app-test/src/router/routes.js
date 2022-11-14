import {getAsyncPage} from "../utils";

const Home = getAsyncPage('../views/Home.vue')
const About = getAsyncPage('../views/About.vue')
const routes = [
    {path: '/', component: () => import('../App.vue')}, //不异步
    {path: '/about', component: About},
    {path: '/home', component: Home},
]
export default routes
