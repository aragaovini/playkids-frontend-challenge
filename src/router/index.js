import Vue from 'vue';
import VueRouter from 'vue-router';
import Orders from '../views/orders/Orders.vue';
import Order from '../views/order/Order.vue';

Vue.use(VueRouter);

const ItemSelectionView = () =>
  import(
    /* webpackChunkName: "item-selection" */ '../views/order/children/ItemSelection.vue'
  );

const routes = [
  {
    path: '/',
    redirect: '/orders'
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/order',
    component: Order,
    children: [
      {
        path: '/',
        redirect: 'customer'
      },
      {
        path: 'customer',
        name: 'CustomerIdentification',
        component: () =>
          import(
            /* webpackChunkName: "customer-identification" */ '../views/order/children/CustomerIdentification.vue'
          )
      },
      {
        path: 'food',
        name: 'FoodSelection',
        component: ItemSelectionView
      },
      {
        path: 'drink',
        name: 'DrinkSelection',
        component: ItemSelectionView
      },
      {
        path: 'payment',
        name: 'Payment',
        component: () =>
          import(
            /* webpackChunkName: "payment" */ '../views/order/children/Payment.vue'
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
