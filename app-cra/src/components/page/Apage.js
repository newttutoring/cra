import React from 'react';
import classNames from 'classnames/bind';
import style from './Apage.scss';

const cx = classNames.bind(style);

const Apage = () => {
  return (
    <>
      <div className="Apage">
        <div className="slide">
          슬라이드
        </div>
        <div className={cx('atype')}>
        <div className="textarea">
          <div className="textarea__title">
            <div className="title">2021년 하반기 영어 미리 준비! <br />15일간의 얼리버드</div>
            <div className="date">2021. 06 .07 - 2021. 06. 21</div>
          </div>
          <div className="textarea__option">
            <div className="title">365올패스 옵션 선택</div>
            <div className="l-select">
              <span className="badge-red">추천</span>Global 12개월 20분 주 2회
            </div>
          </div>
          <div className="textarea__info">
            <div className="title">옵션 상세</div>
            <ul>
              <li><strong>정상가</strong>1,372,000원</li>
              <li><strong>정상가</strong>1,372,000원 <span className="color-red">65%</span></li>
              <li><strong>수업 시간</strong>20분 / 주 2회/ 총 98회</li>
              <li><strong>튜터 타입</strong>GLOBAL <span className="q">?</span></li>
              <li><strong>추가 혜택</strong>2개월 연장</li>
            </ul>
          </div>
          <div className="textarea__price">
            <p>할인 적용 가격 <span className="line-through">정가 1,372,000원</span></p>
            <div className="price">
              <span className="color-red">65<span className="text">%</span></span>
              40,000<span className="text">원/월</span>
            </div>
          </div>
          <div className="btn">바로 구매</div>
        </div>

        <div className="imgwrap">
          <p>튜터 타입이 <br />궁금하신가요?</p>
          <div className="img"></div>
        </div>
      </div>
      </div>
      {/* 65% 2개월 */}
      <section className={cx('early-bird')}>
        <p>남은 반년, <br className={cx('tamo-layer')} />아직 늦지 않았다! <br />하반기 영어 솔루션</p>
        <div className={cx('img')}></div>
        <div className={cx('img1')}></div>
        <div className={cx('img2')}></div>
      </section>

      {/* 카운트 다운 */}
      {/* 기간 종료일시 is-date-end 넣으면 됩니다. */} 
      <section className={cx('count-down')}>
        <div className={cx('title-img')}></div>
        <div className={cx('day')}>
          <span className={cx('d-img')}></span>
          <span className={cx('count-down__number')}>
            <span>1</span>
          </span>
          <span className={cx('count-down__number')}>
            <span>4</span>
          </span>
        </div>
        <div className={cx('timer')}>
          <span className={cx('count-down__number')}>2</span>
          <span className={cx('count-down__number')}>3</span>
          <span className={cx('dot')}></span>
          <span className={cx('count-down__number')}>5</span>
          <span className={cx('count-down__number')}>9</span>
          <span className={cx('dot')}></span>
          <span className={cx('count-down__number')}>5</span>
          <span className={cx('count-down__number')}>9</span>
        </div>
      </section>

      {/* 언택트 시대 */}
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

      <section className={cx('explan')}>
        <div className={cx('img')}></div>
      </section>

      <section className={cx('purple-mobile')}>
        <div className={cx('img')}>
          <p>일상 속 <br />완벽한 영어 환경</p>
        </div>
      </section>

      <section className={cx('cards')}>
        <div className="img">
        </div>
      </section>

      <section className={cx('Pride')}>
        <div className="img"></div>
        <p className={cx('title')}>
          <strong>3년 연속 1위</strong>
        소비자가 직접 뽑은 <br className={cx('tamo-layer')} />1:1 영어회화 부문
      </p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>

      <section className={cx("ontact-review")}>
        <h2 className={cx("heading")}>직접 이용하고 계신<br />회원님들의 솔직한 후기</h2>
        <div className={cx("review__item")}>
          <p className={cx("description")}>시간, 장소의 제약 없이 내가 원할 때 영어 공부가 가능해서 좋아요. 실제 업무에서 쓰고 싶은 내용을 수업에서 튜터와 이야기 합니다. 어색한 부분이나 잘못된 문장을 교정해 주실때 도움이 많이 돼요.</p>
          <span className={cx("name")}>미정님</span>
        </div>
        <div className={cx("review__item")}>
          <p className={cx("description")}>정해진 수업 시간은 나중에 그 시간이 압박으로 다가오는데, 튜터링은 아무 때나 내가 원하는 시간에 수업을 할 수 있고  또 토픽카드로 셀프 스터디를 할 수 있어서 좋아요.</p>
          <span className={cx("name")}>써니님</span>
        </div>
        <div className={cx("review__item")}>
          <p className={cx("description")}>내가 원하는 시간에 수업이 가능하고, 원하는 시간만큼 연장 수업이 가능한 부분이 편리해요. 또 수업이 끝나면 피드백을 바로 받을 수 있고, 들으며 놓쳤던 부분을 이해할 수 있어 복습에 도움이 됩니다. </p>
          <span className={cx("name")}>수진님</span>
        </div>
      </section>

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

      {/* 기본은 종료임박 뱃지 있는 타입 
        is-simple : 뱃지 없고, 검은 배경에 보라색 버튼 (2106 b타입의 검은색 배경)
        is-info : 뱃지 없고, 가격/월, 선택옵션이 포함된 레이아웃 (2106 a타입의 하얀색 배경)
      */}
      <section className={cx("challenge-cta", "is-info")}>
        <div className={cx('challenge-cta__wrap')}>
          <div className={cx("wrapper")}>
            <span className={cx("cta__badge")}>한정수량</span>

            <div className="textwrap">
              <div className="remain">
                <h2 className={cx("heading")}>잔여수량</h2>
                <div className={cx("cta__count")}>
                  <span className={cx("number")}>0</span>
                  <span className={cx("number")}>1</span>
                  <span className={cx("number")}>2</span>
                  <span className={cx("unit")}>개</span>
                </div>
              </div>
              <div className="selected-option">
                <h2 className={cx("heading")}>선택옵션</h2>
                {/* is-on 클래스 넣으면 내부의 l-selcted-item 이 보여집니다. */}
                <div class="l-select is-on">
                  <p>
                    <span class="badge-red">추천</span>Global 12개월 20분 주 2회
                  </p>
                  <div className="l-select-item"> 
                    <div className="title">365올패스 Global 12개월</div>
                    <ul>
                    {/* 선택되어있는 상태 : is-selected */}
                      <li>
                        <span className="badge-red">추천</span>
                        <div className="textwrap left">
                          {/* tag에는 native, global, puriod 타입이 있습니다. */}
                          <span className="tag native">GLOBAL</span>
                          <span className="tag puriod">2개월 연장</span>
                          <p>20분/주2회</p>
                          <div className="text">총 98회</div>
                        </div>
                        <div className="textwrap right">
                          <div className="line-through">정가 1,960,000원</div>
                          <span className="color-red">60%</span>
                          <span className="text">65,3000/월</span>
                        </div>
                      </li>
                      <li className="sub-title"> 365 올패스 Native 6개월 </li>
                      <li>
                        <span className="badge-red">추천</span>
                        <div className="textwrap left">
                          {/* tag에는 native, global, puriod 타입이 있습니다. */}
                          <span className="tag native">GLOBAL</span>
                          <span className="tag puriod">2개월 연장</span>
                          <p>20분/주2회</p>
                          <div className="text">총 98회</div>
                        </div>
                        <div className="textwrap right">
                          <div className="line-through">정가 1,960,000원</div>
                          <span className="color-red">60%</span>
                          <span className="text">65,3000/월</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="btnwrap">
              <div className="price">40,000원<span className={cx('text')}>/월</span></div>
              <button type="button" className={cx("cta__button")} >구매하기</button>
            </div>
          </div>
        </div>
    {/* TODO: 애니메이션 타입 정의하기 (ex : bottom-up, left-right ) */}
    {/* is-show 넣으면 올라옵니다. */}
    <article className={cx('sheet')}>
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
        </article>
      </section>
    </>
  );
};

export default Apage;