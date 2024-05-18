import React, { useState } from 'react';
import { Nav } from "./Nav";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { NightSafety } from "./NightSafety";

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
        {page !== 'home' && page !== 'profile' && page !== 'night safety' && <p>Invalid page selected.</p>}
      </div>
    </main>
  );
}

export default App;
