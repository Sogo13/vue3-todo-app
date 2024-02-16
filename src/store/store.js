import { createStore } from 'vuex'
import login from "@/store/modules/login";
import goods from "@/store/modules/goods";
import cart from "@/store/modules/cart";


const store = createStore({
    modules: {
        cart,
        goods,
        login,
    },

})

export default store
