<template>
  <div class="hello">
    <div class="phone-area" v-if="changeNo">
      <span class="phone">
          login
      </span>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      id: '',
      changeNo: false
    }
  },
  // 生命周期里接收参数
  beforeCreate() {
    let vm = this
    vm.changeNo = true
    console.log(">>>>beforeCreate:" + this.$el)
    console.log(">>>>beforeCreate:" + this.$data)
    console.log(">>>>beforeCreate:" + this.changeNo)
  },
  created() {
    let vm = this
    vm.changeNo = true
    console.log(">>>>created:" + this.$el)
    console.log(">>>>created:" + this.$data)
    console.log(">>>>created:" + this.changeNo)
  },
  mounted() {
    let vm = this
    vm.changeNo = true
    console.log(">>>>mounted:" + this.$el)
    console.log(">>>>mounted:" + this.$data)
    console.log(">>>>mounted:" + this.changeNo)
  },
  updated() {
    let vm = this
    vm.changeNo = true
    console.log(">>>>updated:" + this.$el)
    console.log(">>>>updated:" + this.$data)
    console.log(">>>>updated:" + this.changeNo)
  },
  destroyed() {
    let vm = this
    vm.changeNo = true
    console.log(">>>>destroyed:" + this.$el)
    console.log(">>>>destroyed:" + this.$data)
    console.log(">>>>destroyed:" + this.changeNo)
  },
  methods: {
    loginout () {
      const vm = this
      console.log('退出登录')
      this.changeNo = false
    },
  }
}
</script>
