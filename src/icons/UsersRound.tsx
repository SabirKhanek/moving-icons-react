import { useState, useRef } from 'react';
import './UsersRound.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function UsersRound({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="users-round" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`users-round-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M18 21a8 8 0 0 0-16 0" className="users-round-path1" />
    		<circle cx="10" cy="8" r="5" className="users-round-circle" />
    		<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" className="users-round-path2" />
    	</svg>
    </div>
  );
}
