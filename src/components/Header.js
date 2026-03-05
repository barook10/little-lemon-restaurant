import React from 'react';

function Header() {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/Logo .svg'} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;
