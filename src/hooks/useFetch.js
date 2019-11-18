import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import appConfig from '../appConfig.json';

function useFetch(url) {
  const [state, setState] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `${BASE_URL}${url}?api_key=${appConfig.API_KEY}`
      );
      const data = await response.json();

      setState({
        data,
        loading: false,
      });
    }
    getData();
  }, [url]);

  return { ...state };
}

export default useFetch;
