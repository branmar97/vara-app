import React from "react";
import { Link, useLocation } from "react-router";

interface SidebarNavLinkProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, label, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      data-testid={`sidebar-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
      className={`flex items-center justify-center md:justify-start gap-3 px-2 md:px-3 py-2 rounded-md transition-colors text-base font-medium
        ${
          isActive
            ? "bg-blue-100 text-blue-600"
            : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="sidebar-link-label hidden md:inline">{label}</span>
    </Link>
  );
};

export default SidebarNavLink;
