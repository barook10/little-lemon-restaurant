import React from 'react';

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button className="btn btn-secondary">Online Menu</button>
      </div>

      <div className="menu-cards">
        <article className="menu-card">
          <img src={process.env.PUBLIC_URL + '/greek salad.jpg'} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p className="price">$12.99</p>
          <p>The famous Greek salad of crispy lettuce, peppers, olives, our Chicago feta cheese, and crunchy onion.</p>
          <button className="btn-order">Order Now</button>
        </article>

        <article className="menu-card">
          <img src={process.env.PUBLIC_URL + '/bruchetta.svg'} alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p className="price">$9.99</p>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <button className="btn-order">Order Now</button>
        </article>

        <article className="menu-card">
          <img src={process.env.PUBLIC_URL + '/lemon dessert.jpg'} alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p className="price">$8.99</p>
          <p>This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <button className="btn-order">Order Now</button>
        </article>
      </div>
    </section>
  );
}

export default Specials;
