import { useState, useRef } from 'react';
import './ScanText.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ScanText({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="scan-text" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`scan-text-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M3 7V5a2 2 0 0 1 2-2h2" className="frame" />
    		<path d="M17 3h2a2 2 0 0 1 2 2v2" className="frame" />
    		<path d="M21 17v2a2 2 0 0 1-2 2h-2" className="frame" />
    		<path d="M7 21H5a2 2 0 0 1-2-2v-2" className="frame" />
    		<path d="M7 8h8" className="line line-0" />
    		<path d="M7 12h10" className="line line-1" />
    		<path d="M7 16h6" className="line line-2" />
    	</svg>
    </div>
  );
}
