import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
