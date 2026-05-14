import { useState } from 'react';
import './Telescope.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Telescope({
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
    	aria-label="telescope"
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
    		<g className={`telescope-icon${isAnimating ? ' animate' : ''}`} >
    			<path
    				d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
    			/>
    			<path d="m13.56 11.747 4.332-.924" />
    			<path
    				d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
    			/>
    			<path d="m6.158 8.633 1.114 4.456" />
    		</g>
    
    		<path d="m16 21-3.105-6.21" />
    		<path d="m8 21 3.105-6.21" />
    		<circle cx="12" cy="13" r="2" />
    	</svg>
    </div>
  );
}
