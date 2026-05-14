import { useState } from 'react';
import './FileSliders.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function FileSliders({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);

  const handleMouseEnter = () => setIsAnimating(true);
  const handleMouseLeave = () => setIsAnimating(false);

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="file-sliders"
    	role="img"
    	onMouseEnter={handleMouseEnter}
    	onMouseLeave={handleMouseLeave}
    >
    	<svg
    		xmlns="http://www.w3.org/2000/svg"
    		width="24"
    		height="24"
    		viewBox="0 0 24 24"
    		fill="none"
    		stroke="currentColor"
    		strokeWidth="2"
    		strokeLinecap="round"
    		strokeLinejoin="round"
    		className="lucide lucide-file-sliders-icon lucide-file-sliders"
    	>
    		<path
    			d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    		/>
    		<path d="M14 2v5a1 1 0 0 0 1 1h5" />
    		<path d="M8 12h8" />
    		<path d="M10 11v2" className={`${isAnimating ? 'animate-line1' : ''}`} />
    		<path d="M8 17h8" />
    		<path d="M14 16v2" className={`${isAnimating ? 'animate-line2' : ''}`} />
    	</svg>
    </div>
  );
}
