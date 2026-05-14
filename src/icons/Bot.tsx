import { useState } from 'react';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Bot({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const [eyeY1, setEyeY1] = useState(13);
  const [eyeY2, setEyeY2] = useState(15);

  function animateEyes(
    sY1: number, sY2: number, eY1: number, eY2: number,
    duration: number, delay = 0
  ): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          setEyeY1(sY1 + (eY1 - sY1) * e);
          setEyeY2(sY2 + (eY2 - sY2) * e);
          p < 1 ? requestAnimationFrame(tick) : resolve();
        };
        requestAnimationFrame(tick);
      }, delay);
    });
  }

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    animateEyes(13, 15, 14, 14, 250, 200)
      .then(() => animateEyes(14, 14, 13, 15, 250))
      .then(() => setIsAnimating(false));
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="bot" role="img" onMouseEnter={handleMouseEnter}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
        className={`bot-icon${isAnimating ? ' animate' : ''}`}>
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <line x1="15" y1={eyeY1} x2="15" y2={eyeY2} className="eye-right" />
        <line x1="9" y1={eyeY1} x2="9" y2={eyeY2} className="eye-left" />
      </svg>
    </div>
  );
}
