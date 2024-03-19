import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './NavBar';
import { User } from '../usersdata';
import Footer from './Footer';

interface ReservationData {
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

interface Profileprops {
  currentUser?: User;
}

const Reservation: FC<Profileprops> = ({ currentUser }) => {
  const [reservations, setReservations] = useState<ReservationData[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        if (currentUser) {
          const response = await axios.get(`https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/${currentUser.user_id}`);
          setReservations(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, [currentUser]);

  const handleCancelReservation = async (reservationId: number) => {
    try {
      await axios.put(`https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/usercancel/${reservationId}`, {
        reservation_status: 'Cancel Pending' // Set the reservation status to 'Cancel Pending'
      });
      toast.success('Cancellation request sent successfully!');
      // Update the reservations list after cancellation
      setReservations(prevReservations => prevReservations.map(reservation =>
        reservation.reservation_id === reservationId ? { ...reservation, reservation_status: 'Cancel Pending' } : reservation
      ));
    } catch (error) {
      console.error('Error cancelling reservation:', error);
      toast.error('Failed to send cancellation request!');
    }
  };

  // Function to format date strings to display only the date part
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { timeZone: 'UTC' });
  };

  return (
    <div>
      <NavBar />
      <center className='mt-5'>
      <p>&nbsp;</p>
        <hr className='mt-5'/>
        <h4 className='mb-5'>Reservations </h4>
      </center>
      <ToastContainer /> {/* This component is needed for react-toastify to work */}
      {reservations.length > 0 ? (
        <table className="table-responsive mb-5 "style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #cccccc' }}>
          <thead>
            <tr  style={{ border: '1px solid #cccccc',background: "#539ce1",color:"white" }} >
              <th>Reservation ID</th>
              <th style={{ border: '1px solid #cccccc' }}>User ID</th>
              <th style={{ border: '1px solid #cccccc' }}>Room ID</th>
              <th style={{ border: '1px solid #cccccc' }}>QR ID</th>
              <th style={{ border: '1px solid #cccccc' }}>Date Created</th>
              <th style={{ border: '1px solid #cccccc' }}>Check-In Date</th>
              <th style={{ border: '1px solid #cccccc' }}>Check-Out Date</th>
              <th style={{ border: '1px solid #cccccc' }}>Reservation Total</th>
              <th style={{ border: '1px solid #cccccc' }}>Reservation Reference</th>
              <th style={{ border: '1px solid #cccccc' }}>Reservation Status</th>
              <th style={{ border: '1px solid #cccccc' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.reservation_id}>
                <td style={{ border: '1px solid #cccccc' }}>{reservation.reservation_id}</td>
                <td style={{ border: '1px solid #cccccc' }}>{reservation.user_id}</td>
                <td style={{ border: '1px solid #cccccc' }}>{reservation.room_id}</td>
                <td style={{ border: '1px solid #cccccc' }}>{reservation.qr_id}</td>
                <td style={{ border: '1px solid #cccccc' }}>{formatDate(reservation.reservation_created)}</td>
                <td style={{ border: '1px solid #cccccc' }}>{formatDate(reservation.reservation_in)}</td>
                <td style={{ border: '1px solid #cccccc' }}>{formatDate(reservation.reservation_out)}</td>
                <td style={{ border: '1px solid #cccccc' }}>{reservation.reservation_total}</td>
                <td style={{ border: '1px solid #cccccc' }}>{reservation.reservation_ref}</td>
                <td style={{ border: '1px solid #cccccc' }}>{reservation.reservation_status}</td>
                <td style={{ border: '1px solid #cccccc' }}>
                  <button style={{background:"gray", margin: 5,}} onClick={() => handleCancelReservation(reservation.reservation_id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No reservations found.</div>
      )}
      <Footer/>
    </div>
  );
};

export default Reservation;
