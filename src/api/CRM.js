import axios from 'axios';

// const BASE_URL = 'http://allgoodsbazaar.lp-crm.biz/api/addNewOrder.html';

// export const newOrder = (name, phone, color) => {
// const data = {
//   key: 'a46094a46f4b97d3df84a4aed7e5f84e',
//   order_id: String(Math.round(Date.now() * 10)),
//   country: 'UA',
//   products: ['Термос'],
//   bayer_name: name,
//   phone,
//   comment: color,
// };

//   const response = axios.post(BASE_URL, {
//     key: 'a46094a46f4b97d3df84a4aed7e5f84e',
//     order_id: String(Math.round(Date.now() * 10)),
//     country: 'UA',
//     products: ['Термос'],
//     bayer_name: name,
//     phone,
//     comment: color,
//   });

//   return response.data;
// };

axios.defaults.baseURL = 'http://localhost:3001';

export const newOrder = (name, phone, color) => {
  const response = axios.post('/api/orders', {name, phone, color});

  return response.data;
};
