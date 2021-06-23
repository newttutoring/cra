import React from 'react';
import classNames from 'classnames/bind';
import style from './Sheet.scss';

const cx = classNames.bind(style)

const Sheet = () => {
  return (
    // 애니메이션 타입
    // is-show 넣으면 올라옵니다. 
    <div className={cx('sheet')}>
      <div className="sheet__wrap">
        <div className="info">
          <div className="btn"></div>
          <strong className={cx('option')}>수강권 선택 옵션</strong>
          <div className="change-btn"><span className={cx('text')}>변경</span></div>
          <div className={cx('textwrap')}>
            <span className={cx('discount')}>추천</span>
            <span className={cx('name')}>365 올패스 Global 12+2개월</span>
          </div>
          <p><strong>20분 / 주2회</strong> <span className={cx('all')}>총98회</span></p>
        </div>
        
        <div className="price-wrap">
          <strong>할인 적용 가격</strong>
          <span className={cx('price-area')}>
            <span className={cx('price')}>42,500원</span>/월
          </span>
        </div>
      </div>
      <div className="dim"></div>
    </div>
  )
}
export default Sheet;