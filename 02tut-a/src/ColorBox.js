import React from 'react';
import { useState, useEffect, useRef } from 'react';
import InputBox from './InputBox';

const ColorBox = () => {
    const [bgColor,setBgColor] = useState('')
    const box = useRef(null)

    useEffect(() => {
        box.current.style.backgroundColor = bgColor
    },[bgColor])

    return (
        <div className='ColorBox'>
            <input 
                className='box' 
                placeholder='Empty value' 
                value={bgColor}
                readOnly
                ref={box}
            >
            </input>
            <InputBox
                bgColor={bgColor}
                setBgColor={setBgColor}
            />
        </div>
    );
}

export default ColorBox;
