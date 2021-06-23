import React from "react";
import classNames from "classnames/bind";
import style from "./Arrive.scss";
import Swiper from "react-id-swiper";

const cx = classNames.bind(style);

const Arrive = () => {
  return (
    <>
      <div className={cx("arrive-page")}>
        <div className={cx("wrapper")}>
          <div className={cx('slide-01')}>
            {/**  */}
            <div className={cx("slide-01__image", "slide-01__image--1")} />
          </div>
        </div>

        <div className={cx('select-area')}>
          <div className={cx('textarea')}>
            <div className={cx('textarea__option')}>
              <div className={cx('title')}>365올패스 옵션 선택</div>
              <div className={cx('tamo-layer', 'l-select', 'is-on')}>
                <span className={cx('selected__plan__title')}>
                  <span className={cx('badge-red')}>추천</span>Global 12개월 20분 주 2회
                </span>
              </div>
            </div>
            <div className={cx('textarea__price')}>
              <p>
                할인 적용 가격
                <span className={cx('line-through')}>
                  정가 <span className={cx('origin__money')}>1,372,000</span>원
                </span>
              </p>
              <div className={cx('price')}>
                <span className={cx('color-red')}>
                  <span className={cx('discount')}>65</span>
                  <span className={cx('text')}>%</span>
                </span>
                <span className={cx('money__per__month')}>40,000</span>
                <span className={cx('text')}>원/월</span>
              </div>
            </div>
          </div>
        </div>

        <section className={cx('img1')}></section>
        <section className={cx('img2')}></section>
        <section className={cx('img3')}></section>
        <section className={cx('img4')}></section>


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

        <div className={cx("section_notice")}>
			<div className={cx("certificate")}>
				<div className={cx("certificate__wrapper")}>
					<p className={cx("title")}>수강증 상시 발급 가능</p>
					<div className={cx("certificate_content")}>
						<p className={cx("certificate_content__description")}>
							수강증, 출석확인증, 영수증 상시 발급 가능
						</p>
						<div className={cx("certificate_content__banner")}>
							직장인들을 위한 SPEC UP!<br/> 사내 교육지원비로 알뜰하게!
						</div>
						<div className={cx('button__wrap')}>
							<button type="button" className={cx("receipt_detail")} >
								증빙서류 샘플 상세보기
								<i className={cx("arrow")} />
							</button>
						</div>
					</div>
				</div>
				<div className={cx("guide")}>
					<div className={cx("guide__item")}>
						<p className={cx("guide__item__title")}>증빙 서류 발급 안내</p>
						<ul>
							<li className={cx("guide__item__description")}>· 수강증, 출석 확인증, 영수증은 튜터링 앱 메인 화면 우측 하단 [마이튜터링] &gt; [고객센터] &gt; [증빙 서류 발급 메뉴]에서 신청 가능합니다.</li>
							<li className={cx("guide__item__description")}>· 정해진 학습 기간 내에 수업을 진행해야만 출석으로 인정합니다.</li>
							<li className={cx("guide__item__description")}>· 증빙서류의 경우 내용(수강권명, 금액)등은 임의 수정이 불가합니다.</li>
							<li className={cx("guide__item__description")}>· 발급 신청 시 입력한 이메일 주소로 자동 발급됩니다. (기타 문의 사항은 [고객센터 &gt; 1:1 채팅 문의]로 연락주시기 바랍니다.)</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={cx("section4")}>
				<div className={cx("notice")}>
					<div className={cx("notice--header")}>튜터링 영어 유의사항 안내</div>
				</div>
				<div className={cx("guide")}>
							<div className={cx("info-group")}>
								<p className={cx("info-group__title")}>제목</p>
								<ul className={cx("info-group__content")}>
                  <li className={cx("content__item")}>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</li>
                  <li className={cx("content__item")}>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</li>
                  <li className={cx("content__item")}>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</li>
                  <li className={cx("content__item")}>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</li>
								</ul>
							</div>
				</div>
			</div>
		</div>
        {/* */}

        {/* cta */}
        <section className={cx('challenge-cta', 'is-info')} id="challengeCta">
          <div className={cx('challenge-cta__wrap')}>
            <div className={cx('cta-wrapper')}>
              <div className={cx('btnwrap')}>
                <div className={cx('price')}>
                  <span className={cx('money__per__month')}>40,000</span>원
                  <span className={cx('text')}>/월</span>
                </div>
                <button type="button" className={cx('tamo-layer', 'cta__button')}>
                  바로구매
                </button>
              </div>
            </div>
          </div>

          {/* @Aspyn is-show 넣으면 올라옵니다. */}
          <article className={cx('sheet')} id="bottomUpSheet">
            <div className={cx('sheet__wrap')}>
              <div className={cx('info')}>
                <div className={cx('btn')} />
                <strong className={cx('option')}>수강권 선택 옵션</strong>
                <div className={cx('change-btn')}>
                  <span className={cx('text')}>변경</span>
                </div>
                <div className={cx('textwrap')}>
                  <span className={cx('discount')}>추천</span>
                  <span className={cx('name', 'bottom-up__title')}>
                    365 올패스 Global 12 + 2 개월
                  </span>
                </div>
                <p>
                  <strong>
                    <span className={cx('minutes')}>20</span>분 / 주
                    <span className={cx('count__per__week')}>2</span>회
                  </strong>
                  <span className={cx('all')}>
                    총<span className={cx('lesson_cnt')}>98</span>회
                  </span>
                </p>
              </div>
              <div className={cx('price-wrap')}>
                <strong>할인 적용 가격</strong>
                <span className={cx('price-area')}>
                  <span className={cx('price')}>40,000원</span>/월
                </span>
              </div>
            </div>
            <div className={cx('dim')} />
          </article>
        </section>
      </div>
    </>
  );
};
export default Arrive;
