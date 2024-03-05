import { mount } from '@vue/test-utils';
import ProductForm from '@/pages/createGood.vue';

describe('ProductForm', () => {
    it('should create a product when all fields are filled', async () => {
        const wrapper = mount(ProductForm);

        // Set values for all fields
        await wrapper.setData({ file: new File([''], 'test.jpg'), title: 'Test Product', description: 'Test Description', price: 10 });

        // Trigger createProduct method
        await wrapper.vm.createProduct();

        // Check if the addGood action is dispatched with correct data
        expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('addGood', {
            data: {
                img: wrapper.vm.file,
                price: wrapper.vm.price,
                title: wrapper.vm.title,
                description: wrapper.vm.description
            }
        });
    });

    it('should show an error if price is invalid', async () => {
        const wrapper = mount(ProductForm);

        // Set invalid price value
        await wrapper.setData({ price: 0 });

        // Trigger validatePrice method
        await wrapper.vm.validatePrice();

        // Check if priceError is set to the error message
        expect(wrapper.vm.priceError).toBe('Error in price');
    });

    // Добавьте другие тесты по необходимости
});
