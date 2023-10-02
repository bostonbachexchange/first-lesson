import React from 'react';

function PieChart() {
  const sliceStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
    transformOrigin: '100% 100%',
  };

  const spanStyles = {
    position: 'absolute',
    bottom: '-20px',
    right: '50%',
    transform: 'translateX(50%)',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    color: 'black',
  };

  const slices = [
    { category: 'Warm-Up', rotation: 'rotate(0deg)', gradient: 'conic-gradient(#ff5733 0% 10%, #f0ad4e 10% 30%)' },
    { category: 'Technical Exercises', rotation: 'rotate(60deg)', gradient: 'conic-gradient(#f0ad4e 0% 10%, #5bc0de 10% 40%)' },
    { category: 'Repertoire', rotation: 'rotate(120deg)', gradient: 'conic-gradient(#5bc0de 0% 10%, #d9534f 10% 40%)' },
    { category: 'Ear Training', rotation: 'rotate(180deg)', gradient: 'conic-gradient(#d9534f 0% 10%, #5bc0de 10% 40%)' },
    { category: 'Music Theory', rotation: 'rotate(240deg)', gradient: 'conic-gradient(#5bc0de 0% 10%, #5cb85c 10% 40%)' },
    { category: 'Creative Exploration', rotation: 'rotate(300deg)', gradient: 'conic-gradient(#5cb85c 0% 10%, #5bc0de 10% 40%)' },
    { category: 'Review and Reflect', rotation: 'rotate(360deg)', gradient: 'conic-gradient(#5bc0de 0% 10%, #ff5733 10% 40%)' },
  ];

  return (
    <div>
        <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '50%', color: 'green' }}>
        {slices.map((slice, index) => (
            <div key={index} className="slice" id={slice.category.toLowerCase().replace(' ', '-')}
                style={{ ...sliceStyles, transform: slice.rotation, background: slice.gradient }}>
            <span style={spanStyles}>{slice.category}</span>
            </div>
        ))}
        </div>
    </div>
  );
}

export default PieChart;
