import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { privateRoutes, publicRoutes, RoutesWithNotFound } from './router'
import { AuthGuard } from './guards'
import store from './redux/store'
import { Suspense, lazy } from 'react'

const Login = lazy(() => import('./pages/login/Login'))
const Private = lazy(() => import('./pages/private/Private'))

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<p>Cargando...</p>}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={privateRoutes.PRIVATE} />}
              />
              <Route path={publicRoutes.LOGIN} element={<Login />} />

              <Route element={<AuthGuard />}>
                <Route
                  path={`${privateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </>
  )
}
