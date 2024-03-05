import { createStore } from 'vuex'
import storeConfig from '@/store/store'

describe('Vuex Store', () => {
    it('should initialize with the correct modules', () => {
        const store = createStore(storeConfig)
        expect(store.state).toHaveProperty('cart')
        expect(store.state).toHaveProperty('goods')
        expect(store.state).toHaveProperty('login')
    })
})
