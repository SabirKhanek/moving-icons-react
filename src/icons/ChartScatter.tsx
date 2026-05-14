import { useState, useRef } from 'react';
import './ChartScatter.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

const dots = [
		{ cx: 7.5, cy: 7.5, delay: 2 },
		{ cx: 18.5, cy: 5.5, delay: 5 },
		{ cx: 11.5, cy: 11.5, delay: 3 },
		{ cx: 7.5, cy: 16.5, delay: 1 },
		{ cx: 17.5, cy: 14.5, delay: 4 }
	];

export default function ChartScatter({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 900);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="chart-scatter" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`chart-scatter-icon${isAnimating ? ' animate' : ''}`} >
    		{dots.map((dot, i) => (
                <circle key={i}
    				cx={dot.cx}
    				cy={dot.cy}
    				r="0.5"
    				fill={color}
    				className="dot"
    				style={{ '--delay': `${dot.delay * 0.15}s` }} />
              ))}
    		<path d="M3 3v16a2 2 0 0 0 2 2h16" />
    	</svg>
    </div>
  );
}
