import { useState, useRef } from 'react';
import './GripVertical.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

const circles = [
		{ cx: 9, cy: 5, delay: 0 }, // Left top
		{ cx: 15, cy: 5, delay: 0.05 }, // Right top
		{ cx: 9, cy: 12, delay: 0.1 }, // Left center
		{ cx: 15, cy: 12, delay: 0.15 }, // Right center
		{ cx: 9, cy: 19, delay: 0.2 }, // Left bottom
		{ cx: 15, cy: 19, delay: 0.25 } // Right bottom
	];

export default function GripVertical({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    timerRef.current = setTimeout(() => setIsAnimating(false), 1600);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="grip-vertical" role="img" onMouseEnter={handleMouseEnter}>
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
    		className="grip-vertical-icon"
    	>
    		{circles.map(({ cx, cy, delay }, _i) => (
                <circle key={_i}
    			 cx={cx}
    			 cy={cy}
    				r="1"
    				className={`grip-circle${isAnimating ? ' animate' : ''}`} style={{ animationDelay: `${delay}s` }} />
              ))}
    	</svg>
    </div>
  );
}
