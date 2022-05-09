import React from 'react';

class Header extends React.Component {
  render() {
    const text = 'Sistema Solar';
    return (
      <header>
        <h1>{text}</h1>
      </header>
    );
  }
}

export default Header;
