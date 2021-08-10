import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@view/Index/index.vue'),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@view/Article/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
