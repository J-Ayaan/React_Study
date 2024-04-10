import React, { useState } from 'react'; // Added useState import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Dashboard from './DashBoard/Dashboard';
import GroupManagementPage from './Group/GroupManagementPage';
import UnivBoardPage from './Univ/UnivBoardPage';
import MyProfile from './Profile/Myprofile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router>
      <div>
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/groups" element={<GroupManagementPage />} />
          <Route path="/univ" element={<UnivBoardPage />} />
          <Route path="/myprofile" element={<MyProfile isLoggedIn={isLoggedIn} user={user} onLogin={handleLogin} onLogout={handleLogout} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
