import axios from 'axios';


const login = {
    actions:{
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

        updateLogin(state, login) {
            state.login = login
        },

    },
    state: {

        login:null,
    },
    getters: {
        getLogin(state) {
            return state.login
        },

    },}
export default login
