import { useState, useRef } from 'react';
import './Orbit.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Orbit({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 3000);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="orbit" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`orbit-icon${isAnimating ? ' animate' : ''}`} >
    		<circle cx="12" cy="12" r="3" /><circle cx="19" cy="5" r="2" /><circle
    			cx="5"
    			cy="19"
    			r="2"
    		/><path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" /><path
    			d="M13.5 2.1a10 10 0 0 0-9.841 15.416"
    		/>
    	</svg>
    </div>
  );
}
