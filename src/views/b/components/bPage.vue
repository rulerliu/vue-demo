<template>
  <div class="hello">
    b页面引入bPage页面的，子组件向父组件传值<br>
    <!-- 子组件是一个buttton按钮，并为其添加了一个click事件，当点击的时候使用$emit()触发事件，把message传给父组件 -->
    <input type="text" v-model="obj.message" />
    <input type="text" v-model="obj.message1" />
    <button @click="click">子组件：Send</button>
  </div>
</template>

<script>
  export default {
    props:['mes'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        id: 12,
        obj: {
          // 默认
          message: '我是来自子组件的消息',
          message1: '我是来自子组件的消息1'
        }
      }
    },
    methods: {
      click() {
        let vm = this
        // childFn对应父组件的属性key
        this.$emit('childFn', vm.obj);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
