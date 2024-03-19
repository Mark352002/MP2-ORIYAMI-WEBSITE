import axios from 'axios';

export interface ReservationData {
  reservation_id: number;
  user_id: number;
  room_id: number;
  qr_id: number;
  reservation_created: string;
  reservation_in: string;
  reservation_out: string;
  reservation_total: number;
  reservation_ref: string;
  reservation_status: string;
}

async function fetchReservationDataFromAPI(): Promise<ReservationData[]> {
  try {
    const response = await axios.get('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/getreservation');
    return response.data; // Assuming your data is an array of ReservationData
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return []; // Return an empty array if there's an error
  }
}

export async function getReservationData(): Promise<ReservationData[]> {
  try {
    const reservationDataFromAPI = await fetchReservationDataFromAPI();
    return reservationDataFromAPI;
  } catch (error) {
    console.error('Error getting reservation data:', error);
    return []; // Return an empty array if there's an error
  }
}
