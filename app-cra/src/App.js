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
import Atype from './components/Section/Atype/Atype';
import Cta from './components/cta/cta';
import PurpleMobile from './components/Section/PurpleMobile/PurpleMobile';
import Slide from './components/Section/Slide/Slide';

function App() {
  return (
    <div className="App">
      {/* 슬라이드 배너 */}
      <Slide/>
      
      {/* kv A 타입 */}
      {/*
        <Atype/>
       */}

      {/* kv B 타입 */}
      <Btype/>
      {/*
       */}

      {/* 65% 이미지 */}
      <EarlyBird/>

      {/* 숫자 카운트 */}
      <CountDown/>

      {/* 언택트 시대 튜터링으로 영어 해결! */}
      <Trinity/>

      {/* 보라색 핸드폰 */}
      <Explan/>

      {/* 일상 속 완벽한 영어 환경 */}
       <PurpleMobile/>

      {/* 카드 들 */}
      <Cards/>

      {/* 검은 배경  */}
      <Pride/>

      {/* 후기 */}
      <Review/>

      {/* 안내문구 */}
      <Notice/>

      {/* cta 
        <Cta/>
      */}
    </div>
  );
}

export default App;
