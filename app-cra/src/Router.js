import React from 'react';
import { Route } from 'react-router-dom';
import LearnConsultReserve from './components/page/mobileapp/LearnConsultReserve/LearnConsultReserve';
import LearnConsultReserveResult from './components/page/mobileapp/LearnConsultReserveResult/LearnConsultReserveResult';
import Home from './components/page/home/Home';

function Router() {
  return (
    <>
      {/* 기본 안내페이지 */}
      <Route path="/" component={Home} />
      {/* 예약 신청 */}
      <Route path="/reserve" component={LearnConsultReserve} />
      {/* 예약 신청 완료 */}
      <Route path="/result" component={LearnConsultReserveResult} />
    </>
  );
}

export default Router;