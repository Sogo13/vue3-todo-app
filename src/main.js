import { createApp } from 'vue'
import router from './index'
import store from "./store";
import App from './App.vue'
const vue = createApp(App)
vue.use(router)
vue.use(store)


vue.directive('css',
    (el, bindings) => {
        const {value, arg: property} = bindings
        el.style[property] = value
    }
)

vue.mount('#app')
