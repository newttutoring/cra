import React from "react";
import classNames from "classnames/bind";
import style from "./Arrive.scss";
import Swiper from "react-id-swiper";

const cx = classNames.bind(style);

const Arrive = () => {
  const swiperOptions = {
		containerClass: cx("swiper-container"),
		wrapperClass: cx("swiper-wrapper"),
		sildeClass: cx("swiper-slide"),
		pagination: {
      el: `.swiper-pagination_A`,
      clickable: true,
		},
  };


  return (
    <>
      <div className={cx("arrive-page")}>
        
        <div className={cx("wrapper")}>
          <div className={`slide-01 ${cx("slide-01")}`}>
            <Swiper {...swiperOptions}>
              <div className={cx("slide-01__image", "slide-01__image--1")} />
              <div className={cx("slide-01__image", "slide-01__image--2")} />
              <div className={cx("slide-01__image", "slide-01__image--3")} />
              <div className={cx("slide-01__image", "slide-01__image--4")} />
            </Swiper>
          </div>
        </div>

        <div className="select-area">
          <div className="textarea">
            <div class="textarea__option">
              <div class="title">365올패스 옵션 선택</div>
              <div class="tamo-layer l-select is-on">
                <span class="selected__plan__title">
                  <span class="badge-red">추천</span>Global 12개월 20분 주 2회
                </span>
              </div>
            </div>
            <div class="textarea__price">
              <p>
                할인 적용 가격{" "}
                <span class="line-through">
                  정가 <span class="origin__money">1,372,000</span>원
                </span>
              </p>
              <div class="price">
                <span class="color-red">
                  <span class="discount">65</span>
                  <span class="text">%</span>
                </span>
                <span class="money__per__month">40,000</span>
                <span class="text">원/월</span>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <section class="challenge-cta is-info" id="challengeCta">
          <div class="challenge-cta__wrap">
            <div class="wrapper">
              <div class="btnwrap">
                <div class="price">
                  <span class="money__per__month">40,000</span>원
                  <span class="text">/월</span>
                </div>
                <button type="button" class="tamo-layer cta__button">
                  구매하기
                </button>
              </div>
            </div>
          </div>

          {/* is-show 넣으면 올라옵니다. */}
          <article class="sheet" id="bottomUpSheet">
            <div class="sheet__wrap">
              <div class="info">
                <div class="btn" />
                <strong class="option">수강권 선택 옵션</strong>
                <div class="change-btn">
                  <span class="text">변경</span>
                </div>
                <div class="textwrap">
                  <span class="discount">추천</span>
                  <span class="name bottom-up__title">
                    365 올패스 Global 12 + 2 개월
                  </span>
                </div>
                <p>
                  <strong>
                    <span class="minutes">20</span>분 / 주
                    <span class="count__per__week">2</span>회
                  </strong>{" "}
                  <span class="all">
                    총<span class="lesson_cnt">98</span>회
                  </span>
                </p>
              </div>
              <div class="price-wrap">
                <strong>할인 적용 가격</strong>
                <span class="price-area">
                  <span class="price">40,000원</span>/월
                </span>
              </div>
            </div>
            <div class="dim" />
          </article>
        </section>
      </div>
    </>
  );
};
export default Arrive;
