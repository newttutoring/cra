import React, {useState} from 'react';
import './customslide.scss';

const CustomSlide = () => {
  const [move, setMove] = useState(0);
  let transformPostion = 0;

  const left = (move) => {
    move == 0 ? console.log('dd') : setMove(move + 100);
  }
  const right = (move) => {
    move == -500 ? console.log('dd') : setMove(move - 100);
  }

  return (
    <div className="custom-slide">
      <ul style={{transform: 'translateX(' + move + '%)'}}>
        <li>1number</li>
        <li>1number</li>
        <li>3number</li>
        <li>4number</li>
        <li>5number</li>
        <li>6number</li>
      </ul>
      <button className={move == 0 ? 'is-end' : 'left'} onClick={()=>left(move)}>왼쪽</button>
      <button className={move == -500 ? 'is-end' : 'right'} onClick={()=>right(move)}>오른쪽</button>
    </div>
  );
};

export default CustomSlide;