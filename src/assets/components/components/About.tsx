import NavBar from './NavBar'
import ABOUT from "./images/Highlight/imgabout.png"
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <NavBar/>
      <center className='mt-5'>
      <p>&nbsp;</p>
        <hr className='mt-5'/>
        <h4 className='mb-5'>About </h4>
      </center>

      <section className="container mb-5">
      <div className="row">
        <div className="col text-justify text-center fst-italic p-about mt-5">
          <h5>
            <p>&nbsp;</p>
            “Oriyami's Hotel, an urban escape for nature lovers, offers diverse hotel activities amidst Valenzuela City's stunning vistas. With a well-equipped game room, exquisite dining, and adaptable meeting spaces, guests can unwind while exploring the serene beauty of the surroundings. Discover Oriyami's oasis at
            <a href="https://www.oriyami.com/">https://www.oriyami.com/</a>."
            Lorem ipsum dolor sit amet, consectetur adipisiciimg elit. Nobis eaque, esse, sapiente accusantium nisi repellat sint quaerat reiciendis iste porro, magnam veritatis autem modi voluptatum!
        <p style={{color:"gray"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum architecto cupiditate animi labore dolor? Amet eligendi dolorem cupiditate ab tenetur qui debitis voluptatem non officiis unde at, rerum suscipit modi autem, maxime aperiam cum eveniet! Asperiores obcaecati sint, atque quos a doloremque odit iste alias magni tempore non? Delectus, impedit!</p>
          
          </h5>
        </div>
        <div className="col col-lg-6 col-12 mt-5 d-flex justify-content-center"><img className="img-fluid" src={ABOUT} alt="" /></div>
      </div>
    </section>

    <Footer/>

    </div>
  )
}

export default About