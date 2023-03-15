<template>
	<!--	<img alt="Vue logo" src="./assets/logo.png"/>-->
	<!--	<HelloWorld msg="Hello Vue 3.12 + Vite"/>-->
	<!--	选择组件 -->
<!--	<CheckEdit v-model="item.checked" v-model:title.trim="item.title" v-for="item in product"-->
<!--			   :key="item.id"></CheckEdit>-->
<!--	<div>-->
<!--		<span>选中的商品：</span>-->
<!--		<div v-for="(item,index) in checkedVals" :key="index">{{ item.title }}</div>-->
<!--	</div>-->
<!--	<a-button>Add</a-button>-->
<!--	<div>-->
<!--		导航-->
<!--		<router-link to="/home">home</router-link>-->
<!--		<router-link to="/about">about</router-link>-->
<!--	</div>-->
	<router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CheckEdit from './components/testComps/CheckEdit.vue'
import {computed, ref} from 'vue'
import {logout, login, loginUserStore} from "./store/useLoginUser";

const defaultVals = [
	{
		id: 1,
		checked: false,
		title: 'title1'
	},
	{
		id: 2,
		checked: true,
		title: 'title2'
	},
]
export default {
	name: 'App',
	components: {
		HelloWorld,
		CheckEdit,
	},
	setup() {
		const productRef = ref(defaultVals)
		const checkedValsRef = computed(() => productRef.value.filter((it) => it.checked))
		const isARef = ref(true)
		// fn 是需要执行的函数
		// wait 是时间间隔
		const throttle = (fn, wait = 50) => {
			// 上一次执行 fn 的时间
			let previous = 0
			// 将 throttle 处理结果当作函数返回
			return function (...args) {
				// 获取当前时间，转换成时间戳，单位毫秒
				let now = +new Date()
				// 将当前时间和上一次执行函数的时间进行对比
				// 大于等待时间就把 previous 设置为当前时间并执行函数 fn
				if (now - previous > wait) {
					previous = now
					fn.apply(this, args)
				}
			}
		}

		// DEMO
		// 执行 throttle 函数返回新函数
		const betterFn = throttle(() => console.log('fn 函数执行了'), 2000)
		// 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn
		setInterval(betterFn, 10)
		return {
			product: productRef,
			checkedVals: checkedValsRef,
			isA: isARef,
			logout,
			loginUserStore
		}

	},
	// data(){
	// 	return{
	// 		checked:false,
	// 		title:'111111'
	// 	}
	// },
}
</script>
