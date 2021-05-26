import React from 'react';
import classNames from 'classnames/bind';
import style from './Pride.scss';

const cx = classNames.bind(style)

const Pride = () => {
  return (
    <div className={cx('Pride')}> 
      <p className={cx('title')}>
        <strong>3년 연속 1위</strong>
        소비자가 직접 뽑은 1:1 영어회화 부문
      </p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
export default Pride;