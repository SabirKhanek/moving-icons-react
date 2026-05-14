import { useState, useRef } from 'react';
import './ListTodo.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ListTodo({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="list-todo" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`list-todo-icon${isAnimating ? ' animate' : ''}`} >
    		<rect x="3" y="5" width="6" height="6" rx="1" />
    		<path d="M3 17l2 2 4-4" className="check-path" />
    		<path d="M13 6h8" />
    		<path d="M13 12h8" />
    		<path d="M13 18h8" />
    	</svg>
    </div>
  );
}
