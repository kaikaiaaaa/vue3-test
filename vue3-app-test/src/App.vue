<template>
	<img alt="Vue logo" src="./assets/logo.png"/>
	<HelloWorld msg="Hello Vue 3.12 + Vite"/>
	<!--	选择组件 -->
	<CheckEdit v-model="item.checked" v-model:title.trim="item.title" v-for="item in product" :key="item.id"></CheckEdit>
	<div>
		<span>选中的商品：</span>
		<div v-for="(item,index) in checkedVals" :key="index">{{ item.title }}</div>
	</div>
	<div>
		导航
		<router-link to="/">home</router-link>
		<router-link to="/about">about</router-link>
	</div>
	<router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CheckEdit from './components/testComps/CheckEdit.vue'
import {computed, ref} from 'vue'
import Error from "./components/testComps/Error";

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
		Error
	},
	setup() {
		const productRef = ref(defaultVals)
		const checkedValsRef = computed(() => productRef.value.filter((it) => it.checked))
		const isARef = ref(true)
		return {
			product: productRef,
			checkedVals: checkedValsRef,
			isA: isARef
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
