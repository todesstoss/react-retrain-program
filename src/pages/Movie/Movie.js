import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import TDMPoster from '../../components/TDMPoster';

function Movie() {
  const { id } = useParams();
  const { data, loading } = useFetch(`movie/${id}`);

  if (loading) {
    return 'loading...';
  }

  const { title, poster_path, tagline } = data;

  return (
    <>
      <h1>{title}</h1>
      <figure>
        <TDMPoster size={1} src={poster_path} alt={title + ' poster'} />
        <figcaption>{tagline}</figcaption>
      </figure>
    </>
  );
}

export default Movie;
