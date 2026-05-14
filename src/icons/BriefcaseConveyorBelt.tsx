import { useState, useRef } from 'react';
import './BriefcaseConveyorBelt.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BriefcaseConveyorBelt({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="briefcase-conveyor-belt"
    	role="img"
    	onMouseEnter={handleMouseEnter}
    >
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
    		className={`briefcase-conveyor-belt-icon${isAnimating ? ' animate' : ''}`} >
    		<g className="briefcase-group bg-red-500">
    			<path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" className="briefcase-body" />
    			<rect x="4" y="6" width="16" height="10" rx="2" className="briefcase-case" />
    		</g>
    		<path d="M21 20H3" className="belt-line" />
    		<path d="M6 20v2" />
    		<path d="M10 20v2" />
    		<path d="M14 20v2" />
    		<path d="M18 20v2" />
    	</svg>
    </div>
  );
}
