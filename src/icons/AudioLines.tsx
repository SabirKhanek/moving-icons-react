import { useState, useRef, useCallback } from 'react';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

type LinePos = { y1: number; y2: number };

const orig: LinePos[] = [
  { y1: 10, y2: 13 }, { y1: 6, y2: 17 }, { y1: 3, y2: 21 },
  { y1: 8, y2: 15 }, { y1: 5, y2: 18 }, { y1: 10, y2: 13 },
];

const keyframes: LinePos[][] = [
  [{ y1: 10, y2: 13 }, { y1: 5, y2: 18 }, { y1: 8, y2: 15 }, { y1: 6, y2: 17 }, { y1: 10, y2: 13 }],
  [{ y1: 6, y2: 17 }, { y1: 2, y2: 22 }, { y1: 10, y2: 13 }, { y1: 6, y2: 17 }],
  [{ y1: 3, y2: 21 }, { y1: 6, y2: 17 }, { y1: 3, y2: 21 }, { y1: 8, y2: 15 }, { y1: 3, y2: 21 }],
  [{ y1: 8, y2: 15 }, { y1: 4, y2: 19 }, { y1: 7, y2: 16 }, { y1: 2, y2: 22 }, { y1: 8, y2: 15 }],
  [{ y1: 5, y2: 18 }, { y1: 10, y2: 13 }, { y1: 4, y2: 19 }, { y1: 8, y2: 15 }, { y1: 5, y2: 18 }],
  [{ y1: 10, y2: 13 }, { y1: 8, y2: 15 }, { y1: 5, y2: 18 }, { y1: 10, y2: 13 }],
];

function lerp(kf: LinePos[], t: number): LinePos {
  const n = kf.length - 1;
  const fi = t * n;
  const i = Math.floor(fi);
  const j = Math.min(i + 1, n);
  const u = fi - i;
  return { y1: kf[i].y1 + (kf[j].y1 - kf[i].y1) * u, y2: kf[i].y2 + (kf[j].y2 - kf[i].y2) * u };
}

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }

export default function AudioLines({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const [lines, setLines] = useState<LinePos[]>(orig.map(l => ({ ...l })));
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const backRef = useRef<LinePos[] | null>(null);

  const stopAnim = () => { if (frameRef.current !== null) cancelAnimationFrame(frameRef.current); };

  const tick = useCallback((ts: number) => {
    if (startRef.current === null) startRef.current = ts;
    const elapsed = (ts - startRef.current) / 1000;

    if (backRef.current) {
      const p = Math.min(elapsed / 0.4, 1);
      const e = easeOutCubic(p);
      setLines(backRef.current.map((s, i) => ({
        y1: s.y1 + (orig[i].y1 - s.y1) * e,
        y2: s.y2 + (orig[i].y2 - s.y2) * e,
      })));
      if (p < 1) { frameRef.current = requestAnimationFrame(tick); }
      else { backRef.current = null; setLines(orig.map(l => ({ ...l }))); }
      return;
    }

    const t = (elapsed % 1.5) / 1.5;
    setLines(keyframes.map(kf => lerp(kf, t)));
    frameRef.current = requestAnimationFrame(tick);
  }, []);

  const handleMouseEnter = () => {
    setIsAnimating(true);
    backRef.current = null;
    startRef.current = null;
    frameRef.current = requestAnimationFrame(tick);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
    stopAnim();
    setLines(cur => { backRef.current = cur.map(l => ({ ...l })); return cur; });
    startRef.current = null;
    frameRef.current = requestAnimationFrame(tick);
  };

  const xs = [2, 6, 10, 14, 18, 22];

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="audio-lines" role="img"
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
        className={`audio-lines-icon${isAnimating ? ' animate' : ''}`}>
        {lines.map((l, i) => (
          <line key={i} x1={xs[i]} y1={l.y1} x2={xs[i]} y2={l.y2} />
        ))}
      </svg>
    </div>
  );
}
