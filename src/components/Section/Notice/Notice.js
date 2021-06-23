import React from 'react';
import classNames from 'classnames/bind';
import style from './Notice.scss';

const cx = classNames.bind(style);

const Notice = () => {
  return (
    <>
      <section className={cx("focus-certificate")}>
        <div className={cx("promotion-certificate")}>
          <h2 className={cx("heading")}>수강증 상시 발급 가능</h2>
          <p className={cx("description")}>수강증, 출석확인증, 영수증 상시 발급 가능</p>
          <div className={cx("certificate__tip")}> 직장인들을 위한 SPEC UP!<br />사내 교육지원비로 알뜰하게! </div>
          <button type="button" className={cx("button", "modal__certificate__open")}>증빙서류 샘플 상세보기</button>
        </div>

        <div className={cx("promotion-guide")}>
          <h2 className={cx("heading")}>증빙 서류 발급 안내</h2>
          <ul className={cx("guide__list")}>
            <li className={cx("list__item")}>수강증, 출석 확인증, 영수증은 튜터링 앱 메인 화면 우측 하단 [마이튜터링] &gt; [고객센터] &gt; [증빙 서류 발급 메뉴]에서 신청 가능합니다.
            </li>
            <li className={cx("list__item")}>정해진 학습 기간 내에 수업을 진행해야만 출석으로 인정합니다.</li>
            <li className={cx("list__item")}>증빙서류의 경우 내용(수강권명, 금액)등은 임의 수정이 불가합니다.</li>
            <li className={cx("list__item")}>발급 신청 시 입력한 이메일 주소로 자동 발급됩니다.(기타 문의사항은 [고객센터 &gt; 1:1 채팅 문의]로 연락 주시기 바랍니다.)</li>
          </ul>
        </div>
      </section>

      <section className={cx("promotion-notice")}>
        <div className={cx("notice__item")}>
          <h2 className={cx("heading")}>
            <button type="button" className={cx("heading__button")}>튜터링 영어 유의사항 안내</button>
          </h2>
          <div className={cx("inner")}>
            <h3 className={cx("notice__title")}>수강권 사용 안내</h3>
            <ul className={cx("notice__list")}>
              <li className={cx("list__item")}>24시간 자유롭게 이용 가능하며, 수업 중 남은 시간(분)은 당일 자정까지 사용할 수 있습니다.</li>
              <li className={cx("list__item")}>LTE 또는 개인 WIFI를 통한 이용을 권장합니다. 공용 WIFI 에서는 끊김이 발생할 수 있습니다.</li>
              <li className={cx("list__item")}>해당 이벤트 수강권은 쿠폰 사용이 불가합니다.</li>
              <li className={cx("list__item")}>1:1 첨삭 티켓은 베타 버전으로 무료 제공됩니다. (영문 500자 기준 첨삭권 1회 소진)</li>
              <li className={cx("list__item")}>매월 최소 수업 횟수가 정해져 있습니다.<br />→ ex) 12개월 96회 수강권 - 매월 최소 수업 8회</li>
              <li className={cx("list__item")}>당월 미사용분은 자동으로 이월되어 익월 수강 종료일까지 모두 사용 가능합니다.(단 이월된 월별 미사용 수강권은 환불이 불가합니다.)</li>
            </ul>
            <h3 className={cx("notice__title")}>수강권 환불 정책</h3>
            <ul className={cx("notice__list")}>
              <li className={cx("list__item")}>수강권 환불시에는 실 결제 금액에서 수업한 수강 횟수의 정가 금액을 차감하고 환불됩니다. (1회 수업당 정가 기준 차감) </li>
              <li className={cx("list__item")}>베타 기간 동안 제공되는 [AI 튜터] 및 [첨삭 수강권]의 사용분은 환불 시 영향을 미치지 않습니다. </li>
              <li className={cx("list__item")}>서비스이용약관 및 개인정보취급방침에 따라 환불절차를 진행하고 있습니다.<br />→ 이용 약관 4.7(신) 19~22조 내용 참고</li>
            </ul>
            <h3 className={cx("notice__title")}>수강권 외 환불 정책(네이버 클로바 프렌즈 스피커)</h3>
            <ul className={cx("notice__list")}>
              <li className={cx("list__item")}>Galaxy Buds Pro는 포장을 개봉한 경우 환불 및 교환이 불가합니다. <br />→ 포장 개봉 후 수강권 환불 시, 상품의 정가
        (239,800원)을 제외한 금액이 환불됩니다.</li>
              <li className={cx("list__item")}>제품의 반품 및 교환은 제품 수령일로부터 7일이내로 가능합니다. </li>
              <li className={cx("list__item")}>단, 제품에 문제가 발생했을 경우 제품 수령일로부터 최대 3개월 이내에 교환/반품이 가능합니다.</li>
              <li className={cx("list__item")}>제품 자체에 하자가 있을 경우, 삼성전자 서비스센터(1588-3366)로 접수하시면 A/S기사의 판정을 거친 후 소비자 분쟁 해결 기준에 의거하여
        교환/환불/수리해드립니다.</li>
              <li className={cx("list__item")}>단순 변심으로 인해 반품을 진행하시는 경우 반품 회수(배송) 비용은 고객님께서 부담하셔야 합니다.(수강권 최종 결제 금액에서 배송 비용이 차감됩니다.)
      </li>
              <li className={cx("list__item")}>단, 제품의 불량 및 하자로 인한 반품 회수(배송) 비용은 무료입니다.</li>
              <li className={cx("list__item")}>제품 정보 및 안내 미숙지로 인한 손해는 튜터링 측에서 책임지지 않습니다.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
export default Notice;