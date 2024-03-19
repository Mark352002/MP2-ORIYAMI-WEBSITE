import 'swiper/swiper-bundle.css';
import carousel1 from './images/Carousel/carousel1.jpg';
import carousel2 from './images/Carousel/carousel2.jpg';
import carousel3 from './images/Carousel/carousel3.jpg';
import carousel4 from './images/Carousel/carousel4.jpg';
import carousel5 from './images/Carousel/carousel5.jpg';
import carousel6 from './images/Carousel/carousel6.jpg';

const Carousel = () => {
  // useEffect(() => {
  //   const swiper = new Swiper(".mySwiper", {
  //     spaceBetween: 30,
  //     effect: "fade",
  //     loop: true,
  //     autoplay: {
  //       delay: 3500, // Corrected typo here
  //       disableOnInteraction: false,
  //     }
  //   });
  // }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="container-fluid mt-5 pt-3">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={carousel1} className="w-100 d-block" alt="Carousel 1" />
          </div>
          <div className="swiper-slide"> 
            <img src={carousel2} className="w-100 d-block" alt="Carousel 2" />
          </div>
          <div className="swiper-slide">
            <img src={carousel3} className="w-100 d-block" alt="Carousel 3" />
          </div>
          <div className="swiper-slide">
            <img src={carousel4} className="w-100 d-block" alt="Carousel 4" />
          </div>
          <div className="swiper-slide">
            <img src={carousel5} className="w-100 d-block" alt="Carousel 5" />
          </div>
          <div className="swiper-slide">
            <img src={carousel6} className="w-100 d-block" alt="Carousel 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
