import { mount } from '@vue/test-utils';
import CButton from '../CButton.vue';

describe('CButton component', () => {
  it('renders correctly', () => {
    const wrapper = mount(CButton);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls click method', async () => {
    const wrapper = mount(CButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
