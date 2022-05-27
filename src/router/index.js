import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import SecondPage from '@/views/SecondPage.vue';
import ThirdPage from '@/views/ThirdPage.vue';
import FourthPage from '@/views/FourthPage.vue';

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
  {
    path: '/register-review',
    name: 'register-review',
    component: ThirdPage,
  },
  {
    path: '/register-concluded',
    name: 'register-concluded',
    component: FourthPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
