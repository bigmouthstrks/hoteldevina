import { Routes, Route, Outlet } from 'react-router-dom';
import { AdminOptions, ProtectedAdminRoute } from '@admin/components';
import { LoggedRedirect, ProtectedRoute } from '@auth/components';
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
import { RoomDetails } from '@rooms/pages/RoomDetails/RoomDetails';

function App() {
  /* TODO: admin alias url validation
  const { origin } = window.location;
  const adminUrl = import.meta.env.VITE_ADMIN_URL;
  const isAdminRoute = adminUrl === origin;*/
  const isAdminRoute = true;
  return (
    <GlobalProviders>
      <div className="App">
        <Tools />
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
                      <MyReservations
                        title="Check-Out"
                        filter={StatusType.IN_PROGRESS}
                        isAdminMode
                      />
                    }
                  />
                  <Route
                    path="reservation/:id"
                    element={<ReservationDetails checkingReservations />}
                  />
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
                    path="create"
                    element={
                      <>
                        <AvailabilityForm isAdminMode />
                      </>
                    }
                  />
                  <Route path="update">
                    <Route
                      path=""
                      element={
                        <>
                          <MyReservations
                            title="Actualizar Reservas"
                            isAdminMode
                            filter={StatusType.IN_PROGRESS}
                          />
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
                </Route>
              </Route>
            </>
          )}
          <Route
            element={
              <LoggedRedirect>
                <PlainLayout className="p-0">
                  <Outlet />
                </PlainLayout>
              </LoggedRedirect>
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
            {/*<Route path="/reservation-form" element={<Reservation />} /> */}
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
            element={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            {/*<Route path="/reservation-form" element={<Reservation />} /> */}
            <Route path="/search" element={<Route path="/rooms" element={<Rooms />} />} />
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
            <Route path="reservation/:id" element={<ReservationDetails />} />
          </Route>
        </Routes>
      </div>
    </GlobalProviders>
  );
}

export default App;
