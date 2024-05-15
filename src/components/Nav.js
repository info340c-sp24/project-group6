import React from 'react';

export function Nav() {
  return (
    <nav>
      <div id="logo">
        <img id="logo-img" src="img/uw-logo.png" alt="uw logo" />
        <strong>UW CAMPUS SAFETY </strong>
      </div>
      <ul>
        <li>
          <a href="index.html">HOME</a>
        </li>
        <li>
          <a href="report.html">REPORT</a>
        </li>
        <li>
          <a href="night-safety.html">NIGHT SAFETY</a>
        </li>
        <li>
          <a href="resources.html">RESOURCES</a>
        </li>
        <li>
          <a href="profile.html">PROFILE</a>
        </li>
      </ul>
    </nav>
  );
};