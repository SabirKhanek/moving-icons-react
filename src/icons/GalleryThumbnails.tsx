import { useState, useRef } from 'react';
import './GalleryThumbnails.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function GalleryThumbnails({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 850);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="gallery-thumbnails" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`gallery-thumbnails-icon${isAnimating ? ' animate' : ''}`} >
    		<rect width="18" height="14" x="3" y="3" rx="2" />
    		{['M4 21h1', 'M9 21h1', 'M14 21h1', 'M19 21h1'].map((d, index) => (
                <path key={index} d={d} className="thumbnail-line" style={{ '--index': `${index + 1}` }} />
              ))}
    	</svg>
    </div>
  );
}
