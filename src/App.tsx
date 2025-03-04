import { Routes, Route, Outlet } from 'react-router-dom';
import { AdminOptions, ProtectedAdminRoute } from '@admin/components';
import { LoggedRedirect, ProtectedRoute, ResetPasswordForm } from '@auth/components';
import { Login } from '@auth/pages';
import { Home } from '@core/pages';
import { AdminLayout } from '@layouts/AdminLayout';
import { ClientLayout } from '@layouts/ClientLayout';
import { GlobalProviders } from '@layouts/GlobalProviders';
import { MainLayout } from '@layouts/MainLayout';
import { PlainLayout } from '@layouts/PlainLayout';
import { StatusType } from '@models/consts';
import { MyReservations, ReservationDetails, Search } from '@reservations/pages';
import { Rooms } from '@rooms/pages';
import { Menu } from '@admin/pages';
import { AvailabilityForm } from '@core/components';
import { ReservationSection } from '@reservations/components';
import { Tools } from '@shared/components';
import { ForgotPasswordForm } from '@auth/components/ForgotPasswordForm/ForgotPasswordForm';
import { RoomDetails } from '@rooms/pages/RoomDetails/RoomDetails';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      disable: 'mobile',
    });
  }, []);
  return (
    <GlobalProviders>
      <div className="App">
        <Tools />
        <Routes>
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
            <Route path="check-in" element={<Outlet />}>
              <Route
                path=""
                element={
                  <MyReservations title="Check-In" filter={StatusType.CONFIRMED} isAdminMode />
                }
              />
              <Route
                path="reservation/:id"
                element={<ReservationDetails checkingReservations checkIn />}
              />
            </Route>

            <Route path="check-out" element={<Outlet />}>
              <Route
                path=""
                element={
                  <MyReservations title="Check-Out" filter={StatusType.IN_PROGRESS} isAdminMode />
                }
              />
              <Route path="reservation/:id" element={<ReservationDetails checkingReservations />} />
            </Route>
            <Route
              path="reservations"
              element={
                <>
                  <AdminOptions />
                  <Outlet />
                </>
              }
            >
              <Route
                path=""
                element={
                  <>
                    <AvailabilityForm isAdminMode />
                  </>
                }
              />
              <Route
                path="create"
                element={
                  <>
                    <AvailabilityForm isAdminMode />
                  </>
                }
              />
              <Route
                path="groups"
                element={
                  <>
                    <AvailabilityForm isAdminMode forGroups />
                  </>
                }
              />
              <Route path="update">
                <Route
                  path=""
                  element={
                    <>
                      <MyReservations title="Actualizar Reservas" isAdminMode />
                    </>
                  }
                />
                <Route
                  path="reservation/:id"
                  element={
                    <>
                      <ReservationDetails edit />
                    </>
                  }
                />
              </Route>
              <Route
                path="simulate"
                element={
                  <>
                    <Search isAdminMode />
                  </>
                }
              />
              <Route
                path="groups-simulate"
                element={
                  <>
                    <Search isAdminMode forGroups />
                  </>
                }
              />
            </Route>
          </Route>
          <Route
            element={
              <LoggedRedirect>
                <PlainLayout className="p-0">
                  <Outlet />
                </PlainLayout>
              </LoggedRedirect>
            }
          >
            <Route path="/admin/login" element={<Login isAdminMode />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login isRegisterMode />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/reset-password" element={<ResetPasswordForm />} />
          </Route>
          <Route
            path="/"
            element={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }
          >
            <Route path="" element={<Home />} />
            <Route path="rooms" element={<Outlet />}>
              <Route path="" element={<Rooms />} />
              <Route path=":id" element={<RoomDetails />} />
            </Route>
            <Route
              path="/search"
              element={
                <>
                  <Search />
                  <ReservationSection />
                </>
              }
            />
          </Route>
          <Route
            path="/my-reservations"
            element={
              <ProtectedRoute>
                <ClientLayout>
                  <Outlet />
                </ClientLayout>
              </ProtectedRoute>
            }
          >
            <Route path="" element={<MyReservations title="Mis Reservas" />} />
            <Route path="reservation/:id" element={<ReservationDetails edit />} />
          </Route>
        </Routes>
      </div>
    </GlobalProviders>
  );
}

export default App;
