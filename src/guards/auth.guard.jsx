/* eslint-disable */
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { publicRoutes } from '../router'

const AuthGuard = () => {
  const userState = useSelector((state) => state.user)

  console.log(userState);

  return userState.name 
    ? <Outlet />
    : <Navigate replace to={publicRoutes.LOGIN} />
}

export default AuthGuard