import React from 'react';
import { useFetch } from '../../hooks';

import MoviesList from '../../components/MoviesList';

function Home() {
  const { data, loading } = useFetch('movie/popular');

  return loading ? 'Loading...' : <MoviesList data={data} />;
}

export default Home;
