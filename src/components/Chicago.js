import React from 'react';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-content">
        <h2>Little Lemon</h2>
        <p>Family-owned and operated since 1995, Little Lemon brings the authentic taste of Mediterranean cuisine to the heart of Chicago. Our chefs use only the freshest ingredients, sourced from local suppliers whenever possible.</p>
        <p>Located in the vibrant neighborhood of Lincoln Park, our restaurant offers a warm and inviting atmosphere perfect for family gatherings, romantic dinners, or casual lunches with friends.</p>
      </div>
      <div className="chicago-images">
        <img src={process.env.PUBLIC_URL + '/restaurant.jpg'} alt="Little Lemon Restaurant Interior" />
        <img src={process.env.PUBLIC_URL + '/Mario and Adrian b.jpg'} alt="Our Chefs Mario and Adrian" />
      </div>
    </section>
  );
}

export default Chicago;
