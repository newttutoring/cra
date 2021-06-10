import React, {useState} from 'react';
import './customslide.scss';

const CustomSlide = () => {
  const [move, setMove] = useState(0);
  let transformPostion = 0;

  const left = (move) => {
    move == 0 ? console.log('dd') : setMove(move + 100);
  }
  const right = (move) => {
    move == -200 ? console.log('dd') : setMove(move - 100);
  }

  return (
    <div className="custom-slide">
    {
      transformPostion
    }
      <ul style={{transform: 'translateX(' + move + '%)', transition: 'all 1s' }}>
        <li>1number</li>f
        <li>3number</li>
      </ul>
      <button className="left" onClick={()=>left(move)}>왼쪽</button>
      <button className="right" onClick={()=>right(move)}>오른쪽</button>
    </div>
  );
};

export default CustomSlide;