import React from "react";
import { Nav } from "./Nav";

function App(props) {
  return (
    <main>
      <Nav />
      <header>
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/img/menu-icon.png`}
          alt="menu"
        />
        <h1>WELCOME</h1>
        <p>If you have an emergency, please call or text 911.</p>
      </header>

      <div id="content">
        <section id="card-container">
          <div
            className="card"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/safe-campus.jpg)`,
            }}
          >
            <h2>SAFE CAMPUS</h2>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/uw-police.jpg)`,
            }}
          >
            <h2>UW POLICE</h2>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/emergency-management.jpg)`,
            }}
          >
            <h2>EMERGENCY MANAGEMENT</h2>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/contact.jpg)`,
            }}
          >
            <h2>CONTACT</h2>
          </div>
        </section>

        <section id="news">
          <h2>RECENT NEWS</h2>
          <ul>
            <li>
              <h3>Outreach at UW for people experiencing homelessness</h3>
              <p>January 25, 2024</p>
            </li>
            <li>
              <h3>
                Enhancing Campus Safety: UW Alert text messages soon to reach
                more students
              </h3>
              <p>January 3, 2024</p>
            </li>
            <li>
              <h3>Get Ready for Winter Weather</h3>
              <p>December 14, 2023</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
