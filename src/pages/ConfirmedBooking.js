import React from 'react';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <div className="confirmed-booking-content">
        <h1>Reservation Confirmed!</h1>
        <p>Thank you for choosing Little Lemon. We look forward to serving you!</p>
        <div className="confirmation-details">
          <p>A confirmation email will be sent to you with your reservation details.</p>
          <p>If you need to modify or cancel your reservation, please call us at (555) 123-4567.</p>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
