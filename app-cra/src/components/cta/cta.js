import React from 'react';
import classNames from 'classnames/bind';
import style from './cta.scss';
import Sheet from '../Sheet/Sheet';

const cx = classNames.bind(style)

const Cta = () => {
  return (
    // 기본은 종료임박 뱃지 있는 타입 
    // is-simple : 뱃지 없고, 검은 배경에 보라색 버튼
    // is-info : 뱃지 없고, 가격/월, 선택옵션이 포함된 레이아웃
    // 2106 프로모션에서 모바일에서는 is-simple 클래스를 사용해주세요. 
    <div className={cx("challenge-cta", "is-simple")}>
      <div className={cx('challenge-cta__wrap')}>
        <div className={cx("wrapper")}>
          <span className={cx("cta__badge")}>한정수량</span>

          <div className="textwrap">
            <h2 className={cx("heading")}>잔여수량</h2>
            <div className={cx("cta__count")}>
              <span className={cx("number")}>0</span>
              <span className={cx("number")}>1</span>
              <span className={cx("number")}>2</span>
              <span className={cx("unit")}>개</span>
            </div>
          </div>
          <div className="btnwrap">
            <div className="price">40,000원/<span className={cx('')}>월</span></div>
            <button type="button" className={cx("cta__button")} >구매하기</button>
          </div>
        </div>
      </div>
      <Sheet/>
    </div>
  )
}
export default Cta;