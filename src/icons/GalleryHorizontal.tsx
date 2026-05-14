import { useState, useRef } from 'react';
import './GalleryHorizontal.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function GalleryHorizontal({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="gallery-horizontal" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`gallery-horizontal-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M2 3v18" className="gallery-path gallery-path-1" />
    		<rect width="12" height="18" x="6" y="3" rx="2" className="gallery-rect" />
    		<path d="M22 3v18" className="gallery-path gallery-path-2" />
    	</svg>
    </div>
  );
}
