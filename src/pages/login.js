import { useContext, useState } from 'react';
import { UserContext } from '../global/user/user';

export default function Login() {
  const [loginForm, setLoginForm] = useState({ login: '', password: '' });

  const handleEvent = (event) => {
    const { type } = event;
    const { id, value } = event.target;
    setLoginForm((currentState) => ({
      ...currentState,
      [id]: type === 'blur' ? value.trim() : value,
    }));
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    console.log('login', loginForm);
  };

  return (
    <div>
      <form>
        <input type="text" id="login" onChange={handleEvent} onBlur={handleEvent} value={loginForm.login} />
        <input type="password" id="password" onChange={handleEvent} onBlur={handleEvent} value={loginForm.password} />
        <button type="button" onClick={handleLoginClick}>
          login
        </button>
      </form>
    </div>
  );
}
