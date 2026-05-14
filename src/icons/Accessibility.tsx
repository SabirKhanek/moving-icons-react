import { useState, useRef } from 'react';
import './Accessibility.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Accessibility({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1400);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="accessibility" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`accessibility-icon${isAnimating ? ' animate' : ''}`} >
    		<circle cx="16" cy="4" r="1" className="accessibility-circle" />
    		<g className="accessibility-group1">
    			<path d="M18,19l1-7-6,1" />
    			<path d="M8,5l5.5,3-2.4,3.5" />
    			<path d="M8 5 L5 8" className="accessibility-path3" />
    		</g>
    		<g className="accessibility-group2">
    			<path d="M4.2,14.5c-.8,2.6.7,5.4,3.3,6.2,1.2.4,2.4.3,3.6-.2" />
    			<path d="M13.8,17.5c.8-2.6-.7-5.4-3.3-6.2-1.2-.4-2.4-.3-3.6.2" />
    		</g>
    		<path d="M13,13.1c-.5-.7-1.1-1.2-1.9-1.6" />
    	</svg>
    </div>
  );
}
