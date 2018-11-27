import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inCart: []
    },
    mutations: {
        addToCart: (state, item) => {
            // get stored item in cart
            let productIndex = state.inCart.findIndex(c => c.product.id === item.product.id);

            // update or add item to cart
            if (productIndex !== -1) {
                Object.keys(item.quantity).forEach(variantId => {
                    if (state.inCart[productIndex].product.variants.findIndex(c => c.id === variantId) === -1) {
                        state.inCart[productIndex].quantity[variantId] = 0;
                    }
                    state.inCart[productIndex].quantity[variantId] += item.quantity[variantId];
                });
            } else {
                state.inCart.push(item);
                productIndex = state.inCart.length - 1;
            }

            // remove empty variants quantities
            state.inCart[productIndex].quantity = Object.keys(state.inCart[productIndex].quantity).reduce((acc, variantId) => {
                if (state.inCart[productIndex].quantity[variantId] > 0) {
                    acc[variantId] = state.inCart[productIndex].quantity[variantId];
                }
                return acc;
            }, {});

            // remove item from cart if no variant is selected
            if (Object.keys(state.inCart[productIndex].quantity).length === 0) {
                state.inCart.splice(productIndex, 1);
            }

            return state;
        },
        removeCartItem: (state, id) => {
            state.inCart = state.inCart.filter((item) => {
                if (item.product.id === id) {
                    if (item.quantity > 1) {
                        item.quantity--
                        return true
                    } else {
                        return false;
                    }
                }
                return true
            })
            console.log('remove', state.inCart);
            return state;
        }
    },
    getters: {
        inCart: (state) => state.inCart,
        inCartAmount: (state) => state.inCart.length,
    },
    actions: {
        addToCart: (context, item) => context.commit('addToCart', item),
        removeCartItem: (context, id) => context.commit('removeCartItem', id)
    }
})