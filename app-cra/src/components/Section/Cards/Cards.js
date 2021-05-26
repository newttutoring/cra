import React from 'react';
import classNames from 'classnames/bind';
import style from './Cards.scss';

const cx = classNames.bind(style)

const Cards = () => {
  return (
    <div className={cx('')}>
      <img src="https://res.tutoring.co.kr/res/images/evt/202105/oh/oh_365_pc02-1_img.jpg" alt="" />
    </div>
  )
}
export default Cards;