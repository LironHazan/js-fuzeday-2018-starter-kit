import Vue from 'vue'
import Vuex from 'vuex'

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
            let newCartList = [];
            for (let i = 0; i < state.inCart.length; i++) {
                if (state.inCart[i].id === id) {
                    continue
                }
                newCartList.push(state.inCart[i])
            }
            state.inCart = newCartList
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
