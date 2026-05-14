import { useState, useRef } from 'react';
import './MicOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MicOff({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="mic-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`mic-off${isAnimating ? ' animate' : ''}`} >
    		<line x1="2" x2="22" y1="2" y2="22" />
    		<path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
    		<path d="M5 10v2a7 7 0 0 0 12 5" />
    		<path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
    		<path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    		<line x1="12" x2="12" y1="19" y2="22" />
    	</svg>
    </div>
  );
}
