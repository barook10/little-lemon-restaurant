import React from 'react';

function CustomersSay() {
  return (
    <section className="testimonials-section">
      <h2>What our customers say</h2>
      <div className="testimonials-grid">
        <article className="testimonial-card">
          <p className="rating">★★★★★</p>
          <img src={process.env.PUBLIC_URL + '/Mario and Adrian A.jpg'} alt="John Doe" />
          <h4>John Doe</h4>
          <p>"The best Mediterranean food in Chicago! Fresh ingredients and amazing flavors."</p>
        </article>

        <article className="testimonial-card">
          <p className="rating">★★★★★</p>
          <img src={process.env.PUBLIC_URL + '/Mario and Adrian b.jpg'} alt="Sarah Smith" />
          <h4>Sarah Smith</h4>
          <p>"Great atmosphere and excellent service. The lemon dessert is a must-try!"</p>
        </article>

        <article className="testimonial-card">
          <p className="rating">★★★★★</p>
          <img src={process.env.PUBLIC_URL + '/Mario and Adrian A.jpg'} alt="Michael Johnson" />
          <h4>Michael Johnson</h4>
          <p>"Authentic Greek salad and wonderful customer experience. Highly recommend!"</p>
        </article>
      </div>
    </section>
  );
}

export default CustomersSay;
