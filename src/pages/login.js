import { useContext, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';

import { useHistory } from 'react-router-dom';
import { UserContext } from '../global/user/user';
import signIn from '../graphQl/mutations/signIn';
import authKeys from '../constants/authKeys';
import routes from '../constants/routes';

export default function Login() {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const { user, isLoading, setUser } = useContext(UserContext);

  const handleEvent = (event) => {
    const { type } = event;
    const { id, value } = event.target;
    setLoginForm((currentState) => ({
      ...currentState,
      [id]: type === 'blur' ? value.trim() : value,
    }));
  };

  const history = useHistory();
  useEffect(() => {
    if (user && !isLoading) {
      history.push(routes.HOME);
    }
  }, [user, isLoading]);

  const client = useApolloClient();
  const handleLoginClick = async (event) => {
    event.preventDefault();
    const data = await signIn(client, loginForm);

    setUser((cState) => ({ ...cState, user: data.me }));

    localStorage.setItem(authKeys.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(authKeys.REFRESH_TOKEN, data.refreshToken);
  };

  return (
    <div>
      <form>
        <input type="text" id="email" onChange={handleEvent} onBlur={handleEvent} value={loginForm.email} />
        <input type="password" id="password" onChange={handleEvent} onBlur={handleEvent} value={loginForm.password} />
        <button type="button" onClick={handleLoginClick}>
          login
        </button>
      </form>
    </div>
  );
}
