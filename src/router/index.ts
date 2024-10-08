import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: () => import('@/pages/home/index.vue')
    },
    {
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue')
    },
    {
      // 重定向
      path: '/',
      redirect: '/home'
    }
  ],
  // 滚动行为：控制滚动条的位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})