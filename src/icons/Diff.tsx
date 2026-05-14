import { useState, useRef } from 'react';
import './Diff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Diff({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 750);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="diff" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`diff${isAnimating ? ' animate' : ''}`} >
    		<path d="M12 3v14" className="vertical" />
    		<path d="M5 10h14" className="horizontal-top" />
    		<path d="M5 21h14" className="horizontal-bottom" />
    	</svg>
    </div>
  );
}
