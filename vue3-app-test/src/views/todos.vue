<template>
	count:{{ countRef }}
	<button @click="increase">+</button>
	<input type="text" v-model="newTodoRef">
	<button @click="addTodo">add</button>
	<ul>
		<li v-for="todo in todosRef" :key="todo.id">{{ todo.title }}</li>
	</ul>
</template>
<script>
import useTodos from '../composition/useTodos'

export default {
	setup() {
		const {countRef, increase, todosRef} = useTodos()
		return {
			countRef,
			increase,
			todosRef
		}
	}
}
</script>
