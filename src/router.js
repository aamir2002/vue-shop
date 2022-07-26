import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '@/views/HomePage'
import AboutPage from '@/views/AboutPage'
import CartPage from '@/views/CartPage'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{path: '/', name: 'Главная', component: HomePage},
		{path: '/about', name: 'О нас', component: AboutPage},
		{path: '/cart', name: 'Корзина', component: CartPage, props: true},
	]
})