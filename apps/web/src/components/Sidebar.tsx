import { NavLink } from "react-router-dom";
import {
  DashboardSquare01Icon,
  Calendar02Icon,
  SignalFull02Icon,
  Coins01Icon,
  Megaphone02Icon,
  File02Icon,
  LayoutGridIcon,
  Configuration02Icon,
  CustomerSupportIcon,
  ArrowRight01Icon
} from "hugeicons-react";

interface SidebarProps {
  activeItem?: string;
}

export function Sidebar({ activeItem = "dashboard" }: SidebarProps) {
  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: DashboardSquare01Icon },
    { id: "events", label: "Events", icon: Calendar02Icon },
    { id: "sales", label: "Sales & Analytics", icon: SignalFull02Icon },
    { id: "financials", label: "Financials & Payouts", icon: Coins01Icon },
    { id: "affiliate", label: "Affiliate / Referral", icon: Megaphone02Icon },
    { id: "reports", label: "Reports & Publicity Tools", icon: File02Icon },
    { id: "launchpad", label: "Launch Pad", icon: LayoutGridIcon },
  ];

  const utilityItems = [
    { id: "settings", label: "Settings & Security", icon: Configuration02Icon },
    { id: "support", label: "Support & Extensions", icon: CustomerSupportIcon },
  ];

  return (
    <div className="dashboard-sidebar flex flex-col">
      {/* Profile Section */}
      <div className="profile-section flex items-center mb-8">
        <div className="profile-initials flex items-center justify-center mr-3">
          OO
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium text-white leading-5 tracking-tight">
              Owai Owai
            </h3>
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-gray-300 leading-4">
            owai@rigitix.com
          </p>
        </div>
        <div className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-gray-700 cursor-pointer">
          <ArrowRight01Icon size={16} color="#A3A3A3" />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={item.id} className="relative">
                {isActive && (
                  <div className="active-indicator absolute left-0 top-1/2 transform -translate-y-1/2"></div>
                )}
                <NavLink
                  to={`/dashboard/${item.id}`}
                  className={`nav-link flex items-center ${
                    isActive 
                      ? 'active text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon 
                    size={20} 
                    color={isActive ? "#FFFFFF" : "#A3A3A3"} 
                    className="nav-link-icon mr-2"
                  />
                  <span className="nav-link-text text-sm font-medium leading-5 tracking-tight">
                    {item.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Utility Links */}
      <div className="mt-auto">
        <ul className="space-y-2">
          {utilityItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={item.id} className="relative">
                {isActive && (
                  <div className="active-indicator absolute left-0 top-1/2 transform -translate-y-1/2"></div>
                )}
                <NavLink
                  to={`/dashboard/${item.id}`}
                  className={`nav-link flex items-center ${
                    isActive 
                      ? 'active text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon 
                    size={20} 
                    color={isActive ? "#FFFFFF" : "#A3A3A3"} 
                    className="nav-link-icon mr-2"
                  />
                  <span className="nav-link-text text-sm font-medium leading-5 tracking-tight">
                    {item.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
