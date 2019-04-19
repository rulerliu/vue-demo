import HelloWorld from '@/views/hello/HelloWorld'
import HelloWorld1 from '@/views/hello1/HelloWorld1'
import HelloWorld2 from '@/views/hello2/HelloWorld2'
import select from '@/views/select/select'
const HelloWorld11 = () => import('@/views/hello1/HelloWorld1')
const HelloWorld22 = () => import('@/views/hello2/HelloWorld2')
const login = () => import('@/views/login/login')
const test = () => import('@/components/test')
const sub1 = () => import('@/views/hello1/sub1')
const sub2 = () => import('@/views/hello1/sub2')
const a = () => import('@/views/a/a')
const b = () => import('@/views/b/b')

export default [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/HelloWorld1',
    name: 'HelloWorld1',
    component: HelloWorld1,
    // 使用 children 属性，实现子路由，同时，子路由的 path 前面，不要带 / ，否则永远以根路径开始请求，这样不方便我们用户去理解URL地址
    children: [{
      path: "/",
      component: sub1,
    }, {
      path: "sub1",
      component: sub1,
    },
    {
      path: "sub2",
      component: sub2,
    }]
  },
  {
    path: '/HelloWorld2',
    name: 'HelloWorld2',
    component: HelloWorld2
  },
  {
    path: '/select',
    name: 'select',
    component: resolve => require(['@/views/select/select'], resolve),
    meta: {
      needLogin: true,
      logId: 'select'
    }
  },
  {
    path: '/HelloWorld11',
    name: 'HelloWorld11',
    component: HelloWorld11
  },
  {
    path: '/HelloWorld22',
    name: 'HelloWorld22',
    component: HelloWorld22
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/a/:id',
    name: 'a',
    component: a
  },
  {
    path: '/b/:id',
    name: 'b',
    component: b
  },
  {
    // 访问/b2a，重定向到/a
    path: '/b2a/:id',
    name: 'b2a',
    redirect: '/a/:id'
  }
]
