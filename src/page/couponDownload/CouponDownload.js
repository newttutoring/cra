import React from "react";
import classNames from "classnames/bind";
import style from "./coupon_download.scss";

const cx = classNames.bind(style);

const CouponDownload = () => {
  return (
    <div className={cx("coupon-download-page")}>
      {/* 색종이 조각(confetti) 부분은 컴포넌트로 추천합니다. */}
      <div className={cx('confetti-wrap')}>
        <div className={cx('confetti')}>
          <div className={cx('confetti-piece')} />
          <div className={cx('confetti-piece')} />
          <div className={cx('confetti-piece')} />
          <div className={cx('confetti-piece')} />
          <div className={cx('confetti-piece')} />
          <div className={cx('confetti-piece')} />
          <div className={cx('confetti-piece')} />
          <div className={cx('confetti-piece')} />
          <div className={cx('confetti-piece')} />
        </div>
      </div>

      <div className={cx('content-wrap')}>
        <div className={cx('page-title')}>
          쿠폰 <br />
          받아가세요!
        </div>
        <p className={cx('desc')}>
          회원님을 위해 튜터링이 준비했어요! <br />
          다운로드하여 할인 혜택을 누려보세요!
        </p>

        {/* 
        쿠폰 선택
      */}
        <div className={cx('coupon-area')}>
          <div className={cx("coupon-wrap", "month")}>
            <div className={cx('title')}>이달의 쿠폰</div>
            <ul>
              <li className={cx("")}>
                <img src="http://6thfinger.com/images/month_5000.png" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
            </ul>
            <button>쿠폰 사용하러 가기</button>
          </div>

          <div className={cx("coupon-wrap", "event")}>
            <div className={cx('title')}>이벤트 쿠폰</div>
            <ul>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
            </ul>
            <button>쿠폰 사용하러 가기</button>
          </div>
        </div>
      </div>
      <div className={cx("notice")}>
        <div className={cx('notice__title')}>쿠폰 사용 안내</div>
        <ul>
          <li>· 해당 쿠폰은 중복 사용이 불가합니다.</li>
          <li>
            · 쿠폰은 다운로드를 하셔야 사용이 가능하며, 다운로드 후 [마이튜터링]
            내에 [나의 쿠폰] 에서 확인이 가능합니다.
          </li>
          <li>
            · 이달의 쿠폰은 해당 월 동안 사용이 가능하며, 기간이 지난 후에 자동
            삭제 처리 됩니다.
          </li>
          <li>· 이벤트 쿠폰의 경우, 특정 이벤트에만 사용이 가능합니다.</li>
          <li>
            · 이벤트 쿠폰은 해당 이벤트 기간에 따라 사용기간이 한정됩니다.{" "}
          </li>
          <li>
            · 이벤트 기간동안 다운로드한 쿠폰을 사용하신 경우, 다시 다운로드가
            가능하며 동일한 이벤트 수강권 구매에 사용할 수 있습니다.
          </li>
          <li>
            · 현재 페이지와 해당 이벤트 페이지에서의 다운로드 되는 이벤트 쿠폰은
            같은 쿠폰입니다.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CouponDownload;
