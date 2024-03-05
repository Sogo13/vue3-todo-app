import { mount } from '@vue/test-utils';
import Login from '@/pages/login.vue';

describe('Login', () => {
    it('should login successfully with valid email', async () => {
        const wrapper = mount(Login);

        // Set a valid email
        await wrapper.setData({ email: 'test@example.com' });

        // Trigger handleSubmit method
        await wrapper.vm.handleSubmit();

        // Check if the startLogin action is dispatched with correct data
        expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('startLogin', { login: 'test@example.com' });

        // Check if router is pushed to 'home' route
        expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'home' });
    });

    it('should show error message with invalid email format', async () => {
        const wrapper = mount(Login);

        // Set an invalid email
        await wrapper.setData({ email: 'invalidemail' });

        // Trigger validateEmail method
        await wrapper.vm.validateEmail();

        // Check if emailError is set to the error message
        expect(wrapper.vm.emailError).toBe('Invalid email format');
    });

    // Добавьте другие тесты по необходимости
});
