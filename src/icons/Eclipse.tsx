import { useState } from 'react';
import './Eclipse.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Eclipse({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);

  const handleMouseEnter = () => setIsAnimating(true);
  const handleMouseLeave = () => setIsAnimating(false);

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="eclipse"
    	role="img"
    	onMouseEnter={handleMouseEnter}
    	onMouseLeave={handleMouseLeave}
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
    		className={`eclipse-icon${isAnimating ? ' animate' : ''}`} >
    		<defs>
    			<clipPath id="clipSun" clipPathUnits="userSpaceOnUse">
    				<circle cx="12" cy="12" r="10" />
    			</clipPath>
    		</defs>
    
    		<circle cx="12" cy="12" r="10" className="sun" />
    
    		<g clipPath="url(#clipSun)">
    			<path d="M12 2a7 7 0 1 0 10 10" className="moon" />
    		</g>
    	</svg>
    </div>
  );
}
