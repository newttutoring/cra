import React from 'react';
import classNames from 'classnames/bind';
import style from './Explan.scss';

const cx = classNames.bind(style)

const Explan = () => {
  return (
    <section className={cx('explan')}>
      <div className={cx('img')}></div>
      {/*
        <img src="https://res.tutoring.co.kr/res/images/evt/202105/oh/oh_365_pc01_img.jpg" alt="" />
       */}
    </section>
  )
}
export default Explan;