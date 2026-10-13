import React from "react";
import LocaleContext from '../contexts/LocaleContext';

function SearchBar({ keyword, onKeywordChange }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={locale === 'id' ? 'cari berdasarkan judul' : 'search by title'}
        value={keyword}
        onChange={(event) => onKeywordChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;