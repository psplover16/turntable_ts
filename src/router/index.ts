import { createRouter, createWebHistory } from 'vue-router';
import ThemeHostView from '@/views/ThemeHostView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/carPlus',
    },
    {
      path: '/:activityName',
      name: 'theme-home',
      component: ThemeHostView,
      props: true,
    },
  ],
});

export default router;