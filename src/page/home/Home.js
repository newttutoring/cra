import React from 'react';

const Link = `
    {/* 기본 안내페이지 */}
    <Route exact path="/" component={Home} />
    {/* 예약 신청 */}
    <Route exact path="/reserve" component={LearnConsultReserve} />
    {/* 예약 신청 완료 */}
    <Route exact path="/result" component={LearnConsultReserveResult} />
    {/* 짜요 다왔다 */}
    <Route exact path="/arrive" component={Arrive} />
  `


const Home = () => {
  return (
    <div style={{whiteSpace:'break-spaces', lineHeight:'2'}}>
      {Link}
    </div>
  );
};

export default Home;