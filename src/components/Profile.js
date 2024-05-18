import React from 'react';

export function Profile(props) {
  return (
    <>
      <header>
        <img id='menu' src='img/menu-icon.png' alt='menu' />
        <h1>PROFILE</h1>
      </header>
      <div id='notifications'>
        <section>
          <div className='notification-group'>
            <h2>GENERAL ALERTS</h2>
            <input type='checkbox' id='setting1' />
            <label htmlFor='setting1'>Subscribe to UW campus emergency alert system.</label><br />

            <input type='checkbox' id='setting2' />
            <label htmlFor='setting2'>Subscribe to off-campus emergencies or safety alerts</label><br />
          </div>

          <div className='notification-group'>
            <h2>PERSONAL SAFETY</h2>
            <input type='checkbox' id='setting3' />
            <label htmlFor='setting3'>Notify me when I enter a designated high-risk area on campus (e.g., secluded pathway at night)</label><br />

            <input type='checkbox' id='setting4' />
            <label htmlFor='setting4'>Notify me when there's an ongoing incident on campus, with safety instructions relevant to my location.</label><br />

            <input type='checkbox' id='setting5' />
            <label htmlFor='setting5'>Notify me during high-risk hours (e.g., evenings) with safety tips and reminders for specific areas (e.g., poorly lit parking lots).</label><br />

            <input type='checkbox' id='setting6' />
            <label htmlFor='setting6'>Notify me when a safety resource (e.g., NightWalk escort) becomes available near my location.</label><br />
          </div>
        </section>
        <button>SAVE CHANGES</button>
      </div>
    </>
  );
};
