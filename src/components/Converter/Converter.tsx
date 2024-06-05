import React from 'react';
import { useState } from 'react';

export default function Converter() {

  const [color, setColor] = useState(
    {
      colorHex: '',
      colorRgb: ''
    }
  );

  const hamdleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.length === 7) {
      if (/^#{1}[0-9a-f]{6}/.test(e.target.value)) {
        const colorRgbR = parseInt(e.target.value.slice(1, 3), 16)
        const colorRgbG = parseInt(e.target.value.slice(3, 5), 16)
        const colorRgbB = parseInt(e.target.value.slice(5, 7), 16)

        const colorStr = 'rgb(' + colorRgbR + ', ' + colorRgbG  + ', ' +  colorRgbB + ')'

        setColor(
          {
            colorHex: e.target.value,
            colorRgb: colorStr
          }
        );
      } else {
        setColor(
          {
            colorHex: '#E94B35',
            colorRgb: 'Ошибка!'
          }
        );
      }
    }
    
  };

  return (
    <div className = "converter" style = {{background: color.colorHex}}>
      <form className = "form">
        <input className = "color-input" name = "input" onChange = {hamdleChange}/>
        <div className = "view-rgb">
          {color.colorRgb}
        </div>
      </form>
    </div>
  )
}
