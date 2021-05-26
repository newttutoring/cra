import React from 'react';
import classNames from 'classnames/bind';
import style from './Review.scss';

const cx = classNames.bind(style)

const Review = () => {
  return (
    <div className={cx("ontact-review")}>
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
			</div>
  )
}
export default Review;