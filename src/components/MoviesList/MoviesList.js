import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import TMDPoster from '../TMDPoster';

import styles from './MoviesList.module.scss';

const cx = classNames.bind(styles);

function MoviesList({ data }) {
  console.log(data);

  return (
    <ul className={cx('root', 'pure-g')}>
      {data.results.map(({ id, poster_path, title }) => (
        <li className={cx('item', 'pure-u-1-5')} key={id}>
          <Link to={`movies/${id}`}>
            <TMDPoster
              size={3}
              src={poster_path}
              alt={title + ' poster'}
              className="pure-img"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
