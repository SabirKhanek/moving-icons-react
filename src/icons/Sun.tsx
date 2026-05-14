import { useState, useRef } from 'react';
import './Sun.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

const sunRays = [
		'M12 2v2',
		'm19.07 4.93-1.41 1.41',
		'M20 12h2',
		'm17.66 17.66 1.41 1.41',
		'M12 20v2',
		'm6.34 17.66-1.41 1.41',
		'M2 12h2',
		'm4.93 4.93 1.41 1.41'
	];

export default function Sun({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1100);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="sun" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`sun-icon${isAnimating ? ' animate' : ''}`} >
    		<circle cx="12" cy="12" r="4" />
    		{sunRays.map((d, index) => (
                <path key={index} d={d} className="sun-ray" style={{ '--index': `${index + 1}` }} />
              ))}
    	</svg>
    </div>
  );
}
