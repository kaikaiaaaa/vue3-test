<template>
	<div class="wrapper">
		<div class="checkbox" :class="{checked:modelValue}" @click="handleChecked"></div>
		<input type="text" :value="title" @input="handleInput">
	</div>
</template>

<script>
export default {
	name: "CheckEdit",
	props: {
		modelValue: Boolean,
		title: String,
		titleModifiers: {
			default: () => {{}}
		}
	},
	setup(props, ctx) {
		const handleChecked = () => {
			console.log('ctx', ctx);
			ctx.emit("update:modelValue", !props.modelValue)
		}
		const handleInput = (e) => {
			//修饰符去掉空格
			props.titleModifiers.trim ? e.target.value = e.target.value.trim() : null
			ctx.emit("update:title", e.target.value)
		}
		return {
			handleChecked,
			handleInput
		}
	},
}
</script>

<style scoped>
.wrapper {
	display: flex;

}

.checkbox {
	width: 12px;
	cursor: pointer;
	margin-right: 2px;
	height: 12px;
	border: 1px solid;
}

.checked {
	background-color: red;
}

</style>
