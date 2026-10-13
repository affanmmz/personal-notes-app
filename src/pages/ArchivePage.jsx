import React from 'react';
import NotesView from '../components/NotesView';
import LocaleContext from '../contexts/LocaleContext';
import useFetchNotes from '../hooks/useFetchNotes';
import { getArchivedNotes } from '../utils/network-data';

function ArchivePage() {
  const { locale } = React.useContext(LocaleContext);
  const [notes, loading] = useFetchNotes(getArchivedNotes);

  if (loading) {
    return <p>{locale === 'id' ? 'Memuat ....' : 'Loading ....'}</p>;
  }

  return (
    <NotesView
      title={locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}
      notes={notes}
      emptyMessage={locale === 'id' ? 'Arsip kosong' : 'Archive is empty'}
    />
  );
}

export default ArchivePage;