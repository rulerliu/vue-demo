import Vue from 'vue'
import VRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HelloWorld1 from '@/components/HelloWorld1'
// import HelloWorld2 from '@/components/HelloWorld2'
// import select from '@/components/select'

// 批量import routers
import views from './views'

// 通过Vue的use方法注入VueRouter
Vue.use(VRouter)

let router = new VRouter({
  routes: [
    ...views
  ]
})

router.beforeEach((to, from, next) => {
  console.log("路由前")
  console.log("from:" + from)
  console.log("to:" + to)
  // 此处必须为undefined
  let nextPage = undefined;
  if (!to.meta.needLogin) {
    //若页面不需要登录
    console.log("页面不需要登录")
    next(nextPage);
    return;
  } else {
    //页面需要登录
    console.log("页面需要登录")
    // if (store.state.userInfo.tel) {
    if (false) {
      //若已登录
      next(nextPage);
    } else {
      console.log("需要登录啊，亲");
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
})

router.afterEach((to, from, next) => {
  console.log("路由后"+to.meta.logId);
  window.scrollTo(0, 0);
  if (to.meta.needLogin) {
    console.log("是否登陆")
    //页面需要登录
    let logId = to.meta.logId;
    setTimeout(function () { //将这玩意儿扔到下一个轮询执行
      if (store.state.userInfo.tel) {
        //若已登录
        console.log("111111");
        if(logId){
          postLog(logId);
        }
      } else {
        login(); //弹出登录框
      }
    },0)
  }
})

// 路由配置
export default router
