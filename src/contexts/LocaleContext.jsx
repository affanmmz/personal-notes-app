import React from 'react';

const LocaleContext = React.createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'id');

  React.useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => {
    setLocale(locale === 'id' ? 'en' : 'id');
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleContext;