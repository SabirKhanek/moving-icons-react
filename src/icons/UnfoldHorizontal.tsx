import { useState } from 'react';
import './UnfoldHorizontal.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function UnfoldHorizontal({
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
    	aria-label="unfold-horizontal"
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
    		className="unfold-horizontal-icon"
    	>
    		<path d="M12 2v2 M12 8v2 M12 14v2 M12 20v2" />
    		<g className={`${isAnimating ? 'move-left' : ''}`}>
    			<path d="M8 12H2" />
    			<path d="m5 9-3 3 3 3" />
    		</g>
    		<g className={`${isAnimating ? 'move-right' : ''}`}>
    			<path d="M16 12h6" />
    			<path d="m19 15 3-3-3-3" />
    		</g>
    	</svg>
    </div>
  );
}
