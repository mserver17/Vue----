import { createRouter, createWebHistory } from 'vue-router';

import Main from '../pages/Main.vue';
import AboutUs from '../pages/AboutUs.vue';
import CommentsPage from '../pages/CommentPage.vue';
import Settings from '../pages/Settings.vue';

const routes = [
  { path: '/', component: Main, name: 'Main' },
  { path: '/about-us', component: AboutUs, name: 'AboutUs' },
  { path: '/comments', component: CommentsPage, name: 'CommentsPage' },
  { path: '/settings', component: Settings, name: 'Settings' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
