// Calendar.jsx
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '/Users/jungjunkyeong/Desktop/React_Study/gpttest/src/style.css';

const CustomCalendar = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
};

export default CustomCalendar;
