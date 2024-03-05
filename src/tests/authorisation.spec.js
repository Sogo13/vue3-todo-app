import { mount } from '@vue/test-utils';
import LoginForm from '@/pages/authorisation.vue';

describe('LoginForm', () => {
    it('should validate email and password on submit', async () => {
        const wrapper = mount(LoginForm);

        // Set email and password values
        await wrapper.setData({ email: 'test@example.com', password: 'password' });

        // Trigger submit button click
        await wrapper.find('.btn').trigger('click');

        // Check if email and password errors are cleared after submit
        expect(wrapper.vm.emailError).toBe('');
        expect(wrapper.vm.passwordError).toBe('');
    });

    // Добавьте другие тесты по необходимости
});