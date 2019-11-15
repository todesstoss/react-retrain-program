import React, { useContext } from 'react';
import { useHomeContext } from '../../pages/Home/HomeContext';

function Posts() {
  const value = useHomeContext();

  console.log(value);

  return <div>Posts</div>;
}

export default Posts;
