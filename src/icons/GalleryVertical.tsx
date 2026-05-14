import { useState, useRef } from 'react';
import './GalleryVertical.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function GalleryVertical({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="gallery-vertical" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`gallery-vertical-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M3 2h18" className="gallery-path gallery-path-1" />
    		<rect width="18" height="12" x="3" y="6" rx="2" className="gallery-rect" />
    		<path d="M3 22h18" className="gallery-path gallery-path-2" />
    	</svg>
    </div>
  );
}
