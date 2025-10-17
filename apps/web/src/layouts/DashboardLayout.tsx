import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { 
  Notification01Icon, 
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
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Events</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Notification01Icon size={20} color="#6B7280" />
              </button>
              
              {/* User Profile Dropdown */}
              <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                <div className="flex -space-x-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">O</span>
                  </div>
                  <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">O</span>
                  </div>
                </div>
                <ArrowDown01Icon size={16} color="#6B7280" />
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
