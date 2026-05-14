import { useState, useRef } from 'react';
import './SmartphoneNfc.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function SmartphoneNfc({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="smartphone-nfc" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`smartphone-nfc-icon${isAnimating ? ' animate' : ''}`} >
    		<rect width="7" height="12" x="2" y="6" rx="1" />
    		<path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" className="nfc-level nfc-line-1" />
    		<path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" className="nfc-level nfc-line-2" />
    		<path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" className="nfc-level nfc-line-3" />
    	</svg>
    </div>
  );
}
