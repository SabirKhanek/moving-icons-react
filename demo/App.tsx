import { useState, useMemo } from 'react';
import * as Icons from '../src/index';

type IconName = keyof typeof Icons;
const ALL_ICONS = Object.keys(Icons) as IconName[];

export default function App() {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState(32);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [animateAll, setAnimateAll] = useState(false);

  const filtered = useMemo(
    () =>
      ALL_ICONS.filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <div style={{ minHeight: '100dvh', padding: '32px 24px' }}>
      {/* Header */}
      <div style={{ maxWidth: 900, margin: '0 auto 32px' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 6 }}>
          Moving Icons{' '}
          <span style={{ color: '#f97316', fontWeight: 400, fontSize: 18 }}>
            React
          </span>
        </h1>
        <p style={{ color: '#888', fontSize: 14, marginBottom: 24 }}>
          {ALL_ICONS.length} animated icons · hover any icon to trigger its
          animation
        </p>

        {/* Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <input
            type="search"
            placeholder="Search icons…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: '1 1 220px',
              padding: '8px 14px',
              background: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: 8,
              color: '#e5e5e5',
              fontSize: 14,
              outline: 'none',
            }}
          />

          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#aaa' }}>
            Size
            <input
              type="range"
              min={16}
              max={64}
              value={size}
              onChange={(e) => setSize(+e.target.value)}
              style={{ width: 80 }}
            />
            <span style={{ width: 28, textAlign: 'right' }}>{size}</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#aaa' }}>
            Stroke
            <input
              type="range"
              min={0.5}
              max={4}
              step={0.5}
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(+e.target.value)}
              style={{ width: 80 }}
            />
            <span style={{ width: 28, textAlign: 'right' }}>{strokeWidth}</span>
          </label>

          <button
            onClick={() => setAnimateAll((v) => !v)}
            style={{
              padding: '7px 16px',
              background: animateAll ? '#f97316' : '#1a1a1a',
              border: '1px solid #333',
              borderRadius: 8,
              color: animateAll ? '#fff' : '#aaa',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            {animateAll ? 'Animate all: ON' : 'Animate all: OFF'}
          </button>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
          gap: 8,
        }}
      >
        {filtered.map((name) => {
          const Icon = Icons[name] as React.ComponentType<{
            size?: number;
            strokeWidth?: number;
            animate?: boolean;
            color?: string;
          }>;
          return (
            <div
              key={name}
              title={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: '14px 8px',
                background: '#111',
                border: '1px solid #222',
                borderRadius: 10,
                cursor: 'default',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = '#444')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = '#222')
              }
            >
              <Icon
                size={size}
                strokeWidth={strokeWidth}
                animate={animateAll}
                color="#e5e5e5"
              />
              <span
                style={{
                  fontSize: 10,
                  color: '#555',
                  textAlign: 'center',
                  wordBreak: 'break-all',
                  lineHeight: 1.3,
                }}
              >
                {name}
              </span>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: '#555', marginTop: 80 }}>
          No icons matching "{search}"
        </p>
      )}
    </div>
  );
}
