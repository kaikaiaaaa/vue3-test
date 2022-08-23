# 细节记录

### 1. vue2中 v-for优先级高于v-if，不建议一起使用；vue3中v-if优先级高于v-for所以一定 不能一起使用， 可以合理利用计算属性。


### 2. vue3中组件绑定多个数据可以这么写，并且可以增加一些附加方法，比如trim

   ```html
    v-model="item.checked" v-model:title.trim="item.title"
   ```

   ```js
   titleModifiers:{default: () => {{}}}
   
   props.titleModifiers.trim ? e.target.value = e.target.value.trim() : null
   ```

### 3. router的变化，详情见router下目录

### 4. vue3可以改变组件的dom逻辑结构。 你可以把你的组件放到页面中任意dom层级下
```html
<Teleport to="body">
    <comp>这是你写的组件</comp>
</Teleport>
```



### 5. reactivity api 监听响应式数据变化的api
```js
import {reactive,readonly,ref,computed} from 'vue'
const state = reactive({a:1,b:2})
window.state = state
//此时obj对象为proxy，可以监听到内部数据的变化,

//readonly只能读取代理对象中的成员，不可以修改
const imState = readonly({a:1,b:2})

//ref可以代理任何数据
const imState = ref({a:1,b:2})
const imState = ref(0)
const comp = computed(() => {}) // 计算属性只有调用comp.value改变时才会执行


//应用
让一个对象变成响应式数据 => reactive/ref
让一个对象的所有属性只读 => readonly
让一个非对象数据变为响应式数据 => ref
根据已知的响应式数据得到一个新的响应式数据 => computed



```
监听数据变化watchEffect/watch(相当于vue2的watch)
```js
import {watchEffect,reactive,ref} from 'vue'

const state = reactive({a:1,b:2})
const count = ref(0)

const stop = watchEffect(() => {
    console.log(this.state.a)
    //该函数会立即执行，响应式数据变化后再执行
})
state.a++
//通过stop函数，停止监听
stop()


```

转换unref,toRef
```js
unref等同于:isRef(val) ? val.value : val

```
```js
toRef:得到一个响应式对象某个属性的ref格式
const state = reactive({
   a:1,
   b:2
})
const Ref1 = toRef(state,'a') //Ref1:{value:...}

```
```js
toRefs:把一个响应式对象的所有属性转换为ref格式,然后包装到一个plain-object中返回

const state = reactive({
   foo:1,
   bar:2
})

const stateAsRefs = toRefs(state)
/**
 * stateAsRefs
 * {
 *     foo:{value:...}
 *     bar:{value:...}
 *     
 * }
 */

```
```js
//使用场景
setUp(){
    const ref1 = reactive({a:1})
   return {
        ...toRefs(ref1)
   }
}

function t(){
    const pos = reactive({x:0})
   return pos
}
setUp(){
    const {x} = toRefs(t())
}
```
### 6. compositionApi使用规范
```
(1)所有composition function都以ref的结果返回，以保证setup函数的返回结果中
不包含reactive或readonly产生的数据

```
```js
function usePos(){
    const pos = reactive({x:0,y:0})
   return toRefs(pops) // {x:refObj,y:refObj}
}

function useBooks(){
    const books = ref([])
   return {
        books //books:is refObj
   }
}

function useUser(){
    const user = readonly({
       isLogin:false,
       id:null
    })
   return toRefs(user)
}
setUp(){
    //在setup函数中尽量保证解构，展开出来的所有响应式数据是ref
   return{
       ...usePos(), 
      ...useBooks(),
      ...useUser()
   }
}
```

# 插件安装

1. router(使用见router目录)

```html
npm i vue-router@next
```

2.加载条

```html
npm i nprogress
```
