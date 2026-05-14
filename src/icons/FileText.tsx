import { useState, useRef } from 'react';
import './FileText.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function FileText({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="file-text" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`file-text-icon${isAnimating ? ' animate' : ''}`} >
    		<path
    			d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    		/>
    		<path d="M14 2v5a1 1 0 0 0 1 1h5" />
    		<path d="M8 9h2" className="text-line text-line-1" />
    		<path d="M8 13h8" className="text-line text-line-2" />
    		<path d="M8 17h8" className="text-line text-line-3" />
    	</svg>
    </div>
  );
}
