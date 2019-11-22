import React from 'react';
import TDMImage from '../TMDImage';
import { useTMDContext } from '../../context/TMDConfigurationContext';

function TMDPoster({ size, src, ...restProps }) {
  const {
    images: { poster_sizes },
  } = useTMDContext();

  return <TDMImage src={poster_sizes[size] + src} {...restProps} />;
}

export default TMDPoster;
