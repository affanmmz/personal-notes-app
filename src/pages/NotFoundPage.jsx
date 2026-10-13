import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage({ message = 'halaman tidak ditemukan' }) {
    return (
        <section className='notes-list-empty' style={{ textAlign: 'center' }}>
        <h2>404</h2>
        <p>{message}</p>
        <p><Link to="/">Kembali ke beranda</Link></p>    
        </section>
    );
}

export default NotFoundPage;