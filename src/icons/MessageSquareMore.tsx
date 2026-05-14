import { useState } from 'react';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MessageSquareMore({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const [l1, setL1] = useState({ y1: 10, y2: 10 });
  const [l2, setL2] = useState({ y1: 10, y2: 10 });
  const [l3, setL3] = useState({ y1: 10, y2: 10 });

  function easeInOut(t: number) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function animateLine(
    sY1: number, sY2: number, mY1: number, mY2: number,
    eY1: number, eY2: number, duration: number, delay: number,
    set: (y1: number, y2: number) => void
  ) {
    setTimeout(() => {
      const t0 = performance.now();
      const frame = (now: number) => {
        const p = Math.min((now - t0) / (duration * 1000), 1);
        let y1, y2;
        if (p < 0.5) {
          const t = easeInOut(p * 2);
          y1 = sY1 + (mY1 - sY1) * t; y2 = sY2 + (mY2 - sY2) * t;
        } else {
          const t = easeInOut((p - 0.5) * 2);
          y1 = mY1 + (eY1 - mY1) * t; y2 = mY2 + (eY2 - mY2) * t;
        }
        set(y1, y2);
        if (p < 1) requestAnimationFrame(frame); else set(eY1, eY2);
      };
      requestAnimationFrame(frame);
    }, delay * 1000);
  }

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    animateLine(10, 10, 8.5, 11.5, 10, 10, 0.6, 0.2, (y1, y2) => setL1({ y1, y2 }));
    animateLine(10, 10, 8.5, 11.5, 10, 10, 0.6, 0.1, (y1, y2) => setL2({ y1, y2 }));
    animateLine(10, 10, 8.5, 11.5, 10, 10, 0.6, 0.0, (y1, y2) => setL3({ y1, y2 }));
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="message-square-more" role="img" onMouseEnter={handleMouseEnter}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
        className="message-square-more-icon">
        <g className={`message-square-more-group${isAnimating ? ' animate' : ''}`}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="16" y1={l1.y1} x2="16" y2={l1.y2} />
          <line x1="12" y1={l2.y1} x2="12" y2={l2.y2} />
          <line x1="8" y1={l3.y1} x2="8" y2={l3.y2} />
        </g>
      </svg>
    </div>
  );
}
