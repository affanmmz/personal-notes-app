import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import NotesView from '../components/NotesView';
import LocaleContext from '../contexts/LocaleContext';
import useFetchNotes from '../hooks/useFetchNotes';
import { getActiveNotes } from '../utils/network-data';

function HomePage() {
  const { locale } = React.useContext(LocaleContext);
  const [notes, loading] = useFetchNotes(getActiveNotes);

  if (loading) {
    return <p>{locale === 'id' ? 'Memuat ....' : 'Loading ....'}</p>;
  }

  return (
    <>
      <NotesView
        title={locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}
        notes={notes}
        emptyMessage={locale === 'id' ? 'Tidak ada catatan' : 'No notes'}
      />
      <div className="homepage__action">
        <Link
          to="/notes/new"
          className="action"
          title={locale === 'id' ? 'Tambah catatan' : 'Add note'}
        >
          <FiPlus />
        </Link>
      </div>
    </>
  );
}

export default HomePage;