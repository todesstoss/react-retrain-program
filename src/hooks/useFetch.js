import { useEffect, useState } from 'react';
import { api } from '../services';

function useFetch(url) {
  const [state, setState] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    api.get(url).then((data) => {
      setState({ data, loading: false });
    });
  }, [url]);

  return { ...state };
}

export default useFetch;
