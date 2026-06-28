# React Color Picker Monorepo

This project is a Turborepo-managed monorepo containing a reusable React color picker library and a demo/playground stories app.

## Project Structure

```text
.
├── apps/
│   └── stories/                  # Playground & demo React application (Vite)
│       ├── src/
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── vercel.json           # Vercel routing configuration for SPA
│
├── packages/
│   └── color-picker/             # Reusable React Color Picker Component Library
│       ├── src/
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
│
├── package.json                  # Workspace configurations and orchestration scripts
├── turbo.json                    # Turborepo task pipeline configuration
├── pnpm-workspace.yaml           # Workspace packages mapping
├── tsconfig.json                 # Root TypeScript orchestration project references
└── eslint.config.js              # Global ESLint configuration
```

## Getting Started

Make sure you have `pnpm` installed.

### 1. Install Dependencies
Run from the workspace root:
```bash
pnpm install
```

### 2. Start Development Server
Starts the playground app (`apps/stories`) with hot reloading of library modifications:
```bash
pnpm dev
```

### 3. Build Workspaces
Compiles the library first, then compiles the playground app for production:
```bash
pnpm build
```

### 4. Lint Codebase
Runs ESLint across all projects in the workspace:
```bash
pnpm lint
```

---

## Vercel Deployment Guide

To deploy the **Stories Playground** to Vercel, follow these settings in the Vercel dashboard:

1. **Framework Preset**: `Vite` (Vercel should auto-detect this).
2. **Root Directory**: `apps/stories`
3. **Build Command**:
   ```bash
   cd ../.. && pnpm build
   ```
   *(This goes back to the monorepo root to build the workspaces in the correct order)*
4. **Output Directory**: `dist` *(relative to `apps/stories`, pointing to `apps/stories/dist`)*
5. **Install Command**: (Leave as default or let Vercel handle it using the root `pnpm-workspace.yaml` automatically).

### Routing Configuration
The application is configured as a Single Page Application (SPA) using [vercel.json](file:///D:/Projects/react-color-picker/apps/stories/vercel.json) inside `apps/stories`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This handles client-side routing fallback redirects correctly when deployed.
