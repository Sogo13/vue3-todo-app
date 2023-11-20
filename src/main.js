import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('red', {
    mounted(el, bindings, vnode, prevVnode) {
        console.log(`el`, el)
        console.log(`bindings`, bindings)
        console.log(`vnode`, vnode)
        console.log(`prevVnode`, prevVnode)

        setTimeout(() => el.style.color = bindings.value ?? 'red',
            bindings.modifiers.delayed ? 1000 : 0)
    }
})

app.directive('css', (el, bindings, vnode, prevVnode) => {
        console.log(`el`, el)
        console.log(`bindings`, bindings)
        console.log(`vnode`, vnode)
        console.log(`prevVnode`, prevVnode)

        setTimeout(() => el.style[bindings.arg ?? 'color'] = bindings.value ?? 'red',
            bindings.modifiers.delayed ? 1000 : 0)
    }
)

app.mount('#app')
