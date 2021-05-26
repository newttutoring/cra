import React from 'react';
import classNames from 'classnames/bind';
import style from './Btype.scss';

const cx = classNames.bind(style)

const Btype = () => {
  return (
    <div className={cx('btype')}>
      <div className={cx("title-wrap", "global")}>
        <div className={cx("imgwrap")}>
          <img src="https://res.tutoring.co.kr/res/images/evt/202106/bird/bird_tutorb01_mo_img.png" alt="" />
        </div>
        <p>입문부터 초급, 중급인 학생에게 추천해요. <br className={cx('pc-layer')} /> 영어 사용국 튜터와 학습할 수 있어요.</p>
      </div>
      <ul>
        <li>
          <span>365올패스</span>
          <span className={cx('tag')}>65%</span>
          <div className={cx('textwrap')}>
            <strong>주 2회 12+2개월</strong>
            <p>
              <span>Global</span>
              <span>20분</span>
              <span>총 98회</span>
            </p>
          </div>
          <div className={cx('price')}>
            <span>정가 1,372,000원</span>
            <strong>40,000원/월</strong>
          </div>
          <button>구매하기</button>
        </li>
      </ul>
      <div className={cx("title-wrap", "native")}>
        <div className={cx("imgwrap")}>
          <img src="https://res.tutoring.co.kr/res/images/evt/202106/bird/bird_tutorb02_mo_img.png" alt="" />
        </div>
        <p>중급 이상의 학생에세 추천드려요. <br className={cx('')} /> 영어가 모국어인 원어민 튜터와 학습해요.</p>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}
export default Btype;