import axios from 'axios';

const fetchData = async (searchQuery) => {
  try {
    // Define the base URL for your API
    console.log(searchQuery)
    const baseUrl = 'https://fyp-ml-backend.onrender.com';
    // const baseUrl = 'http://localhost:40001';
    
    // Define the endpoint for the specific GET request, including the search query
    const endpoint =`/recommend?description=${searchQuery}` ;
    
    // Make the GET request using axios
    const response = await axios.get(baseUrl + endpoint);

    // Assuming the response contains data property with the fetched data
    const data = response.data.list_of_restaurants;

    // You can return or process the data as needed
    console.log(data)
    return data;
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