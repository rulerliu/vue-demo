<template>
  <div class="hello">
    子组件：a页面引入aPage页面的<br>
    子组件接收父组件的参数：{{key1}} --- {{key2}}
  </div>
</template>

<script>
  export default {
    // 这里是父组件属性的key
    props: ["key1", "key2"],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        id: 12
      }
    },
    methods: {

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
