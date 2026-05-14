import { useState } from 'react';
import './UnfoldVertical.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function UnfoldVertical({
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
    	aria-label="unfold-vertical"
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
    		className="unfold-vertical-icon"
    	>
    		<path d="M4 12H2 M10 12H8 M16 12h-2 M22 12h-2" />
    		<g className={`${isAnimating ? 'move-up' : ''}`}>
    			<path d="M12 8V2" />
    			<path d="m15 5-3-3-3 3" />
    		</g>
    		<g className={`${isAnimating ? 'move-down' : ''}`}>
    			<path d="M12 22v-6" />
    			<path d="m15 19-3 3-3-3" />
    		</g>
    	</svg>
    </div>
  );
}
