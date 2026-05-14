import { useState, useRef } from 'react';
import './CameraOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function CameraOff({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="camera-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`camera-off${isAnimating ? ' animate' : ''}`} >
    		<path d="m2 2 20 20" />
    		<path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" />
    		<path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" />
    		<path d="M14.121 15.121A3 3 0 1 1 9.88 10.88" />
    	</svg>
    </div>
  );
}
