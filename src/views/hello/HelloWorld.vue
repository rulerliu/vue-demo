<template>
  <div class="hello">
    <h2>views</h2>
    <span>name:<input v-model="name" name="name"></span><br>
    <span>reversedMsg:{{ name.split('').reverse().join('-') }}</span><br>
    <span>computed reversedMsg:{{ reversedMsg }}</span><br>
    <span>---------computed----------</span><br>
    <span>name:<input v-model="firstName" name="firstName"></span><br>
    <span>name:<input v-model="lastName" name="lastName"></span><br>
    <span>fullName:{{ fullName }}</span><br>
    <span>---------watch----------</span><br>
    <span>name:<input v-model="demo" name="demo"></span><br>
    <span>{{demo}} ---> {{value}}</span><br>
    <span>--------- watch obj ----------</span><br>
    <span>name:<input v-model="obj.name" name="newValue"></span><br>
    <span>{{obj.name}} ---> {{value}}</span><br>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li @click="change">验证路由传参</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: "a",
      firstName: "",
      lastName: "",
      demo: "",
      value: "",
      obj: {
        name: ""
      },
      id: 43 // 路由需要传递的参数
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMsg: function () {
      // `this` 指向 vm 实例
      return this.name.split('').reverse().join('*')
    },
    fullName: function() {
      return this.firstName + "--->" + this.lastName;
    },
    newValue: function() {
      return this.obj.name;
    }
  },
  watch: {
    demo() {
      this.value = this.demo;
    },
    newValue(val) {
      this.value = val;
    }
  },
  methods: {
    change: function () {
      let vm = this
      this.$router.push({
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
