import { useState } from "react";
import {  useParams } from "react-router-dom";
import RoomData from "../RoomData";
import QrData, { QrDataItem } from "../QrData";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import { User } from "../usersdata";

interface Profileprops {
  currentUser?: User;
}

const Cardroom: React.FC<Profileprops> = ({ currentUser }) => {
  const { id } = useParams<{ id?: string }>();
  const roomInfo = id ? RoomData.find((RoomData) => RoomData.room_id === +id) : undefined;

  const [selectedOption, setSelectedOption] = useState<string>("default");
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [referenceNo, setReferenceNo] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const updateImage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedOption(event.target.value);
  };

  const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckOutDate(event.target.value);
  };

  const handleReferenceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setReferenceNo(event.target.value);
  };

  const calculateNumberOfDays = (): number => {
    const checkInTime = Date.parse(checkInDate);
    const checkOutTime = Date.parse(checkOutDate);
    if (!isNaN(checkInTime) && !isNaN(checkOutTime)) {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffDays = Math.round(Math.abs((checkOutTime - checkInTime) / oneDay));
      return diffDays;
    }
    return 0;
  };

  const calculateTotalPrice = (): string => {
    const numberOfDays = calculateNumberOfDays();
    if (roomInfo) {
      const totalPrice = numberOfDays * roomInfo.room_price;
      return totalPrice.toLocaleString();
    }
    return "0";
  };

  const addCurrentReservation = async () => {
    try {
      const selectedQrData: QrDataItem | undefined = QrData.find(
        (item) => item.qr_title.toLowerCase() === selectedOption.toLowerCase()
      );

      const response = await fetch('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/createreservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: currentUser?.user_id,
          room_id: +id!,
          qr_id: selectedQrData ? selectedQrData.qr_id : 0,
          reservation_created: new Date().toISOString().slice(0, 10), // Format to YYYY-MM-DD
          reservation_in: checkInDate,
          reservation_out: checkOutDate,
          reservation_total: calculateTotalPrice().replace(/,/g, ''), // Remove commas
          reservation_ref: referenceNo,
          reservation_status: "Pending"
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add reservation');
      }
      
      const data = await response.json();
      console.log(data); // log the response from the server

      setSuccessMessage("Reservation successful!");
      // Clear input data
      setCheckInDate("");
      setCheckOutDate("");
      setReferenceNo("");
      setSelectedOption("default");
    } catch (error) {
      console.error(error);
    }
  };

  const getSelectedImage = (): string => {
    const selectedQrData: QrDataItem | undefined = QrData.find(
      (item) => item.qr_title.toLowerCase() === selectedOption.toLowerCase()
    );
    return selectedQrData ? selectedQrData.qr_image : "";
  };

  return (
    <>
      <NavBar />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "100px"
        }}
      >
        {roomInfo && (
          <div className="card" style={{ width: "30rem" }}>
            <img src={roomInfo.room_image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{roomInfo.room_name}</h5>
              <h5 className="card-title">₱ {roomInfo.room_price}</h5>
            </div>
          </div>
        )}
        {currentUser && (
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <h5 className="card-title">Reservation Details</h5>
              {successMessage && <p className="text-success">{successMessage}</p>}
              <p>Name: {currentUser.fname} {currentUser.lname}</p>
              <p>Contact Number: {currentUser.contact_no}</p>
              <div className="row mt-4">
                <div className="col-6 mb-2">
                  <label htmlFor="checkin" className="form-label" style={{ fontWeight: 500 }}>Check in</label>
                  <input type="date" className="form-control shadow-none" id="checkin" value={checkInDate} onChange={handleCheckInChange} />
                </div>
                <div className="col-6 mb-2">
                  <label htmlFor="checkout" className="form-label" style={{ fontWeight: 500 }}>Check out</label>
                  <input type="date" className="form-control shadow-none" id="checkout" value={checkOutDate} onChange={handleCheckOutChange} />
                </div>
              </div>
              <p className="mt-3">No. of Days: {calculateNumberOfDays()}</p>
              <p className="card-text">Total Price: ₱ {calculateTotalPrice()}</p>
              <div className="payment-options">
                <label htmlFor="payment">Select a Payment Option:</label>
                <select
                  id="payment"
                  onChange={updateImage}
                  value={selectedOption}
                >
                  <option value="default">Select an option</option>
                  {QrData.map((item) => (
                    <option key={item.qr_id} value={item.qr_title.toLowerCase()}>
                      {item.qr_title}
                    </option>
                  ))}
                </select>
                <div className="selected-image" id="selectedImage">
                  {selectedOption !== "default" && (
                    <img
                      src={getSelectedImage()}
                      alt={selectedOption}
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                </div>

                <div className="mb-3 mt-5 col-12">
                  <label htmlFor="ref" className="form-label">Reference no.</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ref"
                    value={referenceNo}
                    onChange={handleReferenceChange} // Add onChange event handler
                    placeholder="Enter Reference no."
                  />
                </div>
              </div>

              <button className="btn btn-primary" onClick={addCurrentReservation}>Checkout</button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cardroom;
