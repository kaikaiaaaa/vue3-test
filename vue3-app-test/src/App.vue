<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.12 + Vite" />
	<CheckEdit v-model="checked" v-model:title.trim="title"></CheckEdit>
	{{checked}}
	{{title}}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CheckEdit from './components/testComps/CheckEdit.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
		CheckEdit
  },
	data(){
  	return{
  		checked:false,
			title:'111111'
		}
	},
}
</script>
