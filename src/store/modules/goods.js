import axios from 'axios';


const goods = {
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
        async  addGood(ctx,payload) {
            try {
                console.log(payload)
                ctx.commit('addGood',payload.data)
            } catch (error) {
                console.error(error,'ERROR');
            }
        },

    },

    mutations: {
        updateGoods(state, allGoods) {
            state.allGoods = allGoods
        },
        addGood(state,good){
            let id = state.allGoods.length + 1
            good.id = id
            state.allGoods.push(good)
        }

    },
    state: {
        allGoods:null,
    },
    getters: {
        getGoods(state) {
            return state.allGoods
        },

    },}
export default goods
