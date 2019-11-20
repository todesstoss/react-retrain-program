import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';

import { useFetch } from '../../hooks';
import MoviesList from '../../components/MoviesList';

function Home() {
  const { search } = useLocation();
  const { page = '1' } = queryString.parse(search);
  const { data, loading } = useFetch(`movie/popular?page=${page}`);

  return loading ? (
    'Loading...'
  ) : (
    <>
      <MoviesList data={data} />
      <ul>
        {page !== '1' && (
          <li>
            <Link to={`/?page=${Number(page) - 1}`}>Prev page</Link>
          </li>
        )}
        <li>
          <Link to={`/?page=${Number(page) + 1}`}>Next page</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
