import React from 'react';
import { Route } from 'react-router-dom';
import LearnConsultReserve from './page/mobileapp/LearnConsultReserve/LearnConsultReserve';
import LearnConsultReserveResult from './page/mobileapp/LearnConsultReserveResult/LearnConsultReserveResult';
import Home from './page/home/Home';
import Arrive from './page/jjiayou/Arrive';
import Test from './components/test/Test';
import CouponDownload from './page/couponDownload/CouponDownload';

function Router() {
  return (
    <>
      {/* 기본 안내페이지 */}
      <Route exact path="/" component={Home} />
      {/* 예약 신청 */}
      <Route exact path="/reserve" component={LearnConsultReserve} />
      {/* 예약 신청 완료 */}
      <Route exact path="/result" component={LearnConsultReserveResult} />
      {/* 짜요 다왔다 */}
      <Route exact path="/arrive" component={Arrive} />
      {/* 테스트페이지 */}
      <Route exact path="/test" component={Test} />
      {/* 쿠폰 다운로드페이지 */}
      <Route exact path="/coupon-download" component={CouponDownload} />
    </>
  );
}

export default Router;