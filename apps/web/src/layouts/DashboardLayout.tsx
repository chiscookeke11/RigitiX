import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { 
  Notification03Icon, 
  ArrowDown01Icon
} from "hugeicons-react";

interface DashboardLayoutProps {
  activeItem?: string;
}

export function DashboardLayout({ activeItem = "dashboard" }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-4">
        {/* Top Header */}
        <header className="header-bg px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="header-title">Events</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="notification-container hover:bg-gray-50 transition-colors">
                <Notification03Icon size={20} color="#6B7280" />
                <div className="notification-dot"></div>
              </button>
              
              {/* User Profile Dropdown */}
              <div className="profile-container hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="profile-initials-container">
                  OO
                </div>
                <ArrowDown01Icon size={20} color="#525252" />
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
