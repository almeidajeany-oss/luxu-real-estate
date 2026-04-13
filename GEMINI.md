# luxu-real-estate

This is a modern real estate application built with Next.js and React. The project is currently in its early development phase, with several screen designs and requirements already defined in the `prd/resources` directory.

## Project Overview

- **Framework**: Next.js 16.2.0 (App Router)
- **Library**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Architecture**: Next.js App Router with Server Components.

### Key Directories

- `app/`: Contains the application's routes and components.
- `prd/resources/`: Screen-by-screen requirements, including `code.html` (prototypes) and `screen.png` (designs).
    - `home_discover_screen/`
    - `property_details_screen/`
    - `user_profile_screen/`
    - `property_management_dashboard/`
    - and more...
- `public/`: Static assets like images and fonts.
- `node_modules/next/dist/docs/`: **CRITICAL** - Local documentation for this specific Next.js version, containing breaking changes from standard training data.

## Building and Running

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint for code quality checks. |

## Development Conventions

### ⚠️ Next.js Breaking Changes
As noted in `AGENTS.md`, this version of Next.js contains breaking changes. **Always** refer to the documentation in `node_modules/next/dist/docs/` before implementing new features or fixing issues. Standard training data may be outdated for this project's specific framework version.

### Styling
- Use **Tailwind CSS 4** for all styling.
- Global styles are defined in `app/globals.css`.

### Implementation Workflow
1. **Consult PRD**: Before implementing a new screen, review the corresponding directory in `prd/resources/`.
2. **Local Docs First**: Always check `node_modules/next/dist/docs/` for API references.
3. **TypeScript**: Maintain strict type safety throughout the codebase.
4. **Performance**: If fixing slow navigations, remember that `Suspense` might need `unstable_instant` export from the route (see `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.mdx`).

### Contribution
- Do not modify `prd/resources/` unless specifically instructed to update the requirements.
- Follow the existing file structure in the `app/` directory.
