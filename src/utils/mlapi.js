// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/', // Update this with your backend API base URL
  timeout: 10000, // Adjust the timeout as needed
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers if needed
  },
});

const mlapi = {
  
  // Add a new function for the food recommendation API
  recommendFood: async (data) => await instance.post('/recommend', data),
};

export default mlapi;