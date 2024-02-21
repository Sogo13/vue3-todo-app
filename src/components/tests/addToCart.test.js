import { shallowMount } from '@vue/test-utils';
import ProductDetails from '@/pages/goodPage.vue';

describe('ProductDetails', () => {
    it('добавляет товар в корзину', async () => {
        const mockGood = {
            id: 1,
            title: 'Product 1',
            description: 'Description of Product 1',
            price: 10,
            image: 'product1.jpg'
        };

        const wrapper = shallowMount(ProductDetails, {
            props: {
                choosenGood: mockGood
            }
        });

        // Проверяем изначальное значение счетчика
        expect(wrapper.find('.counterPart').text()).toBe('1');

        // Имитируем нажатие на кнопку "+" для добавления товара
        await wrapper.find('.counterPart:last-child').trigger('click');

        // Проверяем, что значение счетчика увеличилось
        expect(wrapper.find('.counterPart').text()).toBe('2');

        // Имитируем нажатие на кнопку "Add to Cart"
        await wrapper.find('.addToCart').trigger('click');

        // Проверяем, что метод addToCart был вызван с правильными данными
        expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('addToCart', { data: { id: 1, counter: 2 } });

        // Проверяем, что переход на страницу корзины был выполнен
        expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'cart' });
    });
});
