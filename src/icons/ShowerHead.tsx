import { useState } from 'react';
import './ShowerHead.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

const dropPath = [
		{ id: 'drop1', d: 'M14 17v.01', delay: 0 },
		{ id: 'drop2', d: 'M10 16v.01', delay: 0.2 },
		{ id: 'drop3', d: 'M13 13v.01', delay: 0.4 },
		{ id: 'drop4', d: 'M16 10v.01', delay: 0.6 },
		{ id: 'drop5', d: 'M11 20v.01', delay: 0.8 },
		{ id: 'drop6', d: 'M17 14v.01', delay: 1 },
		{ id: 'drop7', d: 'M20 11v.01', delay: 1.2 }
	];

export default function ShowerHead({
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
    	aria-label="shower-head"
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
    		className="shower-head-icon"
    	>
    		<path d="m4 4 2.5 2.5" />
    		<path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
    		<path d="M15 5 5 15" />
    		<g className="drops">
    			{dropPath.map(({ id, d, delay }, _i) => (
                <path key={id} id={id} d={d} className={`drop${isAnimating ? ' animate' : ''}`} style={{ animationDelay: `${delay}s` }} />
              ))}
    		</g>
    	</svg>
    </div>
  );
}
