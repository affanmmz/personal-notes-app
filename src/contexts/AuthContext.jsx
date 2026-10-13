import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserLogged, putAccessToken } from '../utils/network-data';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);


  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  async function loginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function logout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  return (
    <AuthContext.Provider value={{ authedUser, initializing, loginSuccess, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth harus dipakai di dalam AuthProvider');
  }
  return context;
}