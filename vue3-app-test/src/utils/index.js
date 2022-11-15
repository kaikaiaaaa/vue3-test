import {defineAsyncComponent, h} from 'vue'
// import Loading from './loading.vue'
// import Error from './error.vue'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// NProgress.configure(
//     {
//         showSpinner: false,
//         trickleSpeed: 200,
//     }
// )
//组件异步加载
export const getAsyncComponent = (url) => {
    return defineAsyncComponent({
        loader: () => import(url),
        // loadingComponent: Loading,  //加载中组件
        // errorComponent: Error,  //加载失败组件
        // errorComponent: {  //也可以直接写组件
        // render() {
        //   return h('div', '加载失败')
        //   }
        // }
        delay: 200,
        timeout: 3000,
    })
}

// //页面异步加载
// export const getAsyncPage = (url) => {
//     return defineAsyncComponent({
//         loader: async () => {
//             // NProgress.start()
//             const url = await import(url)
//             // NProgress.done()
//             return url
//         },
//         // loadingComponent: Loading,  //加载中组件
//         // errorComponent: Error,  //加载失败组件
//         delay: 200,
//         timeout: 3000,
//     })
// }
