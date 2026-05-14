import { useState } from 'react';
import './Binary.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Binary({
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
    	aria-label="binary"
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
    		className={`binary-icon${isAnimating ? ' animate' : ''}`} >
    		<rect x={14} y={14} width={4} height={6} rx={2} className="binary-rect1" />
    		<rect x={6} y={4} width={4} height={6} rx={2} className="binary-rect2" />
    		<path d="M6 20h4 M6 14h2v6" className="binary-path1" />
    		<path d="M14 4h2v6 M14 10h4" className="binary-path2" />
    	</svg>
    </div>
  );
}
