import React from 'react';
import classNames from 'classnames/bind';
import style from './Trinity.scss';

const cx = classNames.bind(style)

const Trinity = () => {
  return (
    <section className={cx('trinity')}>
      <p className={cx('trinity__title')}>언택트 시대 <br />튜터링으로 영어 해결!</p>
      <div className={cx('list')}>
        <div className={cx('item')}>
          <div className={cx('title', 'speaking')}>SPEAKING</div>
          <p className={cx('')}>24시간 실시간 <br />라이브 1:1 회화</p>
        </div>
        <div className={cx('item', 'writing')}>
          <div className={cx('title')}>SPEAKING</div>
          <p className={cx('')}>24시간 실시간 <br />라이브 1:1 회화</p>
        </div>
        <div className={cx('item', 'listening')}>
          <div className={cx('title')}>SPEAKING</div>
          <p className={cx('')}>24시간 실시간 <br />라이브 1:1 회화</p>
        </div>
      </div>
    </section>
  )
}
export default Trinity;