import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
	state: {
		products: []
	},
	mutations: {
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products
		}
	},
	getters: {
		PRODUCTS(state) {
			return state.products
		}
	},
	actions: {
		async GET_PRODUCTS_FROM_API({commit}) {
			try {
				const products = await axios('http://localhost:3000/products', {
					method: 'GET'
				})
				commit('SET_PRODUCTS_TO_STATE', products.data)
				return products
			} catch (error) {
				console.log(error)
				return error
			}
		}
	}
})

export default store