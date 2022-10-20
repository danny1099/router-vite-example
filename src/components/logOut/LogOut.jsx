import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetUser } from '../../redux/states/userSlice'
import { publicRoutes } from '../../router'

export default function LogOut() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logOut = () => {
    localStorage.removeItem('user')

    /* Limpia el estado global con el reset */
    dispatch(resetUser())

    /* navega a la ruta de inicio/login */
    navigate(`/${publicRoutes.LOGIN}`, { replace: true })
  }

  return <button onClick={logOut}>Log Out</button>
}
