import React from 'react';

export function Nav(props) {
  const { applyPageChangeCallback } = props;

  const handlePageChange = (event) => {
    event.preventDefault();
    applyPageChangeCallback(event.target.innerText.toLowerCase());
  };

  return (
    <nav>
      <div id="logo">
        <img id="logo-img" src="img/uw-logo.png" alt="uw logo" />
        <strong>UW CAMPUS SAFETY </strong>
      </div>
      <ul>
        <li onClick={handlePageChange}>
          HOME
        </li>
        <li onClick={handlePageChange}>
          REPORT
        </li>
        <li onClick={handlePageChange}>
          NIGHT SAFETY
        </li>
        <li onClick={handlePageChange}>
          RESOURCES
        </li>
        <li onClick={handlePageChange}>
          PROFILE
        </li>
      </ul>
    </nav>
  );
};
