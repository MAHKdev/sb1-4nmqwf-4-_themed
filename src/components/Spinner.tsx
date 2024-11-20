import React, { useState, useRef } from 'react';
import Mascot from '@/components/Mascot';

const SpinningWheel = ({ min = 1, max = 100, steps = 10, segments = 12, fixedPrizes = [] }) => {
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState(null);
  const [angle, setAngle] = useState(0);

  // Use a ref to store the prizes array, ensuring it doesn't change
  const prizesRef = useRef(
    fixedPrizes.length
      ? fixedPrizes
      : Array.from({ length: segments }).map((_, i) =>
          i % 1 === 0 ? Math.round(Math.random() * (max - min) / steps) * steps : null
        )
  );

  const prizes = prizesRef.current;

  const spin = () => {
    if (spinning) return; // Prevent multiple spins
    setPrize(null);
    setSpinning(true);

    const duration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds
    const endAngle = Math.random() * 360 + 1440; // At least 4 full rotations

    let start: any = null;

    const animate = (timestamp: any) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easing = 1 - Math.pow(1 - progress, 3); // Ease-out effect

      setAngle(easing * endAngle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const finalAngle = (easing * endAngle) % 360;
        const winningPrize = calculatePrize(finalAngle) as any;
        setPrize(winningPrize);
        setSpinning(false);
      }
    };

    requestAnimationFrame(animate);
  };

  const calculatePrize = (finalAngle: any) => {
    const segmentAngle = 360 / segments;

    // Normalize the angle to ensure it's correctly aligned to the top
    const normalizedAngle = (360 - finalAngle + segmentAngle / 2) % 360;
    const segmentIndex = Math.floor(normalizedAngle / segmentAngle);
    return prizes[segmentIndex] || 'Nothing';
  };

  const renderWheelSegments = () => {
    const segmentAngle = 360 / segments;
    return Array.from({ length: segments }).map((_, i) => {
      const isBlank = prizes[i] === null;
      return (
        <g key={i} transform={`rotate(${i * segmentAngle})`}>
          <text
            x="0"
            y="-70"
            textAnchor="middle"
            fill={isBlank ? '#ddd' : 'black'}
            fontSize="12"
            //transform={`rotate(${segmentAngle / 2}, 0, -70)`}
          >
            {prizes[i] !== null ? prizes[i] : ''}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className="flex flex-col items-center justify-center relative text-center relative"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div className="absolute inset-0">
          <Mascot x={0} y={0} />
        </div>
        <svg
          width="300"
          height="300"
          viewBox="-100 -100 200 200"
          className="relative"
          style={{ zIndex: 10 }}
        >
          {renderWheelSegments()}
        </svg>
      </div>
      <div className="text-center z-15">
        <button
          onClick={spin}
          className="btn btn-primary -mt-4 z-15 relative"
          disabled={spinning}
        >
          Spin the Wheel
        </button>
        {prize !== null && (
          <p className="mt-4 text-lg font-bold absolute left-1/2 transform -translate-x-1/2">You won: {prize || 'Nothing'}!</p>
        )}
      </div>
    </div>
  );
};

export default SpinningWheel;
