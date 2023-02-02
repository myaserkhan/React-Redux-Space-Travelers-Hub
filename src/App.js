import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Myprofile from './components/Myprofile/Myprofile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="myprofile" element={<Myprofile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
