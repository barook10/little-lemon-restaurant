import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

// Initial available times
export const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

// Reducer function to update times based on selected date
export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    // For now, return the same available times regardless of date
    // This can be updated in the future to fetch times from an API
    return initializeTimes();
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
