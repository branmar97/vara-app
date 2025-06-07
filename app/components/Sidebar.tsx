import React from "react";
import {
  Home,
  Repeat,
  CreditCard,
  Wallet,
  Target,
  BarChart2,
  List,
  Bell,
  Settings,
  LifeBuoy,
} from "lucide-react";
import SidebarNavLink from "./SidebarNavLink";

const navLinks = [
  { label: "Dashboard", icon: <Home />, to: "/dashboard" },
  { label: "Recurring", icon: <Repeat />, to: "/recurring" },
  { label: "Spending", icon: <CreditCard />, to: "/spending" },
  { label: "Budgets", icon: <Wallet />, to: "/budgets" },
  { label: "Goals", icon: <Target />, to: "/goals" },
  { label: "Net Worth", icon: <BarChart2 />, to: "/net-worth" },
  { label: "Transactions", icon: <List />, to: "/transactions" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-16 md:w-64 bg-white shadow-lg flex flex-col fixed left-0 top-0 z-30 transition-all duration-200">
      {/* Top Section: Logo and Divider */}
      <div className="flex flex-col items-center py-4 md:py-6 px-2 md:px-3">
        {/* Logo Placeholder - replace with actual logo as needed */}
        <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4 border-2 border-gray-300">
          <span className="text-sm md:text-lg font-bold text-gray-500">
            Logo
          </span>
        </div>
        {/* Divider below the logo */}
        <div className="w-full border-b-2 border-gray-200" />
      </div>

      {/* User Info and Navigation Links Container */}
      <div className="flex-1 flex flex-col px-2 md:px-3">
        {/* User Info Section - Mobile (Icons stacked below name, name hidden) */}
        <div className="mt-4 md:mt-6 mb-2 md:mb-4 flex flex-col items-center gap-y-1 px-2 md:px-0 md:hidden">
          {/* Icons - Wrapped in padded divs */}
          <div className="flex items-center justify-center py-2 w-full">
            <Bell className="w-6 h-6 text-gray-700" />
          </div>
          <div className="flex items-center justify-center py-2 w-full">
            <Settings className="w-6 h-6 text-gray-700" />
          </div>
        </div>

        {/* User Info Section - Desktop (Name and icons inline) */}
        <div className="mt-4 md:mt-6 mb-2 md:mb-4 flex-row items-center gap-2 px-2 md:px-0 hidden md:flex">
          <span className="font-semibold text-gray-800">Hi, Brandon</span>
          <div className="flex flex-row items-center gap-1">
            <Bell className="w-6 h-6 text-gray-700" />
            <Settings className="w-6 h-6 text-gray-700" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 md:gap-2">
          {navLinks.map((link) => (
            <SidebarNavLink
              key={link.to}
              to={link.to}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Section: Help & Support */}
      <div className="px-2 py-4 md:py-6 border-t border-gray-100 mt-2">
        <button
          type="button"
          aria-label="Help and Support"
          onClick={() => {
            /* TODO: Integrate Help & Support action */
          }}
          className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-400 hover:text-blue-600 focus:text-blue-600 transition-colors font-medium outline-none focus:ring-2 focus:ring-blue-200 rounded-sm w-full text-left"
        >
          <LifeBuoy className="w-4 h-4" />
          <span className="hidden md:inline">Help & Support</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
