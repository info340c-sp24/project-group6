import React from 'react';
import { MobileNav } from './Nav';

export function RequestEscort() {

  return (
    <div>
      <>
        <header>
          <MobileNav />
          <h1>REQUEST AN ESCORT</h1>
          <p>
            To ensure your safety when leaving UW Recreation facilities at night,
            different organizations at the UW provide some options that are free and may be available to you.
          </p>
        </header>

        <div id="escort-request">
          <h2>Husky NightWalk 206-685-9255</h2>
          <ul>
            <li>Dial 206-685-9255 (WALK) when ready for a safety escort within the Husky NightWalk service area.</li>
            <li>Advise the dispatcher which building you are calling from or an address. Make sure you are standing outside and are visible for the Husky Nightwalk guard.</li>
            <li>Have your UW student, staff or other photo identification ready.</li>
          </ul>

          <h3>Hours</h3>
          <p>6:30 p.m. - 2 a.m. daily EXCEPT university holidays</p>

          <h4>Husky NightWalk service area boundaries</h4>
          <button className="service-area" type="button">NIGHTWALK SERVICE AREA</button>
        </div>
        <div id="service-area-map">
          <iframe src="https://www.google.com/maps/d/embed?mid=1vw5w2MFNwZ9YZak1vCWRTEMaUGI-EBQ&ehbc=2E312F"
            width="640" height="480" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Husky NightWalk Service Area Map"></iframe>
        </div>
      </>
    </div>
  );
}
