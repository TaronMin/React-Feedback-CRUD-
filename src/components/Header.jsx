import React from "react";
import { Link } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <>
      <header style={headerStyles}>
        <div className="container">
          <h2>{text}</h2>
          <span className="more"><Link to='/about'>More</Link></span>
        </div>
      </header>
    </>
  );
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

export default Header;
