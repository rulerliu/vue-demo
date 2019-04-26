<template>
  <div class="hello">
    <h2>views 222</h2>
    <span @click="getCityList">调用接口</span>

    <div class="btn-box" v-if="false">
      <el-button class="btn" type="primary" @click="reset">重置</el-button>
    </div>
    <div class="btn-box" v-else>
      <el-button class="btn" type="primary" @click="cancelSave">取消</el-button>
    </div>
    <!--<button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {

  },
  methods: {
    // 获取地市列表
    getCityList: function() {
      const vm = this
      console.log(this.$util.getUrl("activity-web/rest/invoke?service=20035"))

      vm.$axios({
        url: this.$util.getUrl("activity-web/rest/invoke?service=20035"),
        data: {
          parentCode: "ACTIVITY_CITY"
        }
      }).then(res => {
        // vm.cityList = res.rows
        console.log(">>>>res.rows:" + res.rows)
      })
    },
    // 取消按钮
    cancelSave: function () {
      let vm = this;
      vm.$confirm("是否取消", "提示", {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true,
        type: 'warning'
      }).then(function () {
        // 点击确定按钮
        vm.goback('/')
      }).catch(function () {
      })
    },

    goback: function (path) {
      this.$router.push({
        path: path
      })
      // this.$router.back()
    },
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
