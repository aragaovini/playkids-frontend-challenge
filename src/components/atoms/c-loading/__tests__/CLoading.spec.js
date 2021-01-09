import { mount } from '@vue/test-utils';
import CLoading from '../CLoading.vue';

describe('CLoading component', () => {
  it('renders correctly', () => {
    const wrapper = mount(CLoading, {
      stubs: ['spinner']
    });
    expect(wrapper).toMatchSnapshot();
  });
});
