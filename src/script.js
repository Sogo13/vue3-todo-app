import axios from 'axios';


const script = {
    actions:{
        async  fetchData(ctx) {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                ctx.commit('updateGoods', response.data)
                return response.data;
            } catch (error) {
                console.error(error,'ERROR');
            }

        },
        async  fetchGoodById(payload) {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/' + payload);
                return response.data;
            } catch (error) {
                console.error(error,'ERROR');
            }
        },
        async addToCart(ctx,payload){
            try {

                ctx.commit('updateCartId', payload.data.id)
                ctx.commit('updateCartCount', payload.data.counter)
            } catch (error){
                console.error(error,'ERROR');
            }

        },
        async startLogin(ctx,payload){
            try {
                console.log(payload)
                ctx.commit('updateLogin', payload.login)

            } catch (error){
                console.error(error,'ERROR');
            }

        },async stopLogin(ctx){
            try {
                ctx.commit('updateLogin', '')
            } catch (error){
                console.error(error,'ERROR');
            }

        },

    },

mutations: {
    updateGoods(state, allGoods) {
        state.allGoods = allGoods
    },
    updateCartId(state, id) {
        state.cart.id = id
    },
    updateCartCount(state, count) {
        state.cart.counter = count
    },
    updateLogin(state, login) {
        state.login = login
    },

},
state: {
        allGoods:null,
        cart: {
            id:0,
            counter:1,
        },
    login:null,
},
getters: {
    getGoods(state) {
        return state.allGoods
    },
    getCart(state) {
        return state.cart
    },
    getLogin(state) {
        return state.login
    },

},}
export default script
