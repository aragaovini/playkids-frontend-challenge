import { mount } from '@vue/test-utils';
import CCard from '../CCard.vue';

describe('CCard component', () => {
  it('renders correctly', () => {
    const wrapper = mount(CCard);
    expect(wrapper).toMatchSnapshot();
  });
});
