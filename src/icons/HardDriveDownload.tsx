import { useState } from 'react';
import './HardDriveDownload.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function HardDriveDownload({
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
    	aria-label="hard-drive-download"
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
    	>
    		<g className={`${isAnimating ? 'animate' : ''}`}>
    			<path d="M12 2v8" />
    			<path d="m16 6-4 4-4-4" />
    		</g>
    		<rect width="20" height="8" x="2" y="14" rx="2" />
    		<path d="M6 18h.01" />
    		<path d="M10 18h.01" />
    	</svg>
    </div>
  );
}
