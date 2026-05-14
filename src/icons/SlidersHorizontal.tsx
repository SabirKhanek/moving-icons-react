import { useState } from 'react';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

function animateValue(
  start: number, end: number, duration: number,
  cb: (v: number) => void
): Promise<void> {
  return new Promise(resolve => {
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      cb(start + (end - start) * e);
      p < 1 ? requestAnimationFrame(tick) : resolve();
    };
    requestAnimationFrame(tick);
  });
}

export default function SlidersHorizontal({
  color = 'currentColor',
  size = 28,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const [l1ax2, setL1ax2] = useState(14);
  const [l1bx1, setL1bx1] = useState(10);
  const [l1cx, setL1cx] = useState(14);
  const [l2ax2, setL2ax2] = useState(12);
  const [l2bx1, setL2bx1] = useState(8);
  const [l2cx, setL2cx] = useState(8);
  const [l3ax2, setL3ax2] = useState(12);
  const [l3bx1, setL3bx1] = useState(16);
  const [l3cx, setL3cx] = useState(16);

  const handleMouseEnter = () => {
    setIsAnimating(true);
    Promise.all([
      animateValue(14, 10, 400, setL1ax2),
      animateValue(10, 5, 400, setL1bx1),
      animateValue(14, 9, 400, setL1cx),
      animateValue(12, 18, 400, setL2ax2),
      animateValue(8, 13, 400, setL2bx1),
      animateValue(8, 14, 400, setL2cx),
      animateValue(12, 4, 400, setL3ax2),
      animateValue(16, 8, 400, setL3bx1),
      animateValue(16, 8, 400, setL3cx),
    ]);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
    Promise.all([
      animateValue(l1ax2, 14, 400, setL1ax2),
      animateValue(l1bx1, 10, 400, setL1bx1),
      animateValue(l1cx, 14, 400, setL1cx),
      animateValue(l2ax2, 12, 400, setL2ax2),
      animateValue(l2bx1, 8, 400, setL2bx1),
      animateValue(l2cx, 8, 400, setL2cx),
      animateValue(l3ax2, 12, 400, setL3ax2),
      animateValue(l3bx1, 16, 400, setL3bx1),
      animateValue(l3cx, 16, 400, setL3cx),
    ]);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="sliders-horizontal" role="img"
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
        className="sliders-icon">
        <line x1="21" x2={l1ax2} y1="4" y2="4" />
        <line x1={l1bx1} x2="3" y1="4" y2="4" />
        <line x1={l1cx} x2={l1cx} y1="2" y2="6" />
        <line x1="21" x2={l2ax2} y1="12" y2="12" />
        <line x1={l2bx1} x2="3" y1="12" y2="12" />
        <line x1={l2cx} x2={l2cx} y1="10" y2="14" />
        <line x1="3" x2={l3ax2} y1="20" y2="20" />
        <line x1={l3bx1} x2="21" y1="20" y2="20" />
        <line x1={l3cx} x2={l3cx} y1="18" y2="22" />
      </svg>
    </div>
  );
}
