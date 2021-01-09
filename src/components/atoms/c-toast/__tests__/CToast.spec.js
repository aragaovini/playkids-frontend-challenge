import { mount } from '@vue/test-utils';
import CToast from '../CToast.vue';
import { nextTick } from 'vue';

describe('CToast component', () => {
  it('renders correctly', () => {
    const wrapper = mount(CToast);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows message correctly', async () => {
    const message = 'Order has been saved';
    const wrapper = mount(CToast);

    wrapper.vm.show({ color: 'success', message });

    await nextTick();

    const messageFound = wrapper.find('.toast__message').text();
    expect(messageFound).toBe(message);
  });
});
