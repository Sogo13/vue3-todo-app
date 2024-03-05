import { mount } from '@vue/test-utils';
import PaymentForm from '@/pages/checkout.vue';

describe('PaymentForm', () => {
    it('should show error message when email is empty', async () => {
        const wrapper = mount(PaymentForm);

        // Set an empty email
        await wrapper.setData({ email: '' });

        // Trigger validateEmail method
        await wrapper.vm.validateEmail();

        // Check if emailError is set to the error message
        expect(wrapper.vm.emailError).toBe('Email is required');
    });

    it('should show error message with invalid email format', async () => {
        const wrapper = mount(PaymentForm);

        // Set an invalid email
        await wrapper.setData({ email: 'invalidemail' });

        // Trigger validateEmail method
        await wrapper.vm.validateEmail();

        // Check if emailError is set to the error message
        expect(wrapper.vm.emailError).toBe('Invalid email format');
    });

    it('should show error message when phone is empty', async () => {
        const wrapper = mount(PaymentForm);

        // Set an empty phone
        await wrapper.setData({ phone: '' });

        // Trigger validatePhone method
        await wrapper.vm.validatePhone();

        // Check if phoneError is set to the error message
        expect(wrapper.vm.phoneError).toBe('Phone is required');
    });

    it('should show error message when address is empty', async () => {
        const wrapper = mount(PaymentForm);

        // Set an empty address
        await wrapper.setData({ address: '' });

        // Trigger validateAddress method
        await wrapper.vm.validateAddress();

        // Check if addressError is set to the error message
        expect(wrapper.vm.addressError).toBe('Address is required');
    });

    it('should show error message when card number is empty', async () => {
        const wrapper = mount(PaymentForm);

        // Set an empty card number
        await wrapper.setData({ cardNumber: '' });

        // Trigger validateCardNumber method
        await wrapper.vm.validateCardNumber();

        // Check if cardNumberError is set to the error message
        expect(wrapper.vm.cardNumberError).toBe('Card Number is required');
    });

    // Добавьте другие тесты по необходимости
});
