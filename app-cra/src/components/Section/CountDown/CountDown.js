import React from 'react';
import classNames from 'classnames/bind';
import style from './CountDown.scss';

const cx = classNames.bind(style)

const CountDown = () => {
  return (
    <section className={cx('count-down')}>
      <div className={cx('title-img')}></div>
      <div className={cx('day')}>
        <div className={cx('d-img')}></div>
        <span className={cx('')}>1</span>
        <span className={cx('')}>4</span>
      </div>
      <div className={cx('timer')}>
        <span className={cx('')}>2</span>
        <span className={cx('')}>3</span>
        :
        <span className={cx('')}>5</span>
        <span className={cx('')}>9</span>
        :
        <span className={cx('')}>5</span>
        <span className={cx('')}>9</span>
      </div>
    </section>
  )
}
export default CountDown;