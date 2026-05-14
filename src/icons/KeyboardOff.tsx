import { useState, useRef } from 'react';
import './KeyboardOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function KeyboardOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="keyboard-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`keyboard-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M 20 4 A2 2 0 0 1 22 6" />
    		<path d="M 22 6 L 22 16.41" />
    		<path d="M 7 16 L 16 16" />
    		<path d="M 9.69 4 L 20 4" />
    		<path d="M14 8h.01" />
    		<path d="M18 8h.01" />
    		<path d="m2 2 20 20" />
    		<path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
    		<path d="M6 8h.01" />
    		<path d="M8 12h.01" />
    	</svg>
    </div>
  );
}
