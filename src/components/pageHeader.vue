<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>pageHeader</h2>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
  data () {
    return {
      msg: '这是页头',
      id: 43 // 路由需要传递的参数
    }
  },
  methods: {
    change: function () {
      let vm = this
      // 核心语句
      vm.$router.push({
        path: '/select',
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
