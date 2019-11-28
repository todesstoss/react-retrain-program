import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';

import { increment, decrement, reset } from '../../actions';
import { useFetch } from '../../hooks';
import MoviesList from '../../components/MoviesList';

function Home(props) {
  const { search } = useLocation();
  const { page = '1' } = queryString.parse(search);
  const { data, loading } = useFetch(`movie/popular?page=${page}`);

  const hello = useSelector((state) => state.count);

  return loading ? (
    'Loading...'
  ) : (
    <>
      <button onClick={props.increment}>increment</button>
      {props.count} | {hello}
      <button onClick={props.decrement}>decrement</button>
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

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement, reset }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
