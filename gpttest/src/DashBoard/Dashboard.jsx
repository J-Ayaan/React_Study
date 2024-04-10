// Dashboard.jsx
import React, { useState } from 'react';
import '/Users/jungjunkyeong/Desktop/React_Study/gpttest/src/style.css';
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
        <div className="grid-item-left">
          <GroupList />
        </div>
        <div className="grid-item-right">
          <StudyProgress />
        </div>
        <div className="grid-item-left">
          <CustomCalendar selectedDate={selectedDate} handleDateChange={handleDateChange} />
        </div>
        <div className="grid-item-right">
          <ToDoListByDate selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
