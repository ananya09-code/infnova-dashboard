import {
  LayoutDashboard,
  ChartBar,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-amber-30 border-r transition-all duration-300 text-black ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
        </button>
      </div>

      <ul className="flex flex-col gap-2 px-3">
       <li className="flex items-center gap-3 rounded-lg p-3 text-black hover:bg-amber-400 hover:text-amber-50 cursor-pointer transition-colors">
          <LayoutDashboard size={20} />
          {!isCollapsed && <span>Dashboard</span>}
        </li>
        <li className="flex items-center gap-3 rounded-lg p-3 text-black hover:bg-amber-400 hover:text-amber-50 cursor-pointer transition-colors">
          <ChartBar size={20} />
          {!isCollapsed && <span>Summary</span>}
        </li>
        <li className="flex items-center gap-3 rounded-lg p-3 text-black hover:bg-amber-400 hover:text-amber-50 cursor-pointer transition-colors">
          <Settings size={20} />
          {!isCollapsed && <span>Settings</span>}
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;