import { useState } from 'react';
import './AlarmClock.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function AlarmClock({
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
    	aria-label="alarm-clock"
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
    		className={`alarm-clock-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M18 20.5L19.5 22" className="primary-path" />
    		<path d="M6 20.5L4.5 22" className="primary-path" />
    		<path
    			d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z"
    			className="primary-path"
    		/>
    		<path
    			d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898"
    			className="primary-path"
    		/>
    		<path d="M18 2L21.747 5.31064" className="secondary-path" />
    		<path d="M6 2L2.25304 5.31064" className="secondary-path" />
    	</svg>
    </div>
  );
}
