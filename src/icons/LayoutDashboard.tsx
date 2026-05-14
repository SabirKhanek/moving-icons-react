import { useState, useRef } from 'react';
import './LayoutDashboard.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function LayoutDashboard({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="layout-dashboard" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`layout-dashboard-icon${isAnimating ? ' animate' : ''}`} >
    		<rect width="7" height="9" x="3" y="3" rx="1" className="top-left-panel" />
    		<rect width="7" height="5" x="14" y="3" rx="1" className="top-right-panel" />
    		<rect width="7" height="9" x="14" y="12" rx="1" className="bottom-right-panel" />
    		<rect width="7" height="5" x="3" y="16" rx="1" className="bottom-left-panel" />
    	</svg>
    </div>
  );
}
