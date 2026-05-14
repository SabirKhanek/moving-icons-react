import { useState, useRef } from 'react';
import './Vibrate.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Vibrate({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    timerRef.current = setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="vibrate" role="img" onMouseEnter={handleMouseEnter}>
    	<svg
    		xmlns="http://www.w3.org/2000/svg"
    		width={size}
    		height={size}
    		viewBox="0 0 24 24"
    		fill="none"
    		stroke={color}
    		strokeWidth={strokeWidth}
    		strokeLinecap="round"
    		strokeLinejoin="round"
    	>
    		<path d="m2 8 2 2-2 2 2 2-2 2" />
    		<path d="m22 8-2 2 2 2-2 2 2 2" />
    		<rect width="8" height="14" x="8" y="5" rx="1" className={`vibrate-rect${isAnimating ? ' animate' : ''}`} />
    	</svg>
    </div>
  );
}
