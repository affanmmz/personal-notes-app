import React from 'react';

function useFetchNotes(fetchFunction) {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchFunction().then(({ data }) => {
      setNotes(data || []);
      setLoading(false);
    });
  }, [fetchFunction]);

  return [notes, loading];
}

export default useFetchNotes;