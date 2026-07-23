

﻿# INFNOVA Internship Dashboard

A React + TypeScript dashboard for managing internship applicants with authentication, filtering, applicant details, status updates, and summary metrics.

## Live app
- URL: <ADD_DEPLOYED_URL_HERE>
- Repo: <ADD_REPO_URL_HERE>

<video src="assets/demo.mp4" controls width="800"></video>
## Setup Instructions
1. Clone the repo:
   ```bash
   git clone <ADD_REPO_URL_HERE>
   cd infnova-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Environment variables:
   - None are required by the current code.
   - API endpoints are hard-coded in `src/api/auth.ts` and `src/api/getData.ts`.
4. Run locally:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Login credentials
- Email: `admin@infnova.tech`
- Password: `InternChallenge2026!`

## Technologies used
- React: UI library for components and page rendering.
- React DOM: renders the React app into the browser root.
- Vite: dev server, hot reload, and build tooling.
- TypeScript: static typing for component props, hooks, and API shapes.
- React Router DOM: route configuration and protected route navigation.
- @tanstack/react-query: async data fetching and caching for auth, dashboard data, applicant detail, and status updates.
- axios: HTTP client for API requests.
- lucide-react: icon set used throughout headers, buttons, tables, and dialogs.
- @tailwindcss/vite: Tailwind CSS integration plugin for Vite.
- tailwindcss: utility-first styling via class names.
- autoprefixer: CSS vendor prefixing during build.
- postcss: CSS processing pipeline used by Tailwind.
- @vitejs/plugin-react: Vite React support.
- oxlint: linting tool referenced in package scripts.
- @types/react, @types/react-dom, @types/node: TypeScript definitions for React and Node.
- typescript: compiler and type checking.

## Architecture and data flow
- `src/main.tsx`
  - Creates the React Query client and sets up `BrowserRouter`.
- `src/App.tsx`
  - Defines routes:
    - `/` renders `Login`
    - `/home` is wrapped by `ProtectedRoute` and renders `Home`
- `src/hooks/useAuth.tsx`
  - Uses `useQuery` to call `checkAuth()` from `src/api/auth.ts`.
  - Determines whether a user token is valid.
- `src/hooks/ProtectedRoute.tsx`
  - Uses `useAuth()`.
  - Shows loading, error, or session-expired UI.
  - Renders `Outlet` when auth passes.
- `src/pages/Login.tsx`
  - Login form that calls `loginUser()` from `src/api/auth.ts`.
  - Stores JWT token in `localStorage` and navigates to `/home`.
- `src/pages/Home.tsx`
  - Uses `useIsMobile()` to choose `MobileHeader` or `DesktopHeader`.
  - Renders `Dashbored` as the main dashboard page.
- `src/layout/Dashbored.tsx`
  - Main dashboard container.
  - Fetches applicant list via `getData()` and dashboard summary via `getStatus()`.
  - Passes props to `FiltersBar`, `Table`, `StatusCard`, `StatusBar`, `ScrollBar`, and `DetailCard`.
- `src/api/getData.ts`
  - `getData()`: fetches paginated applicants with search, status, filters, and sort query parameters.
  - `getDetail()`: fetches a single applicant's details.
  - `updateStatus()`: patches applicant status.
  - `getStatus()`: fetches dashboard summary metrics.
- `src/api/auth.ts`
  - `loginUser()`: POST login.
  - `checkAuth()`: GET auth/me with bearer token from `localStorage`.
  - `logoutUser()`: POST logout (also uses `localStorage` token).
- `src/components/FiltersBar.tsx`
  - Search input, status dropdown, and filter panel for track, country, experience, and sort.
- `src/components/Table.tsx`
  - Displays applicants in desktop table and mobile cards.
  - Allows opening the detail panel for one applicant.
- `src/components/DetailCard.tsx`
  - Displays applicant detail data and status update form.
  - Calls `updateStatus()` and invalidates queries.
- `src/components/StatusCard.tsx` and `src/components/StatusBar.tsx`
  - Render dashboard summary totals and track distribution.
- `src/components/ScrollBar.tsx`
  - Handles pagination buttons and displays current page info.
- `src/components/StateMessage.tsx`
  - Shared loading, error, and expired-session UI.
- `src/layout/SideBar.tsx`, `src/layout/MobileHeader.tsx`, `src/layout/DesktopHeader.tsx`, `src/layout/Footer.tsx`
  - Layout components, navigation, and logout interactions.
- `src/types/applicant.ts` and `src/types/StatusResponse .ts`
  - Type definitions for API responses.

## Features implemented
- Login page and authentication using `loginUser()`.
- Protected `/home` dashboard route with auth validation from `checkAuth()`.
- Dashboard summary stats from `/api/dashboard/summary`.
- Applicant list fetching from `/api/applicants`.
- Search input and status dropdown filtering wired into the applicant fetch.
- Filter panel with track, country, experience, and sort options.
- Pagination controls with previous/next and page count.
- Applicant detail drawer with full applicant metadata.
- Status update for individual applicants via PATCH.
- Desktop sidebar and mobile header with logout confirmation.
- Loading, error, and expired session states using `StateMessage`.

## Known limitations
- No `.env` variables are currently used; API URLs are hard-coded.
- `ProtectedRoute` redirects unauthenticated users to `/login`, but `App.tsx` only defines the root `/` route for login, so `/login` is not actually available.
- The `empty` state component exists but is not wired into the dashboard data flow.
- No automated tests are present.
- No global error boundary or fallback UI for unexpected exceptions.
- Logout mutation prints errors to console but does not display user-facing error feedback.
- The code relies on `localStorage` for the auth token, which is a simple client-side session strategy.
- `src/types/StatusResponse .ts` has a filename trailing space, which is a small cleanup issue.

## Assumptions made
- The app assumes the backend is reachable at `https://infnova-intern.vercel.app`.
- Auth is based on a bearer token stored in `localStorage`.
- Search and status filters are applied immediately, but additional filters only take effect after tapping Apply.
- Responsive behavior is handled via `useIsMobile()` using `window.innerWidth < 768`.
- Applicant summary and detail data follow the typed response shapes in `src/types`.

## What I'd improve with more time
- Add a dedicated `/login` route and fix the unauthenticated redirect flow.
- Extract API base URL and auth headers into a shared Axios instance or environment config.
- Add end-to-end or unit tests for auth, data fetching, and critical component behavior.
- Add a global error boundary for unexpected render-time exceptions.
- Improve empty-state handling for no applicants.
- Clean up build tooling comments, unused code, and the odd filename in `src/types`.
- Add user-facing error messages for login failures and logout failures.
