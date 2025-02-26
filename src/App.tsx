import { Routes, Route } from 'react-router-dom';
import Reservation from '@reservations/pages/Reservation/Reservation';
import Home from '@core/pages/Home/Home';
import Rooms from '@rooms/pages/Rooms/Rooms';
import Login from '@auth/pages/Login/Login';
import MainLayout from '@layouts/MainLayout';
import PlainLayout from '@layouts/PlainLayout';
import MyReservations from '@reservations/pages/MyReservations/MyReservations';
import ProtectedRoute from '@auth/components/RequireAuth/RequireAuth';
import ClientLayout from '@layouts/ClientLayout';
import ReservationDetails from '@reservations/pages/ReservationDetails/ReservationDetails';
import Search from '@reservations/pages/Search/Search';
import AdminLayout from '@layouts/AdminLayout';
import Menu from '@admin/pages/Menu/Menu';
import GlobalProviders from '@layouts/GlobalProviders';

function App() {
  return (
    <GlobalProviders>
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
            path="/login-admin"
            element={
              <PlainLayout>
                <Login isAdminMode />
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
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Menu />
                </AdminLayout>
              </ProtectedRoute>
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
            path="/my-reservations"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <MyReservations />
                </ClientLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservation/:id"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <ReservationDetails />
                </ClientLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <MainLayout>
                <Search />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </GlobalProviders>
  );
}

export default App;
