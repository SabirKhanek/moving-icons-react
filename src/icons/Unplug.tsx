import { useState } from 'react';
import './Unplug.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Unplug({
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
    	aria-label="unplug"
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
    		<g className={`line-1${isAnimating ? ' animate' : ''}`} >
    			<path d="M19 5l3 -3" />
    		</g>
    		<g className={`line-2${isAnimating ? ' animate' : ''}`} >
    			<path d="m2 22 3-3" />
    		</g>
    		<path
    			className={`socket${isAnimating ? ' animate' : ''}`} d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
    		/>
    		<g className={`spark-1${isAnimating ? ' animate' : ''}`} >
    			<path d="M7.5 13.5l2.5 -2.5" />
    		</g>
    		<g className={`spark-2${isAnimating ? ' animate' : ''}`} >
    			<path d="M10.5 16.5l2.5 -2.5" />
    		</g>
    		<path
    			className={`plug${isAnimating ? ' animate' : ''}`} d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
    		/>
    	</svg>
    </div>
  );
}
