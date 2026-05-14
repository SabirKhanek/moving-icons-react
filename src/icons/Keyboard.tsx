import { useState, useRef } from 'react';
import './Keyboard.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

const keyboardPaths = [
		{ id: 'key1', d: 'M10 8h.01', delay: 0 },
		{ id: 'key2', d: 'M12 12h.01', delay: 0.05 },
		{ id: 'key3', d: 'M14 8h.01', delay: 0.1 },
		{ id: 'key4', d: 'M16 12h.01', delay: 0.15 },
		{ id: 'key5', d: 'M18 8h.01', delay: 0.2 },
		{ id: 'key6', d: 'M6 8h.01', delay: 0.25 },
		{ id: 'key7', d: 'M7 16h10', delay: 0.3 },
		{ id: 'key8', d: 'M8 12h.01', delay: 0.35 }
	];

export default function Keyboard({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="keyboard" role="img" onMouseEnter={handleMouseEnter}>
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
    		className="keyboard-icon"
    	>
    		<rect width="20" height="16" x="2" y="4" rx="2" />
    		{keyboardPaths.map(({ id, d, delay }, _i) => (
                <path key={id} id={id} d={d} className={`keyboard-key${isAnimating ? ' animate' : ''}`} style={{ animationDelay: `${delay}s` }} />
              ))}
    	</svg>
    </div>
  );
}
