import React, {useState} from 'react';
import classNames from 'classnames/bind';
import style from './LearnConsultReserveResult.scss';

const cx = classNames.bind(style)

const LearnConsultReserveResult = () => {

  return (
    <div className={cx('LearnConsultReserve-page-result')}>
      <div className={cx("content")}>
        <p>학습 상담 예약이 완료되었습니다. <strong>입력하신 정보를 확인해 주세요!</strong></p>
        <div className={cx('l-table', 'info')}>
          <div className={cx('l-table-row')}>
            <div className={cx('l-table-cell', 'th')}>내 번호</div>
            <div className={cx('l-table-cell')}>010-3563-4596</div>
          </div>
          <div className={cx('l-table-row')}>
            <div className={cx('l-table-cell', 'th')}>상담내용</div>
            <div className={cx('l-table-cell')}>비즈니스 영어</div>
          </div>
        </div>
        <div className="desc"><span>회원님의 카카오알림톡으로 연락드립니다.</span></div>
        <div className="img"></div>
        <button>홈으로</button>
      </div>
    </div>
  )
}
export default LearnConsultReserveResult;