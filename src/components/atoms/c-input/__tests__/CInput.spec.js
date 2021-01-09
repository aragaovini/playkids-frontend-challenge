import { mount } from '@vue/test-utils';
import CInput from '../CInput.vue';

describe('CInput component', () => {
  it('renders correctly', () => {
    const wrapper = mount(CInput);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders label', () => {
    const label = 'name';
    const wrapper = mount(CInput, {
      propsData: { label }
    });
    const labelFound = wrapper.find('.input__label').text();

    expect(labelFound).toBe(label);
  });

  it('emits value', () => {
    const inputValue = 'John';
    const wrapper = mount(CInput);
    const input = wrapper.find('input');
    input.setValue(inputValue);

    expect(wrapper.emitted().input[0][0]).toBe(inputValue);
  });

  it('shows error message', () => {
    const vuelidateMock = {
      $error: true,
      $dirty: true,
      required: false,
      $touch: () => {},
      $params: { required: null }
    };

    const wrapper = mount(CInput, {
      propsData: {
        v: vuelidateMock
      }
    });

    const errorMessage = wrapper.find('.input__errors').text();

    expect(errorMessage).toBe('Field is required');
  });
});
