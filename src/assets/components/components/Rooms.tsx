import { useState } from 'react'
import RoomData from '../RoomData.tsx'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from './Button';

const Rooms = () => {
    const [roomList] = useState(RoomData);

    return (
        <>
         
      <center>
        <hr className='mt-5'/>
        <h4 className='mb-5'>Explore Rooms </h4>
      </center>
    
            {roomList.map((roomInfo) => (
                <Col key={roomInfo.room_id} xs={12} lg={4} md={6} className='mt-5 mt-auto mb-3'>
                    <Link to={`/rooms/${roomInfo.room_id}`}>
                    <Card className='shadow-lg mx-auto' style={{ width: '18rem' }}>
                        <Card.Img className='image-fluid' style={{ height: 200 }} variant="top" src={roomInfo.room_image}/>
                        <Card.Body>
                            <Card.Title>{roomInfo.room_name}</Card.Title>
                            <Card.Text style={{ height: 100 }}>{roomInfo.room_description}</Card.Text>
                            <p className=''>₱ {roomInfo.room_price} per day</p><br />
                           
                                <Button element="button">Book</Button>
                            
                        </Card.Body>
                    </Card></Link>
                </Col>
            ))}
        </>
    )
}

export default Rooms
