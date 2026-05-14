import { useState } from 'react';
import './Images.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Images({
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
    	aria-label="images"
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
    		<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" className={`images-path-1${isAnimating ? ' animate' : ''}`} />
    		<path
    			d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"
    			className={`images-path-2${isAnimating ? ' animate' : ''}`} />
    		<circle cx="13" cy="7" r="1" fill="currentColor" className={`images-circle${isAnimating ? ' animate' : ''}`} />
    		<rect x="8" y="2" width="14" height="14" rx="2" className={`images-rect${isAnimating ? ' animate' : ''}`} />
    	</svg>
    </div>
  );
}
