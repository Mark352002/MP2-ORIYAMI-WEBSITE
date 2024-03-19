import { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import RoomData from '../RoomData';
import { Link } from 'react-router-dom';
import Button from './Button';
import "./RoomAvailability.css"

// Define interface for room object
interface Room {
  room_id: number;
  room_image: string;
  room_name: string;
  room_price: number;
  room_capacity: string;
  room_description: string;
}

const RoomAvailability = () => {
  const [selectedGuests, setSelectedGuests] = useState(0);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]); // Explicitly define the type as Room[]

  const handleSearch = () => {
    const filtered = RoomData.filter(room => parseInt(room.room_capacity) >= selectedGuests);
    setFilteredRooms(filtered);
  };

  const []= useState<Room[]>(RoomData); // Explicitly define the type as Room[]

  return (
    <div className="col-lg-12 shadow bg-white p-4 rounded container availability-form">
      <h5>Check Room Availability</h5>
      <div className="row align-items-end ">
        <div className="col-lg-6 mb-1">
          <label htmlFor="guest" className="form-label font-weight-500">Guest</label>
          <select className="form-select col-lg-3" onChange={(e) => setSelectedGuests(parseInt(e.target.value))}>
            {[...Array(11)].map((_, index) => (
              <option key={index} value={index}>{index}</option>
            ))}
          </select>
        </div>
        <div className="col-lg-6 mt-3">
          <button className="btn btn-blue btn-h44 col-12" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="row mt-4 mt-5">
        {filteredRooms.length === 0 ? ( // Check if filteredRooms is empty
          <div className="col-lg-12">
            <p>No available rooms</p>
          </div>
        ) : (
          filteredRooms.map(roomInfo => (
            <Col key={roomInfo.room_id} xs={12} lg={4} md={6} className='mt-5 mt-auto mb-3'>
              <Card className='shadow-lg mx-auto' style={{ width: '18rem' }}>
                <Card.Img className='image-fluid' style={{ height: 200 }} variant="top" src={roomInfo.room_image} />
                <Card.Body>
                  <Card.Title>{roomInfo.room_name}</Card.Title>
                  {/* <Card.Text style={{ height: 100 }}>{roomInfo.room_description}</Card.Text> */}
                  <p className=''>Capacity: {roomInfo.room_capacity}</p><br />
                  <p className=''>₱ {roomInfo.room_price} per day</p><br />
                  {/* Add button functionality if needed */}
                  <Link to={`/rooms/${roomInfo.room_id}`}>
                    <Button element="button">Book</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomAvailability;
