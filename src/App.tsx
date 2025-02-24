import { Routes, Route } from 'react-router-dom';
import Reservation from '@pages/Reservation/Reservation';
import Home from '@pages/Home/Home';
import Rooms from '@pages/Rooms/Rooms';
import Login from '@pages/Login/Login';
import MainLayout from '@layouts/MainLayout';
import PlainLayout from '@layouts/PlainLayout';
import AuthProvider from '@providers/AuthProvider';
import MyReservations from '@pages/MyReservations/MyReservations';
import ProtectedRoute from '@components/RequireAuth/RequireAuth';
import ClientLayout from '@layouts/ClientLayout';

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
            path="/register"
            element={
              <PlainLayout>
                <Login isRegisterMode />
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
          <Route
            path="/mis-reservas"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <MyReservations />
                </ClientLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
