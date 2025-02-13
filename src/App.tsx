import { Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Reservation from '@pages/Reservation/Reservation';
import Footer from '@components/Footer/Footer';
import Home from '@pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="MainContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
