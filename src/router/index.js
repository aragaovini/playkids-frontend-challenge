import Vue from 'vue';
import VueRouter from 'vue-router';
import Orders from '../views/orders/Orders.vue';
import Order from '../views/order/Order.vue';

Vue.use(VueRouter);

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
        component: () =>
          import(
            /* webpackChunkName: "food-selection" */ '../views/order/children/FoodSelection.vue'
          )
      },
      {
        path: 'drink',
        name: 'DrinkSelection',
        component: () =>
          import(
            /* webpackChunkName: "drink-selection" */ '../views/order/children/DrinkSelection.vue'
          )
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
  },
  {
    path: '/billing',
    name: 'Billing',
    component: () =>
      import(
        /* webpackChunkName: "customer-identification" */ '../views/billing/Billing.vue'
      )
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
