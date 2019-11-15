import React, { useEffect, useState } from 'react';
import HomeContext from './HomeContext';
import Posts from '../../components/Posts';

function Home() {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();

      setState({
        data,
        loading: false,
      });
    }
    getData();
  }, []);

  return state.loading ? (
    'Loading...'
  ) : (
    <HomeContext.Provider value={state.data}>
      <Posts />
    </HomeContext.Provider>
  );
}

export default Home;
