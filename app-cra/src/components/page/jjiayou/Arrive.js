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
              <div className={cx('tamo-layer l-select is-on')}>
                <span className={cx('selected__plan__title')}>
                  <span className={cx('badge-red')}>추천</span>Global 12개월 20분 주 2회
                </span>
              </div>
            </div>
            <div className={cx('textarea__price')}>
              <p>
                할인 적용 가격{" "}
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

        {/* cta */}
        <section className={cx('challenge-cta is-info')} id="challengeCta">
          <div className={cx('challenge-cta__wrap')}>
            <div className={cx('cta-wrapper')}>
              <div className={cx('btnwrap')}>
                <div className={cx('price')}>
                  <span className={cx('money__per__month')}>40,000</span>원
                  <span className={cx('text')}>/월</span>
                </div>
                <button type="button" className={cx('tamo-layer cta__button')}>
                  바로구매
                </button>
              </div>
            </div>
          </div>

          {/* @Aspyn is-show 넣으면 올라옵니다. */}
          <article className={cx('sheet')} id="bottomUpSheet">
            <div className={cx('sheet__wrap')}>
              <div className={cx('info')}>
                <div className="btn" />
                  <strong className="option">수강권 선택 옵션</strong>
                <div className="change-btn">
                  <span className="text">변경</span>
                </div>
                <div className="textwrap">
                  <span className="discount">추천</span>
                  <span className="name bottom-up__title">
                    365 올패스 Global 12 + 2 개월
                  </span>
                </div>
                <p>
                  <strong>
                    <span className="minutes">20</span>분 / 주
                    <span className="count__per__week">2</span>회
                  </strong>{" "}
                  <span className="all">
                    총<span className="lesson_cnt">98</span>회
                  </span>
                </p>
              </div>
              <div className="price-wrap">
                <strong>할인 적용 가격</strong>
                <span className="price-area">
                  <span className="price">40,000원</span>/월
                </span>
              </div>
            </div>
            <div className="dim" />
          </article>
        </section>
      </div>
    </>
  );
};
export default Arrive;
