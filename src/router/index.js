import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import About from '../views/About.vue';
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import Admin from '../views/Admin.vue';
import Account from '../views/Account.vue';
import ProjectsAdmin from '../components/ProjectsAdmin.vue';
import { auth } from '../firebase/config';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
	{
		path: '/skills',
		name: 'skills',
		component: Skills,
	},
	{
		path: '/projects',
		name: 'projects',
		component: Projects,
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact,
	},
	{
		path: '/admin/signIn',
		name: 'admin',
		component: Admin,
		beforeEnter(to, from, next) {
			let user = auth.currentUser;
			if (!user) {
				next();
			} else {
				next({ name: 'account' });
			}
		},
	},
	{
		path: '/admin',
		name: 'account',
		component: Account,
		beforeEnter(to, from, next) {
			let user = auth.currentUser;
			if (user) {
				next();
				document.body.style.backgroundColor = '#fff';
			} else {
				next({ name: 'admin' });
			}
		},
	},
	{
		path: '/admin/projects',
		name: 'allprojects',
		component: ProjectsAdmin,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
