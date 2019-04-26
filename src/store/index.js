import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {},
  state: {
    todos: [
      {id: 1, text: '第一条'},
      {id: 2, text: '第二条'}
    ],
    userInfo:{
      name:"",
      userId:"",
      tel:"18718175178",
      redPacket:{
        total:"0.00",
        universalTotal:"0.00",
        orientationTotal:"0.00"
      },
      level:"",
      isLogin:false,
      icon:require("@/assets/home/user.png"),
      token:""//用户token
    },
    position:{
      flag:false,
      address:"",//具体位置字符串
      detail:{},//整个地理位置的详细信息
      errorCode:8888,
      cnMsg:"没有获取用户地理位置",
      msg:"没有获取用户地理位置",
      lat:"",  //纬度
      lng:"", //经度
      city:"",//城市名
      province:"",//省名
      addressComponents:{}//address的详细信息，精确到街道
    },
    IpPosition:{
      flag:false,
      errorCode:8888,
      msg:"没有获取用户ip地理位置",
      cnMsg:"没有获取用户ip地理位置",
      name:"广州市",         //城市中文名
      level:"",        //不知道是什么鬼，反正腾讯地图API返回了，那就估计有用，所以，就扔这里了。
      lat:"",   //城市中心纬度
      lng:""   //城市中心经度
    },
    handleAddress:{
      city:"", //手动选择的城市名,
      address:"",
      lat:"",  //纬度
      lng:"", //经度
    }
  },
  mutations: {
    ...mutation
  },
  strict: true,
  plugins: []
})
