import { useState, useRef } from 'react';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

const leftX = 2.062, rightX = 21.938, lineY = 12;
const upperEndY = 11.652, lowerEndY = 12.348;
const archRX = 10.75, archRY = 10.75;

const topArchPath = (t: number) => {
  const y = upperEndY + (lineY - upperEndY) * t;
  const ry = Math.max(0.001, archRY * (1 - t));
  return `M ${leftX} ${y} A ${archRX} ${ry} 0 0 1 ${rightX} ${y}`;
};
const bottomArchPath = (t: number) => {
  const y = lowerEndY - (lowerEndY - lineY) * t;
  const ry = Math.max(0.001, archRY * (1 - t));
  return `M ${rightX} ${y} A ${archRX} ${ry} 0 0 1 ${leftX} ${y}`;
};

const easeIn = (t: number) => t * t * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Eye({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [morphProgress, setMorphProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(animate);
  const frameRef = useRef(-1);
  const runRef = useRef(0);

  function animateMorph(
    from: number, to: number, durationMs: number,
    ease: (t: number) => number, runId: number, onDone: () => void
  ) {
    const start = performance.now();
    const tick = (now: number) => {
      if (runId !== runRef.current) return;
      const t = Math.min((now - start) / durationMs, 1);
      setMorphProgress(from + (to - from) * ease(t));
      if (t < 1) { frameRef.current = requestAnimationFrame(tick); return; }
      onDone();
    };
    frameRef.current = requestAnimationFrame(tick);
  }

  const handleMouseEnter = () => {
    if (isAnimating) return;
    if (frameRef.current !== -1) cancelAnimationFrame(frameRef.current);
    runRef.current += 1;
    const id = runRef.current;
    setIsAnimating(true);
    animateMorph(0, 1, 120, easeIn, id, () => {
      animateMorph(1, 0, 160, easeOut, id, () => {
        if (id !== runRef.current) return;
        setIsAnimating(false);
        setMorphProgress(0);
        frameRef.current = -1;
      });
    });
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="eye" role="img" onMouseEnter={handleMouseEnter}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
        className={`eye-icon${isAnimating ? ' animate' : ''}`}>
        <path d={topArchPath(morphProgress)} className="eye-outline" />
        <path d={bottomArchPath(morphProgress)} className="eye-outline" />
        <circle cx="12" cy="12" r="3" className="eye-pupil" />
      </svg>
    </div>
  );
}
