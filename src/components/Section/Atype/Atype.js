import React from 'react';
import classNames from 'classnames/bind';
import style from './Atype.scss';

const cx = classNames.bind(style)

const Atype = () => {
  return (
    <div classNames={cx('atype')}>a타입</div>
  )
}
export default Atype;