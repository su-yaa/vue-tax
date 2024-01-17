import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/TheAbout.vue';
import TheView from '@/layout/TheView.vue';

const routes = [
	{ path: '/', name: 'Home', component: TheView },
	{ path: '/about', name: 'About', component: AboutView },
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
