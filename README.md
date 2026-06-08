# GurūFox Design System

A dark-themed React component library built on atomic design principles.
Designed and built by Kathlene de Vos.

🔗 Live demo: coming soon
🎨 Figma: coming soon

## Overview

A scalable, accessible React component library with design tokens as the foundation and components organised by atomic design principles.

## Structure

src/
├── tokens/          # Design tokens: colors, typography, spacing, shadows
├── components/
│   ├── atoms/       # Smallest building blocks
│   │   ├── Button   # 4 variants, 3 sizes, loading + disabled states
│   │   ├── Badge    # 5 variants, dot indicator
│   │   ├── Input    # Labels, helper text, error states, icons
│   │   ├── Avatar   # Image, initials fallback, status indicators
│   │   └── Toggle   # 3 sizes, on/off/disabled
│   └── molecules/   # Composed from atoms
│       ├── Card     # 4 variants including interactive
│       ├── Alert    # 4 variants, dismissible
│       ├── Modal    # Animated, keyboard accessible, scroll lock
│       └── Tooltip  # 4 positions

## Getting Started

npm install
npm start

Open http://localhost:3000 to view the component showcase.

## Design Tokens

All visual decisions live in src/tokens/index.js and should be mirrored as variables in Figma.

| Token | Description |
|---|---|
| colors | Brand, neutral, and semantic color scales |
| typography | Font families, sizes, weights, line heights |
| spacing | 4px-based spacing scale |
| borderRadius | Corner radius values |
| shadows | Elevation and glow effects |
| transitions | Animation timing values |
| zIndex | Layering scale |

## Components

### Atoms

| Component | Variants | Description |
|---|---|---|
| Button | primary, secondary, ghost, danger | 3 sizes, loading, disabled |
| Badge | default, success, warning, error, info | Optional dot indicator |
| Input | default, error, disabled | Labels, helper text, icons |
| Avatar | circle, square | 5 sizes, status indicators |
| Toggle | sm, md, lg | On/off switch with label |

### Molecules

| Component | Variants | Description |
|---|---|---|
| Card | default, elevated, outlined, interactive | Header, Body, Footer slots |
| Alert | success, warning, error, info | Dismissible option |
| Modal | sm, md, lg, fullscreen | Keyboard accessible, scroll lock |
| Tooltip | top, bottom, left, right | Hover display |

## Built With

- React 18
- styled-components
- Atomic Design methodology
- Inter font

## Author

Kathlene de Vos
dribbble.com/Kathlene_de_Vos | github.com/Kathydv | medium.com/@kathy.range
