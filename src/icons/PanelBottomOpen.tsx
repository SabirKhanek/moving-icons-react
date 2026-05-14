import { useState, useRef } from 'react';
import './PanelBottomOpen.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function PanelBottomOpen({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="panel-bottom-open" role="img" onMouseEnter={handleMouseEnter}>
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
    		<rect width="18" height="18" x="3" y="3" rx="2" />
    		<path d="M3 15h18" className={`${isAnimating ? 'line' : ''}`} />
    		<path d="m9 10 3-3 3 3" className={`${isAnimating ? 'chevron' : ''}`} />
    	</svg>
    </div>
  );
}
