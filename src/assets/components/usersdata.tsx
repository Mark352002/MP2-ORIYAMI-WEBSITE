import axios from 'axios';

// Define your User interface
export interface User {
    user_id: number;
    fname: string;
    lname: string;
    contact_no: string;
    address: string;
    email: string;
    password: string;
}

// Define a function to fetch data from the API
async function fetchUserDataFromAPI(): Promise<User[]> {
    try {
        const response = await axios.get('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/getuser');
        return response.data.data; // Assuming your data is under 'data' key
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return []; // Return an empty array if there's an error
    }
}

// Function to update mockup data with data from API
async function updateMockupDataWithAPI(): Promise<User[]> {
    try {
        const userDataFromAPI = await fetchUserDataFromAPI();
        // Replace your existing mockup data with data from the API
        return userDataFromAPI;
    } catch (error) {
        console.error('Error updating mockup data with API data:', error);
        return []; // Return an empty array if there's an error
    }
}

// Call the function to update mockup data with data from API
const userdata = await updateMockupDataWithAPI();

// Export the updated data
export default userdata;
