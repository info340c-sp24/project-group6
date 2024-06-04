import React from 'react';
import { Link } from 'react-router-dom';
import { MobileNav } from './Nav';

export function NightSafety() {

  return (
    <>
      <header>
        <MobileNav />
        <h1>SAFETY AT NIGHT</h1>
      </header>

      <div id="content">
        <section id="card-container">
          <div id="night-card">
            <img src="img/night-ride.jpg" alt="uw night ride shuttle" />
            <div id="night-card-text">
              <h2>NIGHT RIDE</h2>
              <p>
                NightRide is a UW shuttle service that provides a safe and easy way for U-PASS members
                living in the general university area to get home at night. Shuttles for the east and
                west route zones make their first stop at the IMA front entrance and run every 20 minutes
                during operating hours. All shuttles are wheelchair accessible.
              </p>
              <Link to="/request-ride">
                <button>REQUEST A RIDE</button>
              </Link>
            </div>
          </div>

          <div id="night-card">
            <img src="img/night-walk.jpg" alt="uw night walkers" />
            <div id="night-card-text">
              <h2>NIGHT WALK</h2>
              <p>
                Husky NightWalk provides safe vehicle escort at night with a uniformed security guard
                for students, faculty and staff. Guards can also assist with building and office lockouts
                (proper identification required) and jump start dead car batteries. The purpose is to help
                students and employees get to and from campus safely.
              </p>
              <Link to="/night-walk">
                <button>REQUEST AN ESCORT</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
