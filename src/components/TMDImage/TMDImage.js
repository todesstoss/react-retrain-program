import React from 'react';
import { useTMDContext } from '../../context/TMDConfigurationContext';

function TMDImage({ src, ...restProps }) {
  const {
    images: { base_url },
  } = useTMDContext();

  return (
    <>
      {/* disable alt attribute check, as we destruct it from restProps */}
      {/* eslint-disable-next-line */}
      <img src={base_url + '/' + src} {...restProps} />
    </>
  );
}

export default TMDImage;
