import { mount, createLocalVue } from '@vue/test-utils';
import FoodSelection from '../FoodSelection.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.filter('currency', value => value);

describe('FoodSelection view', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      mutations: {
        setAppLoading: () => {}
      },
      modules: {
        order: {
          namespaced: true,
          state: {
            newOrder: {
              customerIdentification: 'John',
              items: []
            }
          },
          mutations: {
            setCurrentStep: () => {}
          }
        },
        restaurantMenu: {
          namespaced: true,
          getters: {
            foodList: () => [
              {
                name: 'Fish',
                price: 8.9
              }
            ]
          },
          actions: {
            get: () => []
          }
        }
      }
    });
  });

  it('renders correctly', () => {
    const wrapper = mount(FoodSelection, { localVue, store });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders fish product', async () => {
    const wrapper = mount(FoodSelection, { localVue, store });
    const itemCard = wrapper.find('.cards-container .card').text();

    expect(itemCard).toContain('Fish');
  });
});
