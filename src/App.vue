<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <router-link to="/HelloWorld1">HelloWorld1</router-link>
    <router-link to="/HelloWorld2">HelloWorld2</router-link>
    <br>
    <router-link to="/HelloWorld11">HelloWorld11</router-link>
    <router-link to="/HelloWorld22">HelloWorld22</router-link>
    <router-link to="/HelloWorld1/sub1">sub1</router-link>
    <router-link to="/a/1">a</router-link>
    <router-link to="/b/2">b</router-link>
    <router-link to="/b2a/3">b2a</router-link>
    <router-link to="/upload">upload</router-link>
    <page-header></page-header>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import pageHeader from '@/components/pageHeader'
  import pageFooter from '@/components/pageFooter'

export default {
  name: 'App',
  components: {
    pageHeader,
    pageFooter
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
