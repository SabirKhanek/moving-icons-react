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

export default function SlidersVertical({
  color = 'currentColor',
  size = 28,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const [l1ay2, setL1ay2] = useState(14);
  const [l1by1, setL1by1] = useState(10);
  const [l1cy, setL1cy] = useState(14);
  const [l2ay2, setL2ay2] = useState(12);
  const [l2by1, setL2by1] = useState(8);
  const [l2cy, setL2cy] = useState(8);
  const [l3ay2, setL3ay2] = useState(12);
  const [l3by1, setL3by1] = useState(16);
  const [l3cy, setL3cy] = useState(16);

  const handleMouseEnter = () => {
    setIsAnimating(true);
    Promise.all([
      animateValue(14, 10, 400, setL1ay2),
      animateValue(10, 5, 400, setL1by1),
      animateValue(14, 9, 400, setL1cy),
      animateValue(12, 18, 400, setL2ay2),
      animateValue(8, 13, 400, setL2by1),
      animateValue(8, 14, 400, setL2cy),
      animateValue(12, 4, 400, setL3ay2),
      animateValue(16, 8, 400, setL3by1),
      animateValue(16, 8, 400, setL3cy),
    ]);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
    Promise.all([
      animateValue(l1ay2, 14, 400, setL1ay2),
      animateValue(l1by1, 10, 400, setL1by1),
      animateValue(l1cy, 14, 400, setL1cy),
      animateValue(l2ay2, 12, 400, setL2ay2),
      animateValue(l2by1, 8, 400, setL2by1),
      animateValue(l2cy, 8, 400, setL2cy),
      animateValue(l3ay2, 12, 400, setL3ay2),
      animateValue(l3by1, 16, 400, setL3by1),
      animateValue(l3cy, 16, 400, setL3cy),
    ]);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="sliders-vertical" role="img"
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
        className="sliders-icon">
        <line x1="4" x2="4" y1="21" y2={l1ay2} />
        <line x1="4" x2="4" y1={l1by1} y2="3" />
        <line x1="2" x2="6" y1={l1cy} y2={l1cy} />
        <line x1="12" x2="12" y1="21" y2={l2ay2} />
        <line x1="12" x2="12" y1={l2by1} y2="3" />
        <line x1="10" x2="14" y1={l2cy} y2={l2cy} />
        <line x1="20" x2="20" y1="3" y2={l3ay2} />
        <line x1="20" x2="20" y1={l3by1} y2="21" />
        <line x1="18" x2="22" y1={l3cy} y2={l3cy} />
      </svg>
    </div>
  );
}
