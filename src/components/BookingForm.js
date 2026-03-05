import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  
  // Error states for validation
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  // Get today's date in YYYY-MM-DD format for min date validation
  const today = new Date().toISOString().split('T')[0];

  // Validate individual fields
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'date':
        if (!value) {
          error = 'Please select a date';
        } else if (value < today) {
          error = 'Date cannot be in the past';
        }
        break;
      case 'time':
        if (!value) {
          error = 'Please select a time';
        }
        break;
      case 'guests':
        if (!value) {
          error = 'Please enter number of guests';
        } else if (parseInt(value) < 1) {
          error = 'Minimum 1 guest required';
        } else if (parseInt(value) > 10) {
          error = 'Maximum 10 guests allowed';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  // Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update field value
    switch (name) {
      case 'date':
        setDate(value);
        // Dispatch action to update available times based on selected date
        dispatch({ type: 'UPDATE_TIMES', date: value });
        break;
      case 'time':
        setTime(value);
        break;
      case 'guests':
        setGuests(value);
        break;
      case 'occasion':
        setOccasion(value);
        break;
      default:
        break;
    }
    
    // Validate and update errors
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Handle field blur (when user leaves field)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Check if form is valid
  const isFormValid = () => {
    const dateError = validateField('date', date);
    const timeError = validateField('time', time);
    const guestsError = validateField('guests', guests);
    
    return !dateError && !timeError && !guestsError && date && time && guests;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ date: true, time: true, guests: true, occasion: true });
    
    // Validate all fields
    const newErrors = {
      date: validateField('date', date),
      time: validateField('time', time),
      guests: validateField('guests', guests)
    };
    setErrors(newErrors);
    
    // Check if form is valid before submitting
    if (!newErrors.date && !newErrors.time && !newErrors.guests && date && time && guests) {
      // Prepare form data for submission
      const formData = {
        date,
        time,
        guests: parseInt(guests),
        occasion
      };
      
      // Call the submitForm function passed from the parent component
      const success = submitForm(formData);
      if (success) {
        // Reset form after successful submission
        setDate('');
        setTime('');
        setGuests('');
        setOccasion('');
        setErrors({});
        setTouched({});
      }
    }
  };

  // Helper function to show error
  const showError = (fieldName) => {
    return touched[fieldName] && errors[fieldName];
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={date}
          onChange={handleChange}
          onBlur={handleBlur}
          min={today}
          required
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? 'date-error' : undefined}
        />
        {showError('date') && (
          <span className="error-message" id="date-error" role="alert">{errors.date}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={time}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? 'time-error' : undefined}
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {showError('time') && (
          <span className="error-message" id="time-error" role="alert">{errors.time}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={guests}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
        />
        {showError('guests') && (
          <span className="error-message" id="guests-error" role="alert">{errors.guests}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Celebration">Celebration</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={!isFormValid()}
        aria-disabled={!isFormValid()}
      >
        Make Reservation
      </button>
    </form>
  );
}

export default BookingForm;
