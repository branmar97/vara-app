## Relevant Files

- `app/components/Sidebar.tsx` - Main sidebar component containing layout, navigation links, and responsive logic.
- `app/components/SidebarNavLink.tsx` - Reusable component for sidebar navigation links with icon and active state.
- `app/routes/dashboard.tsx` - Dashboard page route.
- `app/routes/recurring.tsx` - Recurring page route.
- `app/routes/spending.tsx` - Spending page route.
- `app/routes/budgets.tsx` - Budgets page route.
- `app/routes/goals.tsx` - Goals page route.
- `app/routes/net-worth.tsx` - Net Worth page route.
- `app/routes/transactions.tsx` - Transactions page route.
- `app/root.tsx` - Main app layout file where Sidebar is integrated.
- `app/components/Sidebar.test.tsx` - Unit tests for Sidebar component.
- `app/components/SidebarNavLink.test.tsx` - Unit tests for SidebarNavLink component.

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `Sidebar.tsx` and `Sidebar.test.tsx` in the same directory).
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration.

## Tasks

- [x] 1.0 Set up sidebar component structure and layout
  - [x] 1.1 Create the `Sidebar.tsx` component file in `app/components/`
  - [x] 1.2 Implement the basic sidebar layout with a left-fixed position and vertical stacking
  - [x] 1.3 Add a logo placeholder at the top of the sidebar
  - [x] 1.4 Add a divider below the logo
  - [x] 1.5 Add a container for the user info and navigation links (structure only, no logic yet)
  - [x] 1.6 Add a container for the bottom section (Help & Support link placeholder)
- [x] 2.0 Implement navigation links and active state
  - [x] 2.1 Create a `SidebarNavLink.tsx` component in `app/components/` for reusable navigation links with icon and active state support
  - [x] 2.2 Define the navigation link data (label, icon, route) in the sidebar
  - [x] 2.3 Render navigation links in the sidebar using the `SidebarNavLink` component
  - [x] 2.4 Implement active state styling for the current route using React Router v7
- [x] 3.0 Add user info, notification bell, and settings cog placeholders
  - [x] 3.1 Add a placeholder for the user's first name in the user info section
  - [x] 3.2 Add a notification bell icon placeholder to the right of the user's name
  - [x] 3.3 Add a settings cog icon placeholder to the right of the notification bell
- [x] 4.0 Make sidebar responsive for different screen sizes
  - [x] 4.1 On small screens, show only icons for navigation links (hide link names)
  - [x] 4.2 On small screens, hide the user's name but keep the notification bell and settings cog (stacked vertically if needed)
  - [x] 4.3 Ensure sidebar layout and spacing remain visually appealing and usable at all breakpoints
- [x] 5.0 Integrate sidebar with routing and placeholder pages
  - [x] 5.1 Add the Sidebar component to the main app layout so it appears on all relevant pages
  - [x] 5.2 Create placeholder page components for Dashboard, Recurring, Spending, Budgets, Goals, Net Worth, and Transactions in app/routes/
  - [x] 5.3 Set up file-based routes for each page so clicking a sidebar link updates the main page view with the correct placeholder content
  - [x] 5.4 Ensure the main page content is displayed to the right of the sidebar and is responsive
- [x] 6.0 Add Help & Support link to bottom section
  - [x] 6.1 Add a Help & Support link with an icon to the bottom section of the sidebar
  - [x] 6.2 Style the link with a smaller font and ensure it is visually distinct from the main nav links
  - [x] 6.3 Make the link accessible and ready for future integration (e.g., placeholder click handler or route)
- [ ] 7.0 Write unit tests for sidebar and navigation components
