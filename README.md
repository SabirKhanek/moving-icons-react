# @devsabir/moving-icons-react

> 550+ beautifully crafted, interaction-ready animated icons for **React**.

Hover any icon to trigger its animation. All icons accept an `animate` prop for programmatic control.

[![npm version](https://img.shields.io/npm/v/@devsabir/moving-icons-react)](https://www.npmjs.com/package/@devsabir/moving-icons-react)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## Credits

This package is a React port of **[Moving Icons](https://movingicons.dev)** by [**jis3r**](https://github.com/jis3r/icons) — the original library and all icon designs, animations, and SVG artwork are entirely their work. The original package (`@jis3r/icons`) targets Svelte 5. This port makes the same icons available in React projects.

Original repository: [github.com/jis3r/icons](https://github.com/jis3r/icons)

---

## Installation

```bash
npm install @devsabir/moving-icons-react
```

## Usage

No CSS import needed — each icon automatically loads only its own styles when imported.

Use any icon:

```tsx
import { Bell, AlarmClock, Sun, ShoppingCart } from '@devsabir/moving-icons-react';

export default function App() {
  return (
    <div>
      {/* Hover to trigger the built-in animation */}
      <Bell />
      <Sun size={32} strokeWidth={1.5} />

      {/* Custom colour */}
      <AlarmClock color="#f97316" />

      {/* Controlled: force animation on/off from the parent */}
      <ShoppingCart animate={true} />
    </div>
  );
}
```

## Props

| Prop          | Type      | Default          | Description                              |
|---------------|-----------|------------------|------------------------------------------|
| `size`        | `number`  | `24`             | Width and height of the SVG in px        |
| `color`       | `string`  | `'currentColor'` | Stroke colour (inherits from CSS by default) |
| `strokeWidth` | `number`  | `2`              | SVG stroke width                         |
| `animate`     | `boolean` | `false`          | Force-enable the animation from outside  |
| `className`   | `string`  | `''`             | Extra CSS class applied to the wrapper   |

## Available icons

550 icons — a complete 1-to-1 port of every icon in Moving Icons v2.7.0.

Use your editor's auto-complete on the named imports to browse them, or run the local demo:

```bash
npm run dev
```

## Scripts

| Command           | Description                                       |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Launch the interactive demo at `localhost:5173`   |
| `npm run build`   | Compile the library to `dist/`                    |
| `npm run generate`| Re-run the Svelte → React converter               |

## License

MIT — same as the original Moving Icons library.

See [movingicons.dev](https://movingicons.dev) for the upstream Svelte library.
