import { useState } from 'react';
import './TextCursorInput.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function TextCursorInput({
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
    	aria-label="text-cursor-input"
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
    		className="text-cursor-input-icon"
    	>
    		<path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
    		<path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
    		<g className={`animated-group${isAnimating ? ' animate' : ''}`} >
    			<path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" />
    			<path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" />
    			<path d="M9 7v10" />
    		</g>
    	</svg>
    </div>
  );
}
