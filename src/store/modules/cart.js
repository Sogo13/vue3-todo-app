import axios from 'axios';


const cart = {
    actions:{
        async addToCart(ctx,payload){
            try {

                ctx.commit('updateCartId', payload.data.id)
                ctx.commit('updateCartCount', payload.data.counter)
            } catch (error){
                console.error(error,'ERROR');
            }

        },
        async clearCart(ctx){
            try{
                ctx.commit('updateCartId', 0)
                ctx.commit('updateCartCount', 1)
            }catch (error){ console.error(error,'ERROR');}
        }

    },

    mutations: {
        updateCartId(state, id) {
            state.cart.id = id
        },
        updateCartCount(state, count) {
            state.cart.counter = count
        },

    },
    state: {
        cart: {
            id:0,
            counter:1,
        },
    },
    getters: {
        getCart(state) {
            return state.cart
        },
    },}
export default cart
