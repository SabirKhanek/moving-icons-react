import { useState, useRef } from 'react';
import './Axis3d.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Axis3d({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 900);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="axis-3d" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`axis-3d-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M4 4v15a1 1 0 0 0 1 1h15" className="axis-3d-path1" />
    		<g className="axis-3d-group">
    			<path d="M4.293 19.707 6 18" className="axis-3d-path2" />
    			<path d="m9 15 1.5-1.5" className="axis-3d-path3" />
    			<path d="M13.5 10.5 15 9" className="axis-3d-path4" />
    		</g>
    	</svg>
    </div>
  );
}
