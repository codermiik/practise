import Container  from "react-bootstrap/esm/Container"
import Row  from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { Facebook, Pinterest, TwitterX } from 'react-bootstrap-icons';
import '../App.css'
function footer() {
  return (
    <>
<div style={{
      backgroundColor:'#D3D3D3'
    }}>
      <Container className="d-flex justify-content-center align-items-center position-relative">
      
              <ul  className="social-links" 
                  style={{
                    listStyle:'none',
                    display: 'flex'
                  }}
                  >
                      <li className="list-content"><a href=""><Facebook /></a></li>
                      <li  className="list-content"><a href=""><TwitterX/></a></li>
                      <li  className="list-content"><a href=""><Pinterest /></a></li>
                  </ul>
       
      </Container>
</div>

<div style={{
  marginTop:'5px',
  marginBottom:'5px',
}}>
      <Container>
        <Row className="text-center text-md-left"> 
          <Col xs={12} md={3} className="mb-3">
          <p className="head">ADDRESS</p>
          <p className="content">500 Terry Francine Street</p>
          <p className="content">San Francisco, CA 94158</p>
          </Col>

          <Col xs={12} md={3} className="mb-3">
          <p className="head">CONTACT</p>
          </Col>

          <Col xs={12} md={3} className="mb-3">
          <p className="head">HOME & AWAY</p>
          <p className="content">© 2035 by HOME & AWAY</p>
          <p className="content">Powered and secured by Wix</p>
          </Col>
          
          <Col xs={12} md={3} className="mb-3">
          <p className="head">WE ACCEPT</p>
          </Col>

        </Row>
        

      </Container>
</div>
    </>
  )
}

export default footer