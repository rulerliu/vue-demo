<template>
  <div class="hello">
    <h2>views sub2</h2>
    <a @click="test">sub2</a>
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
