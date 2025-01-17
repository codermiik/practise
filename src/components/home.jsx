import Container from "react-bootstrap/Container";
import Image2 from '../assets/image2.jpeg'
function Home() {
  return (

  <div className="d-flex justify-content-center align-items-center position-relative"
      style= {{
      backgroundImage:`url(${Image2})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width:'100%',
      height:'100vh',  }}>
          <Container className="text-center">
                <div>
                    <h2 style={{
                      fontSize: '50px',
                      color: 'white',
                      }}>FEEL AT HOME</h2>
                    <h1 style={{
                      fontSize: '70px',
                      color: 'white',
                      fontWeight: 'bold',
                      }}>AWAY FROM HOME</h1>
                </div>
            </Container>
  </div>
   
  )
}

export default Home