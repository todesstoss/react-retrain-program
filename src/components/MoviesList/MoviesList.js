import React from 'react';
import { Link } from 'react-router-dom';

function MoviesList({ data }) {
  console.log(data);

  return (
    <ul>
      {data.results.map(({ id }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>See movie id {id}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
