import { useEffect, useState, useMemo } from 'react';
import { BASE_URL } from '../constants';
import appConfig from '../appConfig.json';

function useFetch(url) {
  const [state, setState] = useState({
    loading: true,
    data: null,
  });

  const urlObj = useMemo(() => {
    const urlObj = new URL(`${BASE_URL}${url}`);
    urlObj.searchParams.set('api_key', appConfig.API_KEY);
    return urlObj;
  }, [url]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(urlObj);
      const data = await response.json();

      setState({
        data,
        loading: false,
      });
    }
    getData();
  }, [urlObj]);

  return { ...state };
}

export default useFetch;
