import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function InputRegister({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmit = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <form className="input-register" onSubmit={onSubmit}>
      <label htmlFor="name">Nama</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={onPasswordChange} />

      <button type="submit">Register</button>
    </form>
  );
}

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;