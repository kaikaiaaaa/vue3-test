# 细节记录
1. vue2中 v-for优先级高于v-if，不建议一起使用；vue3中v-if优先级高于v-for所以一定
   不能一起使用， 可以合理利用计算属性。
   

2. vue3中组件绑定多个数据可以这么写，并且可以增加一些附加方法，比如trim
   
   ```html
    v-model="item.checked" v-model:title.trim="item.title"
   ```
   
   ```js
   titleModifiers:{default: () => {{}}}
   
   props.titleModifiers.trim ? e.target.value = e.target.value.trim() : null
   ```
   
3. router的变化，详情见router下目录

# 插件安装
1. router(使用见router目录)

```html
npm i vue-router@next
```
