import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '@/views/HomePage'
import AboutPage from '@/views/AboutPage'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{path: '/', component: HomePage},
		{path: '/about', component: AboutPage}
	]
})