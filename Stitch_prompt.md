# Personal Website Prototype Design Prompt for Stitch

## Project Overview
Create high-fidelity wireframes/prototypes for a personal UX portfolio website for **"WANG YUYING, UX Designer"**. The design must follow the **Linear/Modern design system** — a cinematic, precision-crafted aesthetic combining deep near-black backgrounds, ambient lighting, glassmorphism, and obsessive micro-interactions.

**CRITICAL: Do NOT include any images, photos, or avatar placeholders. Use geometric shapes, icon symbols, or text labels only.**

---

## Design System Foundation (Linear/Modern Style)

### Core Philosophy
**"Cinematic meets technical minimalism"** — Software that feels expensive without being ostentatious. Every element exists in three-dimensional space with ambient lighting. Think Linear, Vercel, Raycast, or a high-end developer tool running at night.

### Key Differentiators
1. **Multi-layer background system**: Radial gradients + noise texture + animated gradient blobs + grid overlay
2. **Ambient lighting pools**: Large (900-1400px), heavily blurred gradient shapes that float slowly
3. **Mouse-tracking spotlights**: Cards respond to cursor with radial gradient glows (300px diameter, 15% opacity)
4. **Multi-layer shadows**: Every surface uses 3-4 shadow layers (border highlight + diffuse + ambient + accent glow)
5. **Precision micro-interactions**: All animations 200-300ms with expo-out easing, movements ≤8px

---

## Color Palette (Exact Values)

| Token | Hex/RGBA | Usage |
|:------|:---------|:------|
| **background-deep** | `#020203` | Deepest layers, footer |
| **background-base** | `#050506` | Primary canvas (NEVER pure black) |
| **background-elevated** | `#0a0a0c` | Elevated surfaces, cards |
| **surface** | `rgba(255,255,255,0.05)` | Card backgrounds |
| **surface-hover** | `rgba(255,255,255,0.08)` | Hovered cards |
| **foreground** | `#EDEDEF` | Primary text (off-white, not pure white) |
| **foreground-muted** | `#8A8F98` | Body text, descriptions |
| **foreground-subtle** | `rgba(255,255,255,0.60)` | Tertiary text, placeholders |
| **accent** | `#5E6AD2` | Primary interactive (buttons, links, glows) |
| **accent-bright** | `#6872D9` | Hover state for accent |
| **accent-glow** | `rgba(94,106,210,0.3)` | Glow effects, ambient lighting |
| **border-default** | `rgba(255,255,255,0.06)` | Subtle hairline borders |
| **border-hover** | `rgba(255,255,255,0.10)` | Borders on hover |
| **border-accent** | `rgba(94,106,210,0.30)` | Accent-tinted borders |

---

## Typography System

### Font Stack
`"Inter", "Geist Sans", system-ui, sans-serif`

### Type Scale

| Element | Size | Weight | Tracking | Color |
|:--------|:-----|:-------|:---------|:------|
| **Display (Hero)** | 72-96px | Semibold (600) | -0.03em | Gradient: `#FFFFFF → #FFFFFF/70` |
| **H1 (Section)** | 48-60px | Semibold (600) | Tight | `#EDEDEF` |
| **H2 (Subsection)** | 32-40px | Semibold (600) | Tight | `#EDEDEF` |
| **H3 (Card Title)** | 20-24px | Semibold (600) | Tight | `#EDEDEF` |
| **Body Large** | 18-20px | Normal (400) | Default | `#8A8F98` |
| **Body** | 14-16px | Normal (400) | Default | `#8A8F98` |
| **Label/Tag** | 12px | Mono | Wide | `rgba(255,255,255,0.60)` |

### Gradient Text Treatment
Headlines use vertical gradient for dimensionality:
```
Gradient: linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF/95 50%, #FFFFFF/70 100%)
```

For accent emphasis (e.g., "UX Designer"):
```
Gradient: linear-gradient(to right, #5E6AD2, #818cf8, #5E6AD2)
With animation: shimmer effect (200% background-size, 3s loop)
```

---

## Layout & Spacing

### Spacing Scale (Base: 4px)
- **Section vertical padding**: 128px (desktop), 64-96px (mobile)
- **Container max-width**: 1200px
- **Card padding**: 24-32px
- **Element gaps**: 16-32px
- **Between sections**: 128px

### Responsive Breakpoints
- **Mobile** (`<768px`): Single column, reduced padding (py-16)
- **Tablet** (`768px`): 2-3 columns, intermediate layouts (py-24)
- **Desktop** (`≥1024px`): Full grid expression, asymmetric layouts (py-32)

---

## Component Specifications

### 1. Buttons

#### Primary Button
```
Background: Solid #5E6AD2
Text: #FFFFFF (white)
Border-radius: 8px
Padding: 12px 24px
Shadow: Multi-layer
  - Inner highlight: inset 0 1px 0 rgba(255,255,255,0.1)
  - Accent glow: 0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3)

Hover State:
  - Background: #6872D9 (brighter)
  - Shadow: Increased glow (0 6px 20px rgba(94,106,210,0.4))
  - Transform: translateY(-2px)
  - Duration: 200ms, expo-out easing

Active State:
  - Transform: scale(0.98)
  - Shadow: Reduced
```

#### Secondary/Ghost Button
```
Background: rgba(255,255,255,0.05)
Text: #EDEDEF
Border: None (inset shadow only)
Border-radius: 8px
Padding: 12px 24px

Hover State:
  - Background: rgba(255,255,255,0.08)
  - Text: #FFFFFF
  - Subtle outer glow
```

### 2. Cards

#### Base Card Style
```
Background: linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))
Border: 1px solid rgba(255,255,255,0.06)
Border-radius: 16px
Padding: 24-32px
Shadow: Multi-layer
  - Border highlight: 0 0 0 1px rgba(255,255,255,0.06)
  - Soft diffuse: 0 2px 20px rgba(0,0,0,0.4)
  - Ambient: 0 0 40px rgba(0,0,0,0.2)

Top Edge Highlight:
  - 1px gradient line at top (rgba(255,255,255,0.1))
```

#### Card Hover State (CRITICAL)
```
Transform: translateY(-4px)
Duration: 200ms, expo-out easing

Border: rgba(255,255,255,0.10) (brighter)

Shadow: Enhanced
  - 0 0 0 1px rgba(255,255,255,0.1)
  - 0 8px 40px rgba(0,0,0,0.5)
  - Accent glow: 0 0 80px rgba(94,106,210,0.1)

Mouse-tracking spotlight (optional but recommended):
  - Radial gradient: rgba(94,106,210,0.15) at mouse position
  - Diameter: 300px
  - Heavily blurred (blur-3xl)
  - Follows cursor within card bounds
```

### 3. Navigation Bar

#### Desktop Navigation (≥768px)
```
Position: Fixed top, full-width
Background: Transparent (scrolled state: rgba(5,5,6,0.8) + backdrop-blur-xl)
Height: 72px
Padding: Horizontal 24-48px

Layout:
  - Left: Logo/Name "WANG YUYING" or "UX Portfolio" (use text, NO image)
  - Right: Navigation links + CTA button

Navigation Links:
  - Text: #8A8F98 (muted)
  - Spacing: 32px between items
  - Hover: Text → #5E6AD2, duration 200ms
  - Active: Text → #5E6AD2 with subtle underline glow

Scrolled State (after 50px scroll):
  - Background: rgba(5,5,6,0.95) + backdrop-blur(40px)
  - Border-bottom: 1px solid rgba(255,255,255,0.06)
```

#### Mobile Navigation (<768px)
```
Hamburger menu button (top-right):
  - Icon: Menu (≡) / Close (×)
  - Size: 24px
  - Color: #EDEDEF

Menu Panel (when open):
  - Background: rgba(5,5,6,0.98) + backdrop-blur-xl
  - Full-screen overlay
  - Animation: Slide down + fade in (300ms)
  - Links: Vertical stack, large touch targets (56px height)
  - CTA button: Full-width at bottom
```

### 4. Footer
```
Background: #020203 (deepest)
Border-top: 1px solid rgba(255,255,255,0.06)
Padding: 48px 24px

Content:
  - Copyright text: #8A8F98, 14px
  - Social media: Use simple icon outlines (NO actual images), #8A8F98
  - Hover: Icons → #5E6AD2

Layout: Centered, single row or stacked on mobile
```

---

## Page-Specific Designs

### Page 1: Homepage (首页)

#### Hero Section
```
Height: 100vh (or 600-800px min)
Background: Multi-layer system
  1. Base gradient: radial-gradient(ellipse at top, #0a0a0f 0%, #050506 50%, #020203 100%)
  2. Noise texture: SVG noise at opacity 0.015
  3. Animated gradient blob (floating):
     - Size: 900×1400px
     - Color: #5E6AD2 at 25% opacity
     - Blur: 150px
     - Position: Top-center
     - Animation: Float (translateY 0→-20px, 8s loop, ease-in-out)
  4. Grid overlay: 64px grid, opacity 0.02

Content (Centered):
  - Logo/Name: Top-left corner, "UX Portfolio" text only
  - Main Heading: "Hi, I am WANG YUYING, UX Designer"
    * Size: 72-96px (desktop), 40-48px (mobile)
    * Weight: Semibold (600)
    * Gradient: #FFFFFF → #FFFFFF/70 (vertical)
    * Tracking: -0.03em
  - Subheading (below, 24px gap):
    * Text: Brief tagline (e.g., "Crafting digital experiences with precision and empathy")
    * Size: 18-20px
    * Color: #8A8F98
  - CTA Buttons (below, 32px gap, horizontal layout):
    * "View Projects" (查看作品): Primary button style
    * "Contact Me" (联系我): Ghost button style
    * Gap between: 16px

Scroll Indicator (optional):
  - Small animated arrow or line at bottom
  - Color: rgba(255,255,255,0.3)
  - Animation: Bounce (translateY 0→8px, 1.5s loop)
```

#### Quick Links Section (Below Hero)
```
Padding: 128px vertical
Background: Continues base gradient

Layout: 2-column grid (1 column on mobile)
Gap: 32px

Cards (2 total):
  1. "View Projects" card
  2. "Contact Me" card

Each Card:
  - Background: rgba(255,255,255,0.05) + glassmorphism
  - Border: 1px rgba(255,255,255,0.06)
  - Border-radius: 16px
  - Padding: 48px
  - Height: 200-240px
  - Content: Large icon placeholder (geometric shape, 48×48px) + Title (24px) + Description (16px)
  - Hover: Apply hover state (glow, translateY, border brighten)
```

---

### Page 2: About Page (关于我页)

```
Section Padding: 128px vertical (desktop), 64px (mobile)
Container: Max-width 800px, centered

Layout: Single column

Header:
  - Section Title: "About Me"
  - Size: 48-60px
  - Weight: Semibold
  - Color: #EDEDEF
  - Margin-bottom: 48px

Content Card:
  - Background: Base card style (gradient + glassmorphism)
  - Border-radius: 16px
  - Padding: 48px
  - Border: 1px rgba(255,255,255,0.06)
  
  Content:
    - Bio Section:
      * Label: "ABOUT" (12px uppercase, mono, #8A8F98, tracking wide)
      * Text: Placeholder paragraph (16-18px, #8A8F98, leading-relaxed)
      * Use 2-3 paragraphs with 24px spacing
    - NO photo/avatar: Use geometric icon placeholder if needed (circle, 120px diameter, border)

Optional: Skills/Expertise section below bio
  - Grid of skill tags (pill-shaped)
  - Background: rgba(255,255,255,0.05)
  - Border: 1px rgba(94,106,210,0.3)
  - Text: #5E6AD2
  - Padding: 8px 16px
  - Border-radius: 999px (full)
```

---

### Page 3: Portfolio/Projects Page (作品页)

```
Section Padding: 128px vertical (desktop), 64px (mobile)
Container: Max-width 1200px

Header:
  - Section Title: "Featured Work"
  - Size: 48-60px
  - Weight: Semibold
  - Color: #EDEDEF
  - Margin-bottom: 64px

Grid Layout (Desktop):
  - 2×2 grid (4 cards total)
  - Gap: 32px
  - Each card: Equal size (or slight variation)

Grid Layout (Mobile):
  - Single column stack
  - Gap: 24px

Project Cards (4 cards):
  1. "Core Experience Upgrade Projects" (4个核心体验升级项目)
  2. "AI Assistant IP Upgrade" (AI 智能助手IP升级)
  3. "UI Component Library Upgrade" (UI 组件库升级)
  4. [Additional project placeholder]

Each Card Structure:
  - Background: rgba(255,255,255,0.05) + glassmorphism (backdrop-blur 10px)
  - Border: 1px rgba(255,255,255,0.06)
  - Border-radius: 16px
  - Padding: 32px
  - Aspect ratio: ~4:3 or square
  
  Content:
    - Tag (top): Uppercase label (e.g., "UX DESIGN", 12px mono, #8A8F98, wide tracking)
    - Project Title (below, 16px gap):
      * Size: 24px
      * Weight: Semibold
      * Color: Gradient #FFFFFF → #FFFFFF/80
    - Description (below, 12px gap):
      * Size: 16px
      * Color: #8A8F98
      * Lines: 2-3 lines placeholder text
    - Icon Placeholder (optional):
      * Geometric shape (square/circle, 64×64px)
      * Background: rgba(94,106,210,0.1)
      * Border: 1px rgba(94,106,210,0.3)
      * Position: Top-right or center
  
  NO project images/thumbnails

  Hover State (CRITICAL):
    - Transform: translateY(-4px)
    - Border: rgba(255,255,255,0.1)
    - Shadow: Enhanced with accent glow (0 0 80px rgba(94,106,210,0.1))
    - Scale: 1.02 (subtle)
    - Duration: 200ms, expo-out
    - Mouse-tracking spotlight: Radial glow follows cursor
```

---

### Page 4: Contact Page (联系我页)

```
Section Padding: 128px vertical (desktop), 64px (mobile)
Container: Max-width 700px, centered

Header:
  - Section Title: "Get In Touch"
  - Size: 48-60px
  - Weight: Semibold
  - Color: #EDEDEF
  - Margin-bottom: 48px

Layout: Single column

Contact Card:
  - Background: Base card style (gradient + glassmorphism)
  - Border-radius: 16px
  - Padding: 48px
  - Border: 1px rgba(255,255,255,0.06)

Content Structure:
  1. Avatar Section:
     - Label: "头像" (12px uppercase, mono, #8A8F98)
     - Placeholder: Circle outline icon (80px diameter, NO actual image)
     - Border: 2px rgba(255,255,255,0.1)
     - Center-aligned
     - Margin-bottom: 32px
  
  2. Contact Methods:
     - Label: "联系方式" (16px, #EDEDEF, margin-bottom 16px)
     - List of contact items (vertical stack, 16px gap):
       
       Item 1 - WeChat:
         - Icon: Geometric placeholder (24×24px, rgba(94,106,210,0.3) border)
         - Label: "WeChat" (14px, #8A8F98)
         - Value: "[WeChat ID]" (16px, #EDEDEF)
       
       Item 2 - Email:
         - Icon: Geometric placeholder (24×24px)
         - Label: "Email" (14px, #8A8F98)
         - Value: "[email@example.com]" (16px, #EDEDEF)

Each contact item:
  - Horizontal layout (icon + text)
  - Padding: 16px
  - Background: rgba(255,255,255,0.03) (subtle)
  - Border-radius: 8px
  - Hover: Background → rgba(255,255,255,0.06)
```

---

## Background Effects (Apply to All Pages)

### Layer 1: Base Gradient
```
radial-gradient(ellipse at top, #0a0a0f 0%, #050506 50%, #020203 100%)
```

### Layer 2: Noise Texture
```
SVG noise pattern (turbulence)
Opacity: 0.015
Blend mode: overlay
```

### Layer 3: Animated Gradient Blobs (SIGNATURE ELEMENT)
```
Blob 1 (Primary):
  - Size: 900×1400px
  - Color: #5E6AD2
  - Opacity: 0.25
  - Blur: 150px
  - Position: Top-center (20% from top)
  - Animation: Float (translateY 0→-20px, rotate 0→1deg, 8s loop)

Blob 2 (Secondary):
  - Size: 600×800px
  - Color: Mix of purple/pink (#8B5CF6 + #EC4899)
  - Opacity: 0.15
  - Blur: 120px
  - Position: Left side (30% from top)
  - Animation: Float (translateY 0→20px, 10s loop)

Blob 3 (Tertiary):
  - Size: 500×700px
  - Color: Indigo/blue mix (#6366F1 + #3B82F6)
  - Opacity: 0.12
  - Blur: 100px
  - Position: Right side (50% from top)
  - Animation: Float (translateY 0→-15px, 9s loop)
```

### Layer 4: Grid Overlay
```
64px × 64px grid pattern
Stroke: rgba(255,255,255,0.02)
Stroke-width: 1px
```

---

## Shadow System (Multi-Layer Formula)

### Card Default Shadow
```
box-shadow:
  0 0 0 1px rgba(255,255,255,0.06),         /* Border highlight */
  0 2px 20px rgba(0,0,0,0.4),               /* Soft diffuse */
  0 0 40px rgba(0,0,0,0.2)                  /* Ambient darkness */
```

### Card Hover Shadow
```
box-shadow:
  0 0 0 1px rgba(255,255,255,0.1),          /* Brighter border */
  0 8px 40px rgba(0,0,0,0.5),               /* Deeper diffuse */
  0 0 80px rgba(94,106,210,0.1)             /* Accent glow */
```

### Button Accent Glow
```
box-shadow:
  0 0 0 1px rgba(94,106,210,0.5),           /* Accent border */
  0 4px 12px rgba(94,106,210,0.3),          /* Accent glow */
  inset 0 1px 0 0 rgba(255,255,255,0.2)    /* Inner highlight */
```

---

## Animation Specifications

### Timing
- Quick interactions: **200ms**
- Standard transitions: **300ms**
- Blob float animations: **8000-10000ms**

### Easing
- Primary: **cubic-bezier(0.16, 1, 0.3, 1)** (expo-out)
- Hover: **ease-out**

### Transform Limits
- Vertical movement (hover): **-4px to -8px max**
- Scale (hover): **1.02-1.05 max**
- Scale (active): **0.98**

### Entrance Animations (Optional)
```
Fade up:
  - Initial: opacity 0, translateY(24px)
  - Final: opacity 1, translateY(0)
  - Duration: 600ms
  - Stagger: 80ms between items
```

---

## Stitch-Specific Instructions

### Wireframe Deliverables
1. **Homepage** (full hero + quick links section)
2. **About Page** (single-column bio card)
3. **Portfolio Page** (2×2 project grid)
4. **Contact Page** (contact card with methods)
5. **Component Library Frame**: Buttons (primary, ghost), Cards (default, hover), Navigation (desktop, mobile)

### Annotation Requirements
- Mark hover states with dashed outlines or side-by-side comparison
- Label all spacing values (padding, gaps, margins)
- Show shadow layers visually if possible
- Indicate glassmorphism/blur effects with annotations

### Technical Notes for Stitch
- **No actual images**: Use "X" placeholder boxes, geometric shapes, or text labels
- **Focus on structure**: Emphasize spacing, hierarchy, and component relationships
- **Show states**: Display default AND hover for interactive elements
- **Responsive**: Primary focus on desktop (1440px), but note mobile adaptations
- **Grid system**: Use visible grid guides to show alignment

---

## Visual Consistency Checklist

### ✅ MUST HAVE (Non-negotiable)
- [ ] Background uses `#050506` (NOT pure black)
- [ ] Text uses `#EDEDEF` for primary (NOT pure white)
- [ ] Accent color is `#5E6AD2` exclusively
- [ ] Cards have glassmorphism (blur + translucent background)
- [ ] Hover states include diffuse glow behind element
- [ ] Multi-layer shadows (3-4 layers minimum)
- [ ] Animated gradient blobs in background
- [ ] Borders at 6-10% white opacity (nearly invisible)
- [ ] Micro-interactions ≤8px movement, 200-300ms duration
- [ ] NO photos/avatars (geometric placeholders only)

### ❌ AVOID (Anti-patterns)
- [ ] Pure black (#000000) backgrounds
- [ ] Pure white (#FFFFFF) text
- [ ] Flat solid backgrounds (no gradients)
- [ ] Uniform grid layouts (cards should vary)
- [ ] Large hover movements (>10px)
- [ ] Bright/saturated colors (stick to near-monochrome + accent)
- [ ] Harsh visible borders (borders should be subtle)
- [ ] Bouncy animations (use expo-out, not spring)

---

## Final Design Intent

This prototype should evoke:
- **"A developer tool designed by a design perfectionist"**
- **"Software running at 3am in a dark room with soft ambient lighting"**
- **"Blade Runner meets Linear meets Raycast"**

The aesthetic is:
- 🎬 Cinematic (floating gradient blobs, depth)
- 🔧 Technical (precision, grids, monospace labels)
- ✨ Premium (multi-layer shadows, glassmorphism)
- ⚡ Responsive (instant hover feedback, 200ms interactions)

This is NOT:
- ❌ Playful/colorful
- ❌ Flat/material design
- ❌ Retro/brutalist
- ❌ Illustrative/decorative

**The signature is ambient lighting + obsessive precision + interactive depth.**
