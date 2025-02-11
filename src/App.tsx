import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/Home';

function App() {
  useEffect(() => {});

  return (
    <div className="App">
      <div className="MainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
