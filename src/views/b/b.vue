<template>
  <div class="hello">
    <h2>views b</h2>
    <b-page @childFn="parentFn"></b-page>
    父组件路由参数：{{ $route.params.id }}<br>
    父组件接收子组件的参数： -- {{message}} -- {{message1}}
  </div>
</template>

<script>
  import bPage from './components/bPage'
  export default {
    data () {
      return {
        message: 'Welcome to Your Vue.js App',
        message1: 'Welcome to Your Vue.js App1',
        id: 12
      }
    },
    components: {
      bPage
    },
    methods: {
      parentFn(payload) {
        console.log("payload>>>>>>" + payload)
        console.log("payload>>>>>>" + payload.message)
        console.log("payload>>>>>>" + payload.message1)
        this.message = payload.message
        this.message1 = payload.message1
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
