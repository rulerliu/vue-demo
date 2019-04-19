<template>
  <div class="hello">
    <h2>views a</h2>
    <!-- 父子组件传参,加了:表示vm作用域里面的变量 -->
    <a-page key1="value1" :key2="value2"></a-page>
    父组件路由参数：{{ $route.params.id }}
  </div>
</template>

<script>
  import aPage from "./components/aPage"
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        id: 12,
        value2: "adfafasfsadfas"
      }
    },
    components: {
      aPage
    },
    methods: {
      test: function() {
        let vm = this
        // 核心语句
        vm.$router.push({
          path: '/test',
          query: {id: vm.id}
        })
      },
      sub1: function() {
        let vm = this
        // 核心语句
        vm.$router.push({
          path: 'HelloWorld1/sub1',
          query: {id: vm.id}
        })
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
