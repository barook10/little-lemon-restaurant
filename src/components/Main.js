import React, { useReducer, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';

// Initial available times - fetches times for today's date
export const initializeTimes = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;
  
  // Check if the fetchAPI function is available globally
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(dateString);
  }
  
  // Fallback default times if API is not available
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
    const selectedDate = action.date;
    
    // Check if the fetchAPI function is available globally
    if (typeof window.fetchAPI === 'function') {
      return window.fetchAPI(selectedDate);
    }
    
    // Fallback: return default times if API is not available
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize available times for today's date when component mounts
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    dispatch({ type: 'UPDATE_TIMES', date: dateString });
  }, []);

  // Function to submit the form to the API
  const submitForm = (formData) => {
    // Check if the submitAPI function is available globally
    if (typeof window.submitAPI === 'function') {
      const success = window.submitAPI(formData);
      if (success) {
        console.log('Reservation submitted successfully!', formData);
        // Navigate to the confirmed booking page
        navigate('/confirmed');
        return true;
      } else {
        console.log('Failed to submit reservation');
        return false;
      }
    } else {
      // Fallback if API is not available
      console.log('API not available. Reservation data:', formData);
      navigate('/confirmed');
      return true;
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
