import { Nav } from './Nav';
import { Home } from './Home';
import { Profile } from './Profile';
import { NightSafety } from './NightSafety';
import { Resources } from './Resources';
import { Report } from './Report';
import { RequestRide } from './RequestRide';
import { RequestEscort } from './RequestEscort';
import { Routes, Route, Navigate} from 'react-router-dom';

function App(props) {

  return (
    <div>
      <main>
        <Nav />
        <div>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="report" element={<Report />} />
            <Route path="night-safety" element={<NightSafety />} />
            <Route path="resources" element={<Resources />} />
            <Route path="profile" element={<Profile />} />
            <Route path="request-ride" element={<RequestRide />} />
            <Route path="night-walk" element={<RequestEscort />} />
            <Route path="*" element={<Navigate to ="home"/>} />
          </Routes>
        </div>
        <footer>
          &copy; INFO 340 Group 6
        </footer>
      </main>
    </div>
  );
}

export default App;
