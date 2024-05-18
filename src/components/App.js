import React, { useState } from 'react';
import { Nav } from './Nav';
import { Home } from './Home';
import { Profile } from './Profile';
import { NightSafety } from './NightSafety';
import { Resources } from './Resources';
import { Report } from './Report';

function App(props) {
  const [page, setPage] = useState('home');

  const applyPageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <main>
      <Nav applyPageChangeCallback={applyPageChange} />
      <div>
        {page === 'home' && <Home />}
        {page === 'profile' && <Profile />}
        {page === 'night safety' && <NightSafety />}
        {page === 'resources' && <Resources />}
        {page === 'report' && <Report />}
        {page !== 'home' && page !== 'profile' && page !== 'night safety' && page !== 'resources' && page !== 'report' && <p>Invalid page selected.</p>}
      </div>
    </main>
  );
}

export default App;
