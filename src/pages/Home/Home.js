import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import { fetchMovies } from '../../actions';
// import { useFetch } from '../../hooks';
import MoviesList from '../../components/MoviesList';

function Home({ fetchMovies, movies }) {
  const { search } = useLocation();
  const { page = '1' } = queryString.parse(search);

  // const { data, loading } = useFetch(`movie/popular?page=${page}`);

  useEffect(() => {
    fetchMovies({ url: `movie/popular?page=${page}` });
  }, [page, fetchMovies]);

  return movies.loading ? (
    'Loading...'
  ) : (
    <>
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
      <MoviesList data={movies} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = { fetchMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
