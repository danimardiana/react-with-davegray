import React from 'react';

const InputBox = ({bgColor, setBgColor}) => {
  return (
    <input className='InputBox'
        autoFocus
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
    ></input>
  );
}

export default InputBox;
