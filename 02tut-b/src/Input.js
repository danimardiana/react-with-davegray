import React from 'react';
import colorNames from 'colornames'
import tinyColor from 'tinycolor2'

const Input = ({colorValue, setColorValue, setHexValue, setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input
            type='text'
            placeholder='Type color name'
            autoFocus
            value={colorValue}
            onChange={(e) => {
                const hexColor = colorNames(e.target.value)
                setColorValue(e.target.value)
                setHexValue(hexColor)
                setIsDarkText(tinyColor(hexColor).isDark())
            }}
        />
    </form>
  );
}

export default Input;
