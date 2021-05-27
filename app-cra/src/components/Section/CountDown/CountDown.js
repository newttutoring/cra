import React from 'react';
import classNames from 'classnames/bind';
import style from './CountDown.scss';

const cx = classNames.bind(style)

const CountDown = () => {
  return (
    <section className={cx('count-down')}>
      <div className={cx('title-img')}></div>
      <div className={cx('day')}>
        <span className={cx('d-img')}></span>
        <span className={cx('count-down__number')}>1</span>
        <span className={cx('count-down__number')}>4</span>
      </div>
      <div className={cx('timer')}>
        <span className={cx('count-down__number')}>2</span>
        <span className={cx('count-down__number')}>3</span>
        <span className={cx('dot')}></span>
        <span className={cx('count-down__number')}>5</span>
        <span className={cx('count-down__number')}>9</span>
        <span className={cx('dot')}></span>
        <span className={cx('count-down__number')}>5</span>
        <span className={cx('count-down__number')}>9</span>
      </div>
    </section>
  )
}
export default CountDown;