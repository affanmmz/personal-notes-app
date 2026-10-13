import React from 'react';
import { Link } from 'react-router-dom';
import InputLogin from '../components/InputLogin';
import { login } from '../utils/network-data';
import { useAuth } from '../contexts/AuthContext';

function LoginPage() {
  const { loginSuccess } = useAuth();

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>Silakan masuk</h2>
      <InputLogin login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini</Link>
      </p>
    </section>
  );
}

export default LoginPage;