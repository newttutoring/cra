import React from 'react';
import EarlyBird from './components/Section/EarlyBird/EarlyBird';
import CountDown from './components/Section/CountDown/CountDown';
import Notice from './components/Section/Notice/Notice';
import Explan from './components/Section/Explan/Explan';
import Trinity from './components/Section/Trinity/Trinity';
// import '../src/assets/style/functions.scss';
import Cards from './components/Section/Cards/Cards';
import Pride from './components/Section/Pride/Pride';
import Review from './components/Section/Review/Review';
import Btype from './components/Section/Btype/Btype';

function App() {
  return (
    <div className="App">
      {/* 슬라이드 배너 */}

      {/* kv A 타입 */}

      {/* kv B 타입 */}
      <Btype/>

      {/* 65% 이미지 */}
      <EarlyBird/>

      {/* 숫자 카운트 */}
      <CountDown/>

      {/* 언택트 시대 튜터링으로 영어 해결! */}
      <Trinity/>

      {/* 보라색 핸드폰 */}
      <Explan/>

      {/* 카드 들 */}
      <Cards/>

      {/* 검은 배경  */}
      <Pride/>

      {/* 후기 */}
      <Review/>

      {/* 안내문구 */}
      <Notice/>
    </div>
  );
}

export default App;
