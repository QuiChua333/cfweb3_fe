import React from 'react';
import classNames from 'classnames/bind';
import style from './card.module.scss';

const cx = classNames.bind(style);

const Card = () => {
  const a = 5;
  return (
    <div className={cx('wrapper')}>
      <h1>My component</h1>
      {a}
    </div>
  );
};

export default Card;
