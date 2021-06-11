import React from 'react';
import { Route } from 'react-router-dom';
import LearnConsultReserve from './components/page/mobileapp/LearnConsultReserve/LearnConsultReserve';
import LearnConsultReserveResult from './components/page/mobileapp/LearnConsultReserveResult/LearnConsultReserveResult';

function Router() {
  return (
    <div>
      <Route path="/reserve" component={LearnConsultReserve} />
      <Route path="/result" component={LearnConsultReserveResult} />
    </div>
  );
}

export default Router;