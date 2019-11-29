import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import { fetchMovies, fetchMoviesWithSagas } from '../../actions';
// import { useFetch } from '../../hooks';
import MoviesList from '../../components/MoviesList';

function Home({ fetchMovies, fetchMoviesWithSagas, movies }) {
  const { search } = useLocation();
  const { page = '1' } = queryString.parse(search);

  // Context approach
  // const { data, loading } = useFetch(`movie/popular?page=${page}`);

  // Thunk approach
  // useEffect(() => {
  //   fetchMovies({ url: `movie/popular?page=${page}` });
  // }, [page, fetchMovies]);

  // Sagas approach
  useEffect(() => {
    fetchMoviesWithSagas({ url: `movie/popular?page=${page}` });
  }, [page, fetchMoviesWithSagas]);

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

const mapDispatchToProps = { fetchMovies, fetchMoviesWithSagas };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
