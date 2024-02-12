import { createApp } from 'vue'
import router from './index'
import App from './App.vue'
const vue = createApp(App)
vue.use(router)


vue.directive('css',
    (el, bindings) => {
        const {value, arg: property} = bindings
        el.style[property] = value
    }
)

vue.mount('#app')
