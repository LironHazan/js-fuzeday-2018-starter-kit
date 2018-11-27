import Vue from 'vue'
import Vuex from 'vuex'
import { client } from './services/shopify-client';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inCart: []
    },
    mutations: {
        setCartItems: (state, items) => {
            state.inCart = items;
            return state;
        },
        removeCartItem: (state, id) => {
            state.inCart = state.inCart.filter(item => item.id !== id)
            return state;
        }
    },
    getters: {
        inCart: (state) => state.inCart,
        inCartAmount: (state) => state.inCart.length
    },
    actions: {
        setCartItems: (context, items) => context.commit('setCartItems', items),
        removeCartItem: (context, id) => context.commit('removeCartItem', id)
    }
})
