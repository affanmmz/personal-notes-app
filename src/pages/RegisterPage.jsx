import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputRegister from '../components/InputRegister';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegister({ name, email, password }) {
    const { error } = await register({ name, email, password });

    if (!error) {
      navigate('/'); 
    }
  }

  return (
    <section className="register-page">
      <h2>Buat akun baru</h2>
      <InputRegister register={onRegister} />
      <p>
        Sudah punya akun? <Link to="/">Masuk di sini</Link>
      </p>
    </section>
  );
}

export default RegisterPage;