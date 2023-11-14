import axios from 'axios';

const TOKEN = '6838787587:AAEir2whLHO5_DEn9iI0YqxIf9oPYn9-_TA';
const CHAT_ID = '-1002043465225';
const BASE_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const telegramOrder = data => {
  const response = axios.post(BASE_URL, {
    chat_id: CHAT_ID,
    text: data,
  });

  return response.data;
};
