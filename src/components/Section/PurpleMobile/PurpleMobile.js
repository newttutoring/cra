import React from 'react';
import classNames from 'classnames/bind';
import style from './PurpleMobile.scss';

const cx = classNames.bind(style)

const PurpleMobile = () => {
  return (
    <div className={cx('purple-mobile')}>
      <div className={cx('img')}>
        <p>일상 속 <br />완벽한 영어 환경</p>
      </div>
    </div>
  )
}
export default PurpleMobile;