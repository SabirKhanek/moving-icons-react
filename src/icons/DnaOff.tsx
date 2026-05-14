import { useState, useRef } from 'react';
import './DnaOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function DnaOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="dna-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`dna-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
    		<path d="m17 6-2.891-2.891" />
    		<path d="M2 15c3.333-3 6.667-3 10-3" />
    		<path d="m2 2 20 20" />
    		<path d="m20 9 .891.891" />
    		<path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
    		<path d="M3.109 14.109 4 15" />
    		<path d="m6.5 12.5 1 1" />
    		<path d="m7 18 2.891 2.891" />
    		<path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
    	</svg>
    </div>
  );
}
