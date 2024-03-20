// Dashboardcontent.jsx
import React from 'react';
import "../../../src/assets/css/dashboardcontent.css";
import AdminDashboard from '../Auth/Admindashboard';

const Dashboardcontent = () => {
  return (
    <>
    <AdminDashboard/>
    <div className='content'>
  
    <div className="dashboard-content">
      <div className="dashboard-card">
        <h3>Home Care Services</h3>
        <p>Our home care services provide personalized care for seniors in the comfort of their own homes.</p>
        <button>Learn More</button>
      </div>
      <div className="dashboard-card">
        <h3>Caregiver Support</h3>
        <p>We offer caregiver support services to assist families in caring for their elderly loved ones.</p>
        <button>Learn More</button>
      </div>
      <div className="dashboard-card">
        <h3>Nursing Care</h3>
        <p>Our nursing care services ensure that seniors receive professional medical care at home.</p>
        <button>Learn More</button>
      </div>
      <div className="dashboard-card">
        <h3>Hospital Attendants</h3>
        <p>We provide trained hospital attendants to assist seniors during hospital visits and stays.</p>
        <button>Learn More</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Dashboardcontent;
