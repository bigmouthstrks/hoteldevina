import { Routes, Route, Outlet } from 'react-router-dom';
import Reservation from '@reservations/pages/Reservation/Reservation';
import Home from '@core/pages/Home/Home';
import Rooms from '@rooms/pages/Rooms/Rooms';
import Login from '@auth/pages/Login/Login';
import MainLayout from '@layouts/MainLayout';
import PlainLayout from '@layouts/PlainLayout';
import MyReservations from '@reservations/pages/MyReservations/MyReservations';
import ProtectedRoute from '@auth/components/ProtectedRoute/ProtectedRoute';
import ClientLayout from '@layouts/ClientLayout';
import ReservationDetails from '@reservations/pages/ReservationDetails/ReservationDetails';
import Search from '@reservations/pages/Search/Search';
import AdminLayout from '@layouts/AdminLayout';
import Menu from '@admin/pages/Menu/Menu';
import GlobalProviders from '@layouts/GlobalProviders';
import { StatusType } from '@models/reservation';
import ProtectedAdminRoute from '@admin/components/ProtectedAdminRoute/ProtectedAdminRoute';

function App() {
  /* TODO: admin alias url validation
  const { origin } = window.location;
  const adminUrl = import.meta.env.VITE_ADMIN_URL;
  const isAdminRoute = adminUrl === origin;*/
  const isAdminRoute = true;
  return (
    <GlobalProviders>
      <div className="App">
        <Routes>
          {isAdminRoute && (
            <>
              {/* TODO: replace /login-admin to /login
              <Route path="/login" element={<Login isAdminMode />} />
              */}
              <Route path="/login-admin" element={<Login isAdminMode />} />
              <Route
                path="/admin"
                element={
                  <ProtectedAdminRoute>
                    <AdminLayout>
                      <Outlet />
                    </AdminLayout>
                  </ProtectedAdminRoute>
                }
              >
                <Route path="" element={<Menu />} />
                <Route
                  path="check-in"
                  element={
                    <MyReservations title="Check-In" filter={StatusType.CONFIRMED} isAdminMode />
                  }
                />
                <Route
                  path="check-out"
                  element={
                    <MyReservations title="Check-Out" filter={StatusType.IN_PROGRESS} isAdminMode />
                  }
                />
              </Route>
            </>
          )}
          <Route
            element={
              <PlainLayout>
                <Outlet />
              </PlainLayout>
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login isRegisterMode />} />
          </Route>
          <Route
            element={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/search" element={<Search />} />
          </Route>
          <Route
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Outlet />
                </ClientLayout>
              </ProtectedRoute>
            }
          >
            <Route path="/my-reservations" element={<MyReservations title="Mis Reservas" />} />
            <Route path="/reservation/:id" element={<ReservationDetails />} />
          </Route>
        </Routes>
      </div>
    </GlobalProviders>
  );
}

export default App;
