import React from 'react';

function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1></h1>
          <h2></h2>
          <p></p>
          <button className="btn btn-primary"></button>
        </div>
        <div className="hero-image">
          <img src="" alt="" />
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials-section">
        <div className="specials-header">
          <h2></h2>
          <button className="btn btn-secondary"></button>
        </div>

        {/* Menu Cards */}
        <div className="menu-cards">
          <article className="menu-card">
            <img src="" alt="" />
            <h3></h3>
            <p className="price"></p>
            <p></p>
            <button className="btn-order"></button>
          </article>

          <article className="menu-card">
            <img src="" alt="" />
            <h3></h3>
            <p className="price"></p>
            <p></p>
            <button className="btn-order"></button>
          </article>

          <article className="menu-card">
            <img src="" alt="" />
            <h3></h3>
            <p className="price"></p>
            <p></p>
            <button className="btn-order"></button>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;
