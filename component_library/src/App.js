// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import HomePage from './Home/HomePage.jsx';
import ComuList from './Tab01/ComuList';
import Mypage from './Tab04/Mypage';
import NoticeList from './Tab02/NoticeList';
import StudyList from './Tab03/StudyList';
// Import other components for different routes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Comu" element={<ComuList />} />
          <Route path="Notice" element={<NoticeList />} />
          <Route path="Study Recode" element={<StudyList />} />
          <Route path="MyPage" element={<Mypage />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
