import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import SecondPage from '@/views/SecondPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about-attendance',
    name: 'about-attendance',
    component: SecondPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
