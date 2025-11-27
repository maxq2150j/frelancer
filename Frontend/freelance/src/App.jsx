import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AppNavbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';


import FreelancerDashboard from './Pages/Freelancer/FreelancerDashboard.jsx';
import AvailableJobs from './Pages/Freelancer/AvailableJobs.jsx';
import JobDetails from './Pages/Freelancer/JobDetails.jsx';
import SendProposal from './Pages/Freelancer/SendProposal.jsx';
import MyProposals from './Pages/Freelancer/MyProposals.jsx';
import EditProposal from './Pages/Freelancer/EditProposal.jsx';

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation(); 

  const handleLogout = () => setUser(null);

  
  const hideNavFooter = location.pathname.startsWith("/freelancer");

  return (
    <div>
      {!hideNavFooter && <AppNavbar user={user} handleLogout={handleLogout} />}

      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />

        
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
        <Route path="/freelancer/jobs" element={<AvailableJobs />} />
        <Route path="/freelancer/job/:id" element={<JobDetails />} />
        <Route path="/freelancer/proposal/:id" element={<SendProposal />} />
        <Route path="/freelancer/proposals" element={<MyProposals />} />
        <Route path="/freelancer/proposal/edit/:id" element={<EditProposal />} />

      </Routes>

      {!hideNavFooter && <Footer />}
    </div>
  );
}

export default App;
