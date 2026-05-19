
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Contact from './components/Contact';


import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

import Services from './components/Getservices';
import AboutUs from './components/AboutUs';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar goes here  */}
        <Navbar />
        <header className="App-header">
          <div className="marquee">
            <h1 className="hero-title">Bolddream creation limited</h1>
          </div>

          <div className="header-overlay">
            <div className="marquee">
              <p className="tagline">Get job vacancies outside the country.</p>
            </div>
          </div>
        </header>
        <nav>
          
          <Link to="/Contact" className='btn btn-danger btn-sm m-2'>Contact</Link>
          
          <Link to="/" className='btn btn-danger btn-sm m-2'>Getservices</Link>
          <Link to="/aboutus" className='btn btn-danger btn-sm m-2'>About Us</Link>
          



        </nav>
          
        {/* routes  */}
        <Routes>
          
                  <Route path='/' element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/aboutus' element={<AboutUs />} />
          



        </Routes>

      </div>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
