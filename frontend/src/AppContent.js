// src/AppContent.jsx

import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import AdminSidebar from './pages/Admin/AdminSidebar'; // Ensure this path is correct
import LoginPage from './pages/User/Login'; // Ensure this path is correct
import SignUpComponent from './pages/User/Signup'; // Ensure this path is correct
import AdminDashboard from './pages/Admin/AdminDashboard'; // Ensure this path is correct
import EmployeeStatusDashboard from './pages/Admin/EnvironmentalReports'; // Ensure this path is correct
import SustainabilityMetrics from './pages/Admin/SustainabilityMetrics'; // Ensure this path is correct
import ActionPlans from './pages/Admin/ActionPlans'; // Ensure this path is correct
import Scheduling from './pages/Admin/ScheduleManagement';
import AdminSettings from './pages/Admin/AdminSettings';
import Navbar from './pages/User/Navbar'; // Adjust the import path as needed

const drawerWidth = 50; // Adjust as necessary
const navbarHeight = 64; // Height of the Navbar component

const AppContent = ({ mode, toggleColorMode }) => {
  const location = useLocation();

  console.log("Current path:", location.pathname); // Debugging path

  // Determine which sidebar to display
  const isAdminPath = location.pathname.startsWith('/Admin');
  const isAuthPath = ['/Signup', '/'].includes(location.pathname);

  const SidebarComponent = isAdminPath ? AdminSidebar : null;

  // Show Navbar based on the path
  const NavbarComponent = isAuthPath ? Navbar : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {NavbarComponent && <NavbarComponent mode={mode} toggleColorMode={toggleColorMode} />}
      
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {SidebarComponent && (
          <SidebarComponent darkTheme={mode === 'dark'} toggleDarkTheme={toggleColorMode} />
        )}
        
        <main
          style={{
            flexGrow: 1,
            padding: '16px', // Adjust padding as needed
            marginLeft: SidebarComponent ? `${drawerWidth}px` : '0',
            marginTop: NavbarComponent ? `${navbarHeight}px` : '0', // Adjust based on Navbar height
          }}
        >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Signup" element={<SignUpComponent />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/AdminEmployees" element={<EmployeeStatusDashboard />} />
            <Route path="/Admin/Scheduling" element={<Scheduling />} />
            <Route path="/Admin/Settings" element={<AdminSettings />} />
            <Route path="/Admin/SustainabilityMetrics" element={<SustainabilityMetrics />} />
            <Route path="/Admin/ActionPlans" element={<ActionPlans />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AppContent;
