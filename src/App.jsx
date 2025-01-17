import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home from './components/home';
import  Explore from './components/explore';
import  Contacts from './components/contacts';
import Navbar from './components/navbar';
import Footer from './components/footer'


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contacts" element={<Contacts />} />
          
      </Routes>
      <Footer />
    </Router>
  </> 
    
  )
}

export default App
