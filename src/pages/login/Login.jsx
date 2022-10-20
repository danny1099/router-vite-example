import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../redux/states/userSlice'
import { privateRoutes } from '../../router'
import { getMortyCharacter } from '../../services'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const callMortyCharacter = async () => {
    const results = await getMortyCharacter()

    /* Guarda el resultado de la llamada en el store */
    dispatch(createUser(results))

    /* Navega a la ruta privada cuando exista resultado de la llamada */
    navigate(`/${privateRoutes.PRIVATE}`, { replace: true })
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={callMortyCharacter}>Login</button>
    </div>
  )
}
