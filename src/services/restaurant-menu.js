import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://5ff37c3328c3980017b195e8.mockapi.io/api/'
});

const getMenu = () => apiInstance.get('products');

export default getMenu;
