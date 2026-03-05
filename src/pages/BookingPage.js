import React from 'react';
import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <>
      <section className="booking-page-header">
        <h1></h1>
        <p></p>
      </section>

      <section className="booking-page-content">
        <div className="booking-form-container">
          <h2></h2>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
      </section>
    </>
  );
}

export default BookingPage;
