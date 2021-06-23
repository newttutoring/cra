import React from 'react';
import classNames from 'classnames/bind';
import style from './EarlyBird.scss';

const cx = classNames.bind(style)

const EarlyBird = () => {
  return (
    <section className={cx('early-bird')}>
      <p>남은 반년, <br className={cx('tamo-layer')}/>아직 늦지 않았다! <br />하반기 영어 솔루션</p>
      <div className={cx('img')}></div>
      <div className={cx('img1')}></div>
      <div className={cx('img2')}></div>
    </section>
  )
}
export default EarlyBird;