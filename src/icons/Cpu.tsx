import { useState, useRef } from 'react';
import './Cpu.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Cpu({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="cpu" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`cpu-icon${isAnimating ? ' animate' : ''}`} >
    		<rect width="16" height="16" x="4" y="4" rx="2" />
    		<rect width="6" height="6" x="9" y="9" rx="1" />
    		<path d="M15 2v2" className="vertical-line" />
    		<path d="M15 20v2" className="vertical-line" />
    		<path d="M2 15h2" className="horizontal-line" />
    		<path d="M2 9h2" className="horizontal-line" />
    		<path d="M20 15h2" className="horizontal-line" />
    		<path d="M20 9h2" className="horizontal-line" />
    		<path d="M9 2v2" className="vertical-line" />
    		<path d="M9 20v2" className="vertical-line" />
    	</svg>
    </div>
  );
}
