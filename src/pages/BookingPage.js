import React from 'react';
import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <section className="booking-page-header">
        <h1>Reserve a Table</h1>
        <p>Book your table online and enjoy a wonderful dining experience at Little Lemon.</p>
      </section>

      <section className="booking-page-content">
        <div className="booking-form-container">
          <h2>Make a Reservation</h2>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
      </section>
    </>
  );
}

export default BookingPage;
