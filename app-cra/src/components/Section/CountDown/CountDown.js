import React from 'react';
import classNames from 'classnames/bind';
import style from './CountDown.scss';

const cx = classNames.bind(style)

const CountDown = () => {
  return (
    // 오늘 마감일경우 is-date-end 클래스 추가
    <section className={cx('count-down')}>
      <div className={cx('title-img')}></div>
      <div className={cx('day')}>
        <span className={cx('d-img')}></span>
        <span className={cx('count-down__number')}>
          <span>1</span>
        </span>
        <span className={cx('count-down__number')}>
          <span>4</span>
        </span>
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