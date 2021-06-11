import React from 'react';
import { Route } from 'react-router-dom';
import LearnConsultReserve from './components/page/mobileapp/LearnConsultReserve/LearnConsultReserve';
import LearnConsultReserveResult from './components/page/mobileapp/LearnConsultReserveResult/LearnConsultReserveResult';

function Router() {
  return (
    <>
      {/* 예약 신청 */}
      <Route path="/reserve" component={LearnConsultReserve} />
      {/* 예약 신청 완료 */}
      <Route path="/result" component={LearnConsultReserveResult} />
    </>
  );
}

export default Router;