import { useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { signUp } from '../graphQl/mutations/signUp';

export default function Registration() {
  const [registrationForm, setRegistrationForm] = useState({ email: '', password: '', firstName: '', lastName: '' });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setRegistrationForm((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  };

  const handleBlur = (event) => {
    const { id, value } = event.target;
    setRegistrationForm((currentState) => ({
      ...currentState,
      [id]: value.trim(),
    }));
  };

  const client = useApolloClient();

  const handleLoginClick = async (event) => {
    event.preventDefault();
    await signUp(client, registrationForm);
  };

  return (
    <div>
      <form>
        <input type="text" id="email" onChange={handleChange} onBlur={handleBlur} value={registrationForm.email} />
        <input
          type="password"
          id="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={registrationForm.password}
        />
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={registrationForm.firstName}
        />
        <input
          type="text"
          id="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={registrationForm.lastName}
        />
        <button onClick={handleLoginClick} type="button">
          register
        </button>
      </form>
    </div>
  );
}
