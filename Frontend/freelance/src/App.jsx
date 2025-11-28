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
import ClientDashboard from './Pages/Client/ClientDashboard.jsx';
import ClientJobs from './Pages/Client/ClientJobs.jsx';
import PostJob from './Pages/Client/PostJob.jsx';
import EditJob from './Pages/Client/EditJob.jsx';
import JobApplications from './Pages/Client/JobApplications.jsx';
import ClientProposals from './Pages/Client/ClientProposals.jsx';
import ClientTasks from './Pages/Client/ClientTasks.jsx';
import FreelancerTasks from './Pages/Freelancer/FreelancerTasks.jsx';
import FreelancerPayments from './Pages/Freelancer/FreelancerPayments.jsx';
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx';

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation(); 

  const handleLogout = () => setUser(null);

  
  const hideNavFooter = location.pathname.startsWith("/freelancer") || location.pathname.startsWith("/client");

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

        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/client/post-job" element={<PostJob />} />
        <Route path="/client/jobs" element={<ClientJobs />} />
        <Route path="/client/edit-job/:id" element={<EditJob />} />
        <Route path="/client/job/:id/applications" element={<JobApplications />} />
        <Route path="/client/proposals" element={<ClientProposals />} />
        <Route path="/client/tasks" element={<ClientTasks />} />

        <Route path="/freelancer/tasks" element={<FreelancerTasks />} />
        <Route path="/freelancer/payments" element={<FreelancerPayments />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>

      {!hideNavFooter && <Footer />}
    </div>
  );
}

export default App;
