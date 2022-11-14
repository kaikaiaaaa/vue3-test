import {ref, watchEffect} from 'vue'

export default function useTodos() {
    let countRef = ref(0)
    const newTodoRef = ref('')
    const todosRef = ref([])
    watchEffect(() => {
        //当数据变化时可以执行一些操作
        console.log('countRef', countRef)
    })
    const addTodo = () => {
        //    新增一个
        todosRef.value.push({
            id: Date.now(),
            title: newTodoRef.value,
            completed: false
        })
    }
    const increase = () => {
        countRef.value++
    }
    return {
        countRef,
        increase,
        newTodoRef,
        todosRef,
        addTodo
    }
}
