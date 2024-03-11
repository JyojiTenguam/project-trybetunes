import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

function Login() {
  const [login, setLogin] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit() {
    setLoading(true);
    await createUser({ name: login });
    await setLoading(false);
    navigate('/search');
  }

  return (
    <div>

      {!loading ? (
        <>
          <label>
            Login
            <input
              data-testid="login-name-input"
              type="text"
              placeholder="Login"
              onChange={ (event) => setLogin(event.target.value) }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ login.length < 3 }
            onClick={ handleSubmit }
          >
            Entrar
          </button>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Login;
