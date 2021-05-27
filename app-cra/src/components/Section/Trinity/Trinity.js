import React from 'react';
import classNames from 'classnames/bind';
import style from './Trinity.scss';

const cx = classNames.bind(style)

const Trinity = () => {
  return (
    <section className={cx('happy-allpass')}>
      <h2 className={cx("happy-allpass__title")}>언택트 시대 <br />튜터링으로 영어 해결!</h2>
      <ul className={cx("diagram")}>
        <li className={cx("diagram__item", "diagram__item--speaking")}>
          <strong className={cx("diagram__point")}>Speaking</strong>
        24시간 실시간 <br />라이브 1:1 회화
      </li>
        <li className={cx("diagram__item", "diagram__item--writing")}>
          <strong className={cx("diagram__point")}>Writing</strong>
        실시간 <br />영작 첨삭
      </li>
        <li className={cx("diagram__item", "diagram__item--listening")}>
          <strong className={cx("diagram__point")}>LISTENING</strong>
        24시간 무제한 <br />AI 튜터와 예습
      </li>
      </ul>
      <p className={cx("happy-allpass__desc")}>원어민 회화<i className={cx("plus")}>+</i>AI 학습<i className={cx("plus")}>+</i>첨삭</p>
    </section>
  )
}
export default Trinity;