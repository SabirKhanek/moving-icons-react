import { useState, useRef } from 'react';
import './BriefcaseBusiness.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BriefcaseBusiness({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="briefcase-business" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`briefcase-business-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M12 12h.01" className="dot" />
    		<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" className="handle" />
    		<path d="M22 13a18.15 18.15 0 0 1-20 0" className="curve" />
    		<rect width="20" height="14" x="2" y="6" rx="2" className="case" />
    	</svg>
    </div>
  );
}
