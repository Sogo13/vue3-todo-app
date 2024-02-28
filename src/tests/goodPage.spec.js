import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import goodPage from '@/pages/goodPage.vue';


describe('goodPage', () => {
    it('increase count when addGood is clicked', async () => {
        const wrapper = mount(goodPage);

        await wrapper.find('.counterPart:nth-child(3)').trigger('click');

        expect(wrapper.vm.count).toBe(2); // Добавляем причину ошибки
    });

    it('decrease count when deleteGood is clicked', async () => {
        const wrapper = mount(goodPage, {
            data() {
                return {
                    count: 2
                };
            }
        });

        await wrapper.find('.counterPart:nth-child(2)').trigger('click');

        expect(wrapper.vm.count).toBe(1); // Добавляем причину ошибки
    });
});
