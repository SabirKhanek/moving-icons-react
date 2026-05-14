import { useState, useRef } from 'react';
import './CalendarDays.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

const DOTS = [
		{ cx: 8, cy: 14 },
		{ cx: 12, cy: 14 },
		{ cx: 16, cy: 14 },
		{ cx: 8, cy: 18 },
		{ cx: 12, cy: 18 },
		{ cx: 16, cy: 18 }
	];

export default function CalendarDays({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1400);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="calendar-days" role="img" onMouseEnter={handleMouseEnter}>
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
    		<path d="M8 2v4" />
    		<path d="M16 2v4" />
    		<rect width="18" height="18" x="3" y="4" rx="2" />
    		<path d="M3 10h18" />
    		{DOTS.map((dot, index) => (
                <circle key={index}
    				cx={dot.cx}
    				cy={dot.cy}
    				r="1"
    				fill={color}
    				stroke="none"
    				className={`dot${isAnimating ? ' animate' : ''}`} style={{ animationDelay: `${index * 0.17}s` }} />
              ))}
    	</svg>
    </div>
  );
}
