import React from 'react';
import { Route } from 'react-router-dom';
import LearnConsultReserve from './components/page/mobileapp/LearnConsultReserve/LearnConsultReserve';
import LearnConsultReserveResult from './components/page/mobileapp/LearnConsultReserveResult/LearnConsultReserveResult';
import Home from './components/page/home/Home';
import Arrive from './components/page/jjiayou/Arrive';

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
    </>
  );
}

export default Router;