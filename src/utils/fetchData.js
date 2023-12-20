import axios from 'axios';

const fetchData = async (searchQuery) => {
  try {
    const baseUrl = 'https://fyp-ml-backend.onrender.com';
    // const baseUrl = 'http://localhost:40001';
    const endpoint = `/recommend?description=${searchQuery}`;
    
    // Make the GET request using axios
    const response = await axios.get(baseUrl + endpoint);

    // Check if the response contains the expected data structure
    if (response.data && response.data.list_of_restaurants) {
      // Assuming the response contains data property with the fetched data
      const data = response.data.list_of_restaurants;

      // Log the data for debugging
      console.log('Fetched Data:', data);

      // Return the data
      return data;
    } else {
      // Log an error if the data structure is not as expected
      console.error('Invalid API Response:', response.data);

      // Return an empty array or handle it based on your needs
      return [];
    }
  } catch (error) {
    // Handle specific errors
    if (axios.isAxiosError(error)) {
      // Axios error, handle network issues
      console.error('Axios Error:', error.message);
    } else if (error.message === 'Network Error') {
      // Network error, handle connection issues
      console.error('Network Error:', error.message);
    } else {
      // Handle other types of errors
      console.error('Error fetching data:', error);
    }

    // Throw the error again or handle it based on your needs
    throw error;
  }
};

export default fetchData;
