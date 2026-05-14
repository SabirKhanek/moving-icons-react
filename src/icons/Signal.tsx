import { useState, useRef } from 'react';
import './Signal.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Signal({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="signal" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`signal-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M2 20h.01" />
    		<path d="M7 20v-4" className="signal-level signal-line-1" />
    		<path d="M12 20v-8" className="signal-level signal-line-2" />
    		<path d="M17 20V8" className="signal-level signal-line-3" />
    		<path d="M22 4v16" className="signal-level signal-line-4" />
    	</svg>
    </div>
  );
}
