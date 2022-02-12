import { useState } from 'react';

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

  const handleLoginClick = (event) => {
    event.preventDefault();
    console.log('login', registrationForm);
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
          type="password"
          id="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={registrationForm.lastName}
        />
        <button type="button" onClick={handleLoginClick}>
          Register
        </button>
      </form>
    </div>
  );
}
