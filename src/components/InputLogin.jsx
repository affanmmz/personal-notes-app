import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function InputLogin({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form className="input-login" onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={onPasswordChange} />

      <button type="submit">Login</button>
    </form>
  );
}

InputLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

export default InputLogin;