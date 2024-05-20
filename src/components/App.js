import React, { useState } from 'react';
import { Nav } from './Nav';
import { Home } from './Home';
import { Profile } from './Profile';
import { NightSafety } from './NightSafety';
import { Resources } from './Resources';
import { Report } from './Report';
import { RequestRide } from './RequestRide';
import { RequestEscort } from './RequestEscort';

function App(props) {
  const [page, setPage] = useState('home');

  const applyPageChangeCallback = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <main>
      <Nav applyPageChangeCallback={applyPageChangeCallback} />
      <div>
        {page === 'home' && <Home />}
        {page === 'profile' && <Profile />}
        {page === 'night safety' && <NightSafety applyPageChangeCallback={applyPageChangeCallback} />}
        {page === 'resources' && <Resources />}
        {page === 'report' && <Report />}
        {page === 'request a ride' && <RequestRide applyPageChangeCallback={applyPageChangeCallback} />}
        {page === 'request an escort' && <RequestEscort applyPageChangeCallback={applyPageChangeCallback} />}
        {page !== 'home' && page !== 'profile' && page !== 'night safety' && page !== 'resources' && page !== 'report' && page !== 'request a ride' && page !== 'request an escort' && <p>Invalid page selected.</p>}
      </div>
    </main>
  );
}

export default App;
