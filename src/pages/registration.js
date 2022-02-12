import { useContext, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { signUp } from '../graphQl/mutations/signUp';
import { UserContext } from '../global/user/user';
import authKeys from '../constants/authKeys';
import routes from '../constants/routes';

export default function Registration() {
  const [registrationForm, setRegistrationForm] = useState({ email: '', password: '', firstName: '', lastName: '' });

  const handleEvent = (event) => {
    const { type } = event;
    const { id, value } = event.target;
    setRegistrationForm((currentState) => ({
      ...currentState,
      [id]: type === 'blur' ? value.trim() : value,
    }));
  };

  const { user, isLoading, setUser } = useContext(UserContext);

  const client = useApolloClient();

  const history = useHistory();
  useEffect(() => {
    if (user && !isLoading) {
      history.push(routes.HOME);
    }
  }, [user, isLoading]);

  const handleLoginClick = async (event) => {
    event.preventDefault();

    const result = await signUp(client, registrationForm);

    setUser((cState) => ({ ...cState, user: result.me }));

    localStorage.setItem(authKeys.ACCESS_TOKEN, result.accessToken);
    localStorage.setItem(authKeys.REFRESH_TOKEN, result.refreshToken);
  };

  return (
    <div>
      <form>
        <input type="text" id="email" onChange={handleEvent} onBlur={handleEvent} value={registrationForm.email} />
        <input
          type="password"
          id="password"
          onChange={handleEvent}
          onBlur={handleEvent}
          value={registrationForm.password}
        />
        <input
          type="text"
          id="firstName"
          onChange={handleEvent}
          onBlur={handleEvent}
          value={registrationForm.firstName}
        />
        <input
          type="text"
          id="lastName"
          onChange={handleEvent}
          onBlur={handleEvent}
          value={registrationForm.lastName}
        />
        <button onClick={handleLoginClick} type="button">
          register
        </button>
      </form>
    </div>
  );
}
