import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/states/userSlice';
import { getMortyCharacter } from '../../services';

export default function Login() {
  const dispatch = useDispatch();

  const callMortyCharacter = async () => {
    const results = await getMortyCharacter();
    dispatch(createUser(results));
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={callMortyCharacter}>Login</button>
    </div>
  );
}
