import { createApp } from 'vue'
import App from './App.vue'


const vue = createApp(App)

vue.directive('css',
    (el, bindings) => {
        const {value, arg: property} = bindings
        el.style[property] = value
        console.log(`bindings`, bindings)
    }
)

vue.mount('#app')
