import { useState, useRef } from 'react';
import './WifiPen.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function WifiPen({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="wifi-pen" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`wifi-pen-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M2 8.82a15 15 0 0 1 20 0" className="wifi-level wifi-line-3" />
    		<path
    			d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    			className=""
    		/>
    		<path d="M5 12.859a10 10 0 0 1 10.5-2.222" className="wifi-level wifi-line-2" />
    		<path d="M8.5 16.429a5 5 0 0 1 3-1.406" className="wifi-level wifi-line-1" />
    	</svg>
    </div>
  );
}
