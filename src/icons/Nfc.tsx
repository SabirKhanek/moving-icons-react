import { useState, useRef } from 'react';
import './Nfc.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Nfc({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="nfc" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`nfc-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" className="nfc-level nfc-line-1" />
    		<path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" className="nfc-level nfc-line-2" />
    		<path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" className="nfc-level nfc-line-3" />
    		<path d="M16.37 2a20.16 20.16 0 0 1 0 20" className="nfc-level nfc-line-4" />
    	</svg>
    </div>
  );
}
