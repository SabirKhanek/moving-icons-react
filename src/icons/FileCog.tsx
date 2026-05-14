import { useState } from 'react';
import './FileCog.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function FileCog({
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
    	aria-label="file-cog"
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
    		className="file-cog-icon"
    		><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path
    			d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"
    		/><g className={`cog-group${isAnimating ? ' animate' : ''}`} ><path d="m3.2 12.9-.9-.4" /><path d="m3.2 15.1-.9.4" /><path d="m4.9 11.2-.4-.9" /><path
    				d="m4.9 16.8-.4.9"
    			/><path d="m7.5 10.3-.4.9" /><path d="m7.5 17.7-.4-.9" /><path d="m9.7 12.5-.9.4" /><path
    				d="m9.7 15.5-.9-.4"
    			/><circle cx="6" cy="14" r="3" /></g
    		></svg
    	>
    </div>
  );
}
