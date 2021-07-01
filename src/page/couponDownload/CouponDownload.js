import React from "react";
import classNames from "classnames/bind";
import style from "./coupon_download.scss";

const cx = classNames.bind(style);

const CouponDownload = () => {
  return (
    <div className={cx("coupon-download-page")}>
      {/* 색종이 조각(confetti) 부분은 컴포넌트로 추천합니다. */}
      <div className="confetti-wrap">
        <div className="confetti">
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
          <div className="confetti-piece" />
        </div>
      </div>
      
      <div className="content-wrap">
        <div className="page-title">
          쿠폰 <br />
          받아가세요!
        </div>
        <p className="desc">
          회원님을 위해 튜터링이 준비했어요! <br />
          다운로드하여 할인 혜택을 누려보세요!
        </p>

        {/* 
        쿠폰 선택 컴포넌트
        defaultProps는 basic : 이벤트 쿠폰
        props가 month 일경우 : 이달의 쿠폰
        props로 넘길때 classname에 props넣으면되요. 
      */}
        <div className="coupon-area">
          <div className={cx("coupon-wrap", "month")}>
            <div className="title">이달의 쿠폰</div>
            <ul>
              {/* 다운로드가 된 쿠폰ㅇ일 경우 is-download */}
              <li className={cx("is-download")}>
                <div className="textwrap">
                  <span>5,000</span> <p>10만원 이상 결제 시 사용 가능</p>
                </div>
                <div className="imgwrap" />
              </li>
              <li>
                <div className="textwrap">
                  <span>5,000</span> <p>10만원 이상 결제 시 사용 가능</p>
                </div>
                <div className="imgwrap" />
              </li>
            </ul>
            <button>쿠폰 사용하러 가기</button>
          </div>

          <div className={cx("coupon-wrap", "event")}>
            <div className="title">이벤트 쿠폰</div>
            <ul>
              <li>
                <div className="textwrap">
                  <span>5,000</span> <p>10만원 이상 결제 시 사용 가능</p>
                </div>
                <div className="imgwrap" />
              </li>
              <li>
                <div className="textwrap">
                  <span>5,000</span> <p>10만원 이상 결제 시 사용 가능</p>
                </div>
                <div className="imgwrap" />
              </li>
            </ul>
            <button>쿠폰 사용하러 가기</button>
          </div>
        </div>
      </div>
      <div className={cx("notice")}>
        <div className="notice__title">쿠폰 사용 안내</div>
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
