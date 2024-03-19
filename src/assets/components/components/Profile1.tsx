import { FC } from 'react'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from './NavBar'
import { Carousel, Container, Row } from 'react-bootstrap'
import FeedbackModal from './Feedback'
import RoomAvailability from './RoomAvailability'
import Rooms from './Rooms'
import { User } from '../usersdata'

interface HomeProps {
    currentUser?: User;
    
  }

const Profile1:FC<HomeProps>  = ({ currentUser }) =>{
 
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
            <div className="col col-lg-6 col-12 mt-5 d-flex justify-content-center"><img className="img-fluid" alt="" /></div>
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
                <img  alt="" />
                <h5>Connection</h5>
                <p>Enjoy high-speed internet and cable television so you never miss a thing!</p>
              </center>
            </div>
    
            <div className="col-md-6 col-lg-4">
              <center>
                <img alt="" />
                <h5>Best Hotel</h5>
                <p>Ensured as among the finest hotels in the Philippines, guaranteed.</p>
              </center>
            </div>
            <div className="col-md-12 col-lg-4">
              <center>
                <img alt="" />
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

export default Profile1