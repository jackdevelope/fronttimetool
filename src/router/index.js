import Vue from 'vue'
import VueRouter from 'vue-router'
//导入Login.vue路由组件
import Login from "@/components/Login"
Vue.use(VueRouter)

const routes = [
    //访问/.
    {
      path:"/",
      redirect:"/login",
    },
   //登录路由
    {
      path:"/login",
      name:"login",
      component:Login
    },
];

const router = new VueRouter({
  routes
})

export default router
