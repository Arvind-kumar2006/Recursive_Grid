import React from 'react';

const Box = ({ value, onClick, isLocked }) => {
      let bgColor = '';
      let textColor = '';

      if (isLocked) {
            bgColor = 'bg-red-500'; 
            textColor = 'text-white';
      } else if (value % 2 === 0) {
            bgColor = 'bg-[#e0e0e0]'; 
            textColor = 'text-black';
      } else {
            bgColor = 'bg-[#1a237e]'; 
            textColor = 'text-white';
      }

      return (
            <div
                  onClick={!isLocked ? onClick : undefined}
                  className={`
        w-24 h-24 rounded-[4px] shadow-[2px_2px_0px_black]
        flex items-center justify-center text-2xl font-bold
        cursor-pointer transition-colors duration-200
        ${bgColor} ${textColor}
        ${isLocked ? 'cursor-not-allowed' : 'hover:opacity-90'}
      `}
            >
                  {value}
            </div>
      );
};

export default Box;
