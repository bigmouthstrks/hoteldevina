import { Routes, Route } from 'react-router-dom';
import Reservation from '@pages/Reservation/Reservation';
import Home from '@pages/Home/Home';
import Rooms from '@pages/Rooms/Rooms';
import Login from '@pages/Login/Login';
import MainLayout from '@layouts/MainLayout';
import PlainLayout from '@layouts/PlainLayout';
import AuthProvider from '@providers/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <PlainLayout>
                <Login />
              </PlainLayout>
            }
          />
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/rooms"
            element={
              <MainLayout>
                <Rooms />
              </MainLayout>
            }
          />
          <Route
            path="/reservation"
            element={
              <MainLayout>
                <Reservation />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
