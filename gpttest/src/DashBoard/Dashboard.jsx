// Dashboard.jsx
import React, { useState } from 'react';
import '/Users/jungjunkyeong/Project/SOFIT/gpttest/src/style.css';
import CustomCalendar from './Calendar'; // Import the CustomCalendar component
import ToDoListByDate from './ToDoListByDate'; // Import the ToDoListByDate component
import GroupList from './GroupList';
import StudyProgress from './StudyProgress';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className="dashboard">
      <div className="grid-container">
        <div className="grid-item">
          <GroupList />
        </div>
        <div className="grid-item">
          <StudyProgress />
        </div>
        <div className="grid-item">
          <CustomCalendar selectedDate={selectedDate} handleDateChange={handleDateChange} />
        </div>
        <div className="grid-item">
          <ToDoListByDate selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
