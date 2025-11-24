import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import AppNavbar from './components/Navbar/Navbar.jsx';

import Footer from './components/Footer/Footer.jsx';






function App() {
  const [user, setUser] = useState(null); // user state

  const handleLogout = () => {
    setUser(null);
  };

  return (
  
    
    <div>
      <AppNavbar user={user} handleLogout={handleLogout} />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
  </div>
  )
}

export default App
