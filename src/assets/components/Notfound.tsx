import './Notfound.css'; // Import CSS file for styling
import backgroundImage from "./components/images/Carousel/bg.jpg"

function Logout() {
    window.location.href = "/";
    setTimeout(function() {
      window.location.reload();
    }, 100);
  }

const Notfound = () => {

  return (
    <div className="centered-text-area" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backdropFilter: 'blur(100px)' }}>
        <div style={{ border: '1px solid lightgray', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h1>Oh,Snap : ( <br /></h1>
        <h1> 404 PAGE NOT FOUND</h1>
        <button className='btn btn-blue' onClick={Logout}>BACK</button>
        <br />

        </div>

    </div>
  );
};

export default Notfound;
