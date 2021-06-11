import React, {useState} from 'react';
import classNames from 'classnames/bind';
import style from './LearnConsultReserve.scss';

const cx = classNames.bind(style)

const LearnConsultReserve = () => {
  return (
    <div className={cx('LearnConsultReserve-page')}>
      <article className={cx('slide')}>
        슬라이드 영역
      </article>

      <div className={cx('content')}>
        <article className={cx('select-option')}>
          <div className={cx('input-area')}>
            <strong className={cx('title')}>희망 상담 방식</strong>
            <div className={cx('input-wrap')}>
              <div className={cx('input')}> <span className={cx('')}>상담방식을 선택해주세요</span> </div>
            </div>
          </div>

          <div className={cx('input-area')}>
            <strong className={cx('title')}>희망 상담 방식</strong>
            <div className={cx('input-wrap')}>
              <div className={cx('input')}> <span className={cx('')}>전화상담</span> </div>
            </div>
          </div>

          <div className={cx('input-area')}>
            <strong className={cx('title')}>희망 학습 분야</strong>
            <div className={cx('input-wrap', 'option')}>
              <div className={cx('label-wrap')}>
                <input type="checkbox" name="sector" id="csArea1" />
                <label htmlFor="csArea1">일반회화</label>
              </div>
              <div className={cx('label-wrap')}>
                <input type="checkbox" name="sector" id="csArea2" />
                <label htmlFor="csArea2">비즈니스 영어</label>
              </div>
              <div className={cx('label-wrap')}>
                <input type="checkbox" name="sector" id="csArea3" />
                <label htmlFor="csArea3">시험 준비</label>
              </div>
              <div className={cx('label-wrap')}>
                <input type="checkbox" name="sector" id="csArea4" />
                <label htmlFor="csArea4">어린이 영어</label>
              </div>
            </div>
          </div>
        </article>

        <article className={cx('desc-notice')}>
          <strong className={cx('id')}>newt님</strong>
          <p>
            전화번호를 남겨주시면 <br /><strong>전문 학습 컨설턴트가 연락드릴거에요.</strong>
            <strong className={cx('alert')}> * 첫 무료수업 후 신청하셔야만 컨설팅이 가능합니다.</strong>
          </p>
        </article>

        <article className={cx('input-phonenumber')}>
          <input type="phone" placeholder="전화번호 입력" />
        </article>

        <article className={cx('dsec-alert')}>
          <p>
            학습 상담 신청 시, 학습 상담 관리에 필요한 이용약관 및 개인정보처리방침에 동의하게 됩니다. <br />※ 채팅 상담의 경우 카카오톡으로 진행되며, 위의 전화번호로 카카오톡 메시지가 발송됩니다. 채팅창에 문의를 남겨주세요. :)
          </p>
        </article>
      </div>
      {/* 아래 btn 클래스에 is-active 넣으면 활성화 상태로 됩니다. */}
      <button className={cx('btn')}>학습 상담 신청</button>

      {
        // sheet &&
        <div className={cx('select-sheet')} >
          <div className="select-sheet__content">
            <div className={cx('select-sheet__title')}>통화 가능 시간(평일 기준)</div>
            <ul>
              {/* 선택된 리스트에 is-select 들어갑니다. */}
              <li className={cx('is-select')}>오전 10~11시</li>
              <li>오전 10~11시</li>
              <li>오전 10~11시</li>
              <li>오전 10~11시</li>
              <li>오전 10~11시</li>
              <li>오전 10~11시</li>
            </ul>
          </div>

          </div>
      }
    </div>
  )
}
export default LearnConsultReserve;