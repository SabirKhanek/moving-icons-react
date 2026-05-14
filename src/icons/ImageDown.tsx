import { useState } from 'react';
import './ImageDown.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ImageDown({
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
    	onMouseEnter={handleMouseEnter}
    	onMouseLeave={handleMouseLeave}
    	aria-label="image-down"
    	role="img"
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
    		className="image-down"
    	>
    		<path
    			d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
    		/>
    		<circle cx="9" cy="9" r="2" />
    		<g className={`${isAnimating ? 'animate' : ''}`}>
    			<path d="m14 19 3 3v-5.5" />
    			<path d="m17 22 3-3" />
    		</g>
    	</svg>
    </div>
  );
}
