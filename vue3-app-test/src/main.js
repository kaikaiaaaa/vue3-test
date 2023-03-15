import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
import 'ant-design-vue/dist/antd.css';
// 此时会自动引入对应的样式文件，无需再手动逐一引入

//恢复登录状态
// import restoreLogin from './store/useLoginUser.js'

import {
    Button
} from 'ant-design-vue'

// 新增代码：注册特定组件
createApp(App).use(router).component(Button.name, Button).mount('#app')
// restoreLogin()
