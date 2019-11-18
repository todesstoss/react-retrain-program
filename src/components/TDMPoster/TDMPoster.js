import React from 'react';
import TDMImage from '../TMDImage';
import { useTMDContext } from '../../context/TDBconfigurationContext';

function TDMPoster({ size, src, ...restProps }) {
  const {
    images: { poster_sizes },
  } = useTMDContext();

  return <TDMImage src={poster_sizes[size] + src} />;
}

export default TDMPoster;
