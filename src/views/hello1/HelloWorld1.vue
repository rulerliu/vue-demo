<template>
  <div class="hello">
    <h2>views 111</h2>
    <a @click="test">helloworld1</a>
    <!--<a @click="sub1">sub1</a>
    <a @click="sub2">sub2</a>-->
    <router-link to="/HelloWorld1/sub1">sub1</router-link>
    <router-link to="/HelloWorld1/sub2">sub2</router-link>

    <!-- 注意：子路由必须在父路由加上router-view才能显示出来 -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        id: 12
      }
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
          path: '/HelloWorld1/sub1',
          query: {id: vm.id}
        })
      },
      sub2: function() {
        let vm = this
        // 核心语句
        vm.$router.push({
          path: '/HelloWorld1/sub2',
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
