import { FC } from 'react';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { User } from './usersdata';
import { Container, Row } from 'react-bootstrap';
import Rooms from './components/Rooms';
import RoomAvailability from './components/RoomAvailability';
import FeedbackModal from './components/Feedback';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import BEST from "./components/images/Highlight/BEST.png"
import WIFI from "./components/images/Highlight/WIFI.png"
import FLEXI from "./components/images/Highlight/FLEXI.png"
import ABOUT from "./components/images/Highlight/imgabout.png"


interface HomeProps {
  currentUser?: User;
  
}
  
const Home:FC<HomeProps>  = ({ currentUser }) =>{

  return (
    <div>
      <NavBar/> 
      <Carousel/>
      <FeedbackModal currentUser={currentUser} />
      <RoomAvailability/>
      <Container>
        <Row>
        <Rooms/>
       </Row>
      </Container>
      
      <section className="container pt-5">
      <div>
        <center>
          <hr />
          <h4>About Us</h4>
        </center>
      </div>
      <div className="row">
        <div className="col text-justify text-center fst-italic p-about mt-5">
          <h5>
            <p>&nbsp;</p>
            “Oriyami's Hotel, an urban escape for nature lovers, offers diverse hotel activities amidst Valenzuela City's stunning vistas. With a well-equipped game room, exquisite dining, and adaptable meeting spaces, guests can unwind while exploring the serene beauty of the surroundings. Discover Oriyami's oasis at
            <a href="https://www.oriyami.com/">https://www.oriyami.com/</a>."
            Lorem ipsum dolor sit amet, consectetur adipisiciimg elit. Nobis eaque, esse, sapiente accusantium nisi repellat sint quaerat reiciendis iste porro, magnam veritatis autem modi voluptatum!
          </h5>
        </div>
        <div className="col col-lg-6 col-12 mt-5 d-flex justify-content-center"><img className="img-fluid" src={ABOUT} alt="" /></div>
      </div>
    </section>

    <section className="container mt-5 pt-5 pb-5 mb-4">
      <div className="mt-5 mb-5 p-5">
        <center>
          <hr />
          <h4>BE OUR GUESTS</h4>
        </center>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <center>
            <img src={WIFI} alt="" />
            <h5>Connection</h5>
            <p>Enjoy high-speed internet and cable television so you never miss a thing!</p>
          </center>
        </div>

        <div className="col-md-6 col-lg-4">
          <center>
            <img src={BEST} alt="" />
            <h5>Best Hotel</h5>
            <p>Ensured as among the finest hotels in the Philippines, guaranteed.</p>
          </center>
        </div>
        <div className="col-md-12 col-lg-4">
          <center>
            <img src={FLEXI} alt="" />
            <h5>Flexible</h5>
            <p>Select accommodations featuring a free cancellation policy at no charge.</p>
          </center>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Home;
