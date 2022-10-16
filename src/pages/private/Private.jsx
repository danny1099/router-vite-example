import { lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { privateRoutes, RoutesWithNotFound } from '../../router'

const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Home = lazy(() => import('./Home/Home'))

export default function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={privateRoutes.DASHBOARD} />} />
      <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={privateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
  )
}
