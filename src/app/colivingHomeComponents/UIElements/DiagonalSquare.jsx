import React from 'react';

function DiagonalSquare({ size, color }) {
  const squareStyle = {
    width: `${size}px`,
    height: `${size}px`,
    position: 'relative',
    backgroundColor: 'transparent',
  };

//   const upperDiagonalStyle = {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)', // Top-left to bottom-right diagonal
//     backgroundColor: color,
//   };

  const lowerDiagonalStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)', // Top-right to bottom-left diagonal
    backgroundColor: color,
  };

  return (
    <div style={squareStyle}>
      {/* <div style={upperDiagonalStyle}></div> */}
      <div style={lowerDiagonalStyle}></div>
    </div>
  );
}

export default DiagonalSquare;
