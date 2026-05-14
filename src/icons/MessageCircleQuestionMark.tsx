import { useState, useRef } from 'react';
import './MessageCircleQuestionMark.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MessageCircleQuestionMark({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="message-circle-question-mark"
    	role="img"
    	onMouseEnter={handleMouseEnter}
    >
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
    	>
    		<g className={`message-circle-question-group${isAnimating ? ' animate' : ''}`} >
    			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" className="path2" />
    			<path d="M12 17h.01" />
    		</g>
    	</svg>
    </div>
  );
}
