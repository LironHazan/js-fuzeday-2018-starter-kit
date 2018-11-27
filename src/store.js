import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inCart: []
    },
    mutations: {
        addToCart: (state, item) => {
            // get stored item in cart
            let storedItemIndex = state.inCart.findIndex(c => c.itemId === item.itemId);

            // update or add item to cart
            if (storedItemIndex !== -1) {
                state.inCart[storedItemIndex].quantity += item.quantity;
            } else {
                state.inCart.push(item);
                storedItemIndex = state.inCart.length - 1;
            }

            // remove item from cart if quantity is not greater than 0
            if (state.inCart[storedItemIndex].quantity <= 0) {
                state.inCart.splice(storedItemIndex, 1);
            }

            return state;
        },
    },
    getters: {
        inCart: (state) => state.inCart,
        inCartAmount: (state) => state.inCart.length,
    },
    actions: {
        addToCart: (context, item) => context.commit('addToCart', item),
    }
})