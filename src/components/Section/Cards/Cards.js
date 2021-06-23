import React from 'react';
import classNames from 'classnames/bind';
import style from './Cards.scss';

const cx = classNames.bind(style)

const Cards = () => {
  return (
    <div className={cx('cards')}>
      <div className="img">
      </div>
    </div>
  )
}
export default Cards;