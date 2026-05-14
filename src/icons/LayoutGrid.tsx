import { useState, useRef } from 'react';
import './LayoutGrid.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function LayoutGrid({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 650);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="layout-grid" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`layout-grid-icon${isAnimating ? ' animate' : ''}`} >
    		<rect width="7" height="7" x="3" y="3" rx="1" className="top-left-panel" />
    		<rect width="7" height="7" x="14" y="3" rx="1" className="top-right-panel" />
    		<rect width="7" height="7" x="14" y="14" rx="1" className="bottom-right-panel" />
    		<rect width="7" height="7" x="3" y="14" rx="1" className="bottom-left-panel" />
    	</svg>
    </div>
  );
}
