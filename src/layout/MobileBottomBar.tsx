import { Home, Bell, User, LayoutDashboard } from "lucide-react";

function MobileBottomBar() {
  return (
    <nav className="
      fixed bottom-0 left-0 right-0
      bg-white border-t border-gray-200
      shadow-lg
      flex justify-around items-center
      py-3
      md:hidden
    ">
      <button className="flex flex-col items-center text-blue-600">
        <Home size={22}/>
        <span className="text-xs">Home</span>
      </button>

      <button className="flex flex-col items-center text-gray-500">
        <LayoutDashboard size={22}/>
        <span className="text-xs">Dashboard</span>
      </button>

      <button className="flex flex-col items-center text-gray-500">
        <Bell size={22}/>
        <span className="text-xs">Alerts</span>
      </button>

      <button className="flex flex-col items-center text-gray-500">
        <User size={22}/>
        <span className="text-xs">Profile</span>
      </button>
    </nav>
  );
}

export default MobileBottomBar;