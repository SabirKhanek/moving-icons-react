import { useState, useRef } from 'react';
import './BadgeQuestionMark.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BadgeQuestionMark({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="badge-question-mark" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`${isAnimating ? 'animate-icon' : ''}`}
    	>
    		<path
    			d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    		/>
    		<g className={`${isAnimating ? 'animate-path' : ''}`}>
    			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    			<line x1="12" x2="12.01" y1="17" y2="17" />
    		</g>
    	</svg>
    </div>
  );
}
