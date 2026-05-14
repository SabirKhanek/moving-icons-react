// Extend React.CSSProperties to allow CSS custom properties (--var-name)
import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
