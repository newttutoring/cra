import React, {useState} from 'react';
import './customslide.scss';

const CustomSlide = () => {
  const [move, setMove] = useState(0);
  let transformPostion = 0;
  const left = (transformPostion) => {
    console.log('왼쪽');
    transformPostion = transformPostion - 100;
    setMove(transformPostion);
  }
  const right = (transformPostion) => {
    console.log('오른쪽');
    transformPostion = transformPostion + 100;
    console.log(transformPostion);
    setMove(transformPostion);
  }

  return (
    <div className="custom-slide">
    {
      transformPostion
    }
      <ul style={{transform: 'translateX(' + move + '%)' }}>
        <li>1number</li>
        <li>2number</li>
        <li>3number</li>
      </ul>
      <button className="left" onClick={()=>left(transformPostion)}>왼쪽</button>
      <button className="right" onClick={()=>right(transformPostion)}>오른쪽</button>
    </div>
  );
};

export default CustomSlide;