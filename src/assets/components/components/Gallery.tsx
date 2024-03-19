import NavBar from './NavBar';
import "./Gallery.css";
import image1 from "./images/Gallery/1.jpg";
import image2 from "./images/Gallery/2.jpg";
import image3 from "./images/Gallery/3.jpg";
import image4 from "./images/Gallery/4.jpg";
import image5 from "./images/Gallery/5.jpg";
import image6 from "./images/Gallery/6.jpg";
import image7 from "./images/Gallery/7.jpg";
import image8 from "./images/Gallery/8.jpg";
import Footer from './Footer';

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <section>
        <div className="mb-5 mt-5">
          <center className='mt-5'>
            <p>&nbsp;</p>
            <hr className='mt-5' />
            <h4 className='mb-5'>Reservations</h4>
          </center>
        </div>
        <div className="gallery-container container mb-5">
          <img src={image1} alt="Oriyami" className="img-fluid" style={{ width: '300px', height: '300px' }} />
          <img src={image2} alt="Crew" className="img-fluid" style={{ width: '300px', height: '300px' }} />
          <img src={image3} alt="Home theme" className="img-fluid" style={{ width: '300px', height: '300px' }} />
          <img src={image4} alt="Room" className="img-fluid" style={{ width: '300px', height: '300px' }} />
          <img src={image5} alt="Hotel" className="img-fluid" style={{ width: '300px', height: '300px' }} />
          <img src={image6} alt="View" className="img-fluid" style={{ width: '300px', height: '300px' }} />
          <img src={image7} alt="Asist area" className="img-fluid" style={{ width: '300px', height: '300px' }} />
          <img src={image8} alt="Cape Tire" className="img-fluid" style={{ width: '300px', height: '300px' }} />
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Gallery;
