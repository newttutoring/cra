import React from 'react';
import classNames from 'classnames/bind';
import style from './Btype.scss';

const cx = classNames.bind(style)

const Btype = () => {
  return (
    <>
      <div className={cx('btype')}>
        <div className={cx('title')}>지금 나에게 맞는 <br />수강권을 선택해 보세요!</div>
        <div className={cx("title-wrap", "global")}>
          <div className={cx("imgwrap")}>
            <img src="https://res.tutoring.co.kr/res/images/evt/202106/bird/bird_tutorb01_mo_img.png" alt="" />
          </div>
          <p className={cx('desc')}>입문부터 초급, 중급인 학생에게 추천해요. <br className={cx('pc-layer')} /> 영어 사용국 튜터와 학습할 수 있어요.</p>
        </div>

      <ul className={cx('plan-wrap')}>
        <li className={cx("plan")}>
          <div className={cx("discount_rate")}>65
          <div className={cx("unit")}>%</div>
          </div>
          <div className={cx("badge")} />
          <div className={cx("container")}>
            <div>
              <div className={cx("title")}>
                <span>365올패스</span>
              </div>
              <div className={cx("period")}>주 2회 12+2개월</div>
              <div className={cx("details")}>
                <div className={cx("details__type")}>Global</div>
                <div className={cx("details__time")}>20분</div>
                <div className={cx("details__quantity")}>총 98회</div>
              </div>
            </div>
            <div className={cx("prices_wrap")}>
              <div className={cx("original_price")}>정가 1,372,000원<span /></div>
              <div className={cx("prices")}>
                <div className={cx("prices__price")}>6,5300원</div>
                <div className={cx("prices__per")}>/ 월</div>
              </div>
            </div>
          </div>
          <div className={cx('purchase-button')}>
            <p className={cx('text')}>구매하기</p>
            <div className={cx('arrow')} />
          </div>
        </li>
      </ul>


      <div className={cx("title-wrap", "global")}>
        <div className={cx("imgwrap")}>
          <img src="https://res.tutoring.co.kr/res/images/evt/202106/bird/bird_tutorb02_mo_img.png" alt="" />
        </div>
        <p className={cx('desc')}>중급이상의 학생에게 추천드려요. <br className={cx('pc-layer')} /> 영어가 모국어인 원어민 튜터와 학습해요.</p>
      </div>
      </div>
    </>
  )
}
export default Btype;