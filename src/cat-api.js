import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_Qv8jLCwOXni6K6lhgU21hZm70a6LtqKniDUmXrSzz8rrb6KRoGJytLJW5flEiEzb';

// Function to fetch breeds
export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
