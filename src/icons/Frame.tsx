import { useState } from 'react';
import './Frame.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Frame({
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
    	aria-label="frame"
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
    	>
    		<line
    			className={`${isAnimating ? 'animate-line' : ''}`}
    			x1="22"
    			x2="2"
    			y1="6"
    			y2="6" style={{ transform: isAnimating ? 'translateY(-4px)' : 'translateY(0)', transition: 'transform 0.17s ease-in-out' }}
    		/>
    		<line
    			className={`${isAnimating ? 'animate-line' : ''}`}
    			x1="22"
    			x2="2"
    			y1="18"
    			y2="18" style={{ transform: isAnimating ? 'translateY(4px)' : 'translateY(0)', transition: 'transform 0.17s ease-in-out' }}
    		/>
    		<line
    			className={`${isAnimating ? 'animate-line' : ''}`}
    			x1="6"
    			x2="6"
    			y1="2"
    			y2="22" style={{ transform: isAnimating ? 'translateX(-4px)' : 'translateX(0)', transition: 'transform 0.17s ease-in-out' }}
    		/>
    		<line
    			className={`${isAnimating ? 'animate-line' : ''}`}
    			x1="18"
    			x2="18"
    			y1="2"
    			y2="22" style={{ transform: isAnimating ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.17s ease-in-out' }}
    		/>
    	</svg>
    </div>
  );
}
