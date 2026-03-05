import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking" className="btn btn-primary">Reserve a Table</Link>
      </div>
      <div className="hero-image">
        <img src={process.env.PUBLIC_URL + '/restauranfood.jpg'} alt="Delicious Mediterranean food" />
      </div>
    </section>
  );
}

export default CallToAction;
