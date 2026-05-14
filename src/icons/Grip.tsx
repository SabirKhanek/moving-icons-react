import { useState, useRef } from 'react';
import './Grip.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

const circles = [
		{ cx: 19, cy: 5, delay: 0 }, // Top right
		{ cx: 12, cy: 5, delay: 0.05 }, // Top middle
		{ cx: 19, cy: 12, delay: 0.1 }, // Middle right
		{ cx: 5, cy: 5, delay: 0.15 }, // Top left
		{ cx: 12, cy: 12, delay: 0.2 }, // Center
		{ cx: 19, cy: 19, delay: 0.25 }, // Bottom right
		{ cx: 5, cy: 12, delay: 0.3 }, // Middle left
		{ cx: 12, cy: 19, delay: 0.35 }, // Bottom middle
		{ cx: 5, cy: 19, delay: 0.4 } // Bottom left
	];

export default function Grip({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="grip" role="img" onMouseEnter={handleMouseEnter}>
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
    		className="grip-icon"
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
