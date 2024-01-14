import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/TheAbout.vue';

const routes = [{ path: '/about', name: 'About', component: AboutView }];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
