import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";
import { useAuth } from '../contexts/AuthContext';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';

function Header() {
  const { authedUser, logout } = useAuth();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <header>
      <h1>
        <Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/archives">{locale === 'id' ? 'Arsip' : 'Archives'}</NavLink>
          </li>
          <li>
            <button
              type="button"
              className="toggle-locale"
              onClick={toggleLocale}
              title={locale === 'id' ? 'Ganti bahasa' : 'Change language'}
            >
              <MdTranslate />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="toggle-locale"
              onClick={toggleTheme}
              title={locale === 'id' ? 'Ganti tema' : 'Change theme'}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </li>
          <li>
            <button
              type="button"
              className="button-logout"
              onClick={logout}
              title={locale === 'id' ? 'Keluar' : 'Logout'}
            >
              <FiLogOut /> {authedUser.name}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;