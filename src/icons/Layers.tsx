import { useState, useRef } from 'react';
import './Layers.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Layers({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="layers" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`layers-icon${isAnimating ? ' animate' : ''}`} >
    		<path
    			d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
    		/>
    		<path
    			d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
    			className={`layer layer-bottom${isAnimating ? ' animate' : ''}`} />
    		<path
    			d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
    			className={`layer layer-middle${isAnimating ? ' animate' : ''}`} />
    	</svg>
    </div>
  );
}
