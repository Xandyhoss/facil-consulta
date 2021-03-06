import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bootstrap from './bootstrap';

import './assets/css/main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'animate.css';

createApp(App).use(store).use(router).use(bootstrap).mount('#app');
