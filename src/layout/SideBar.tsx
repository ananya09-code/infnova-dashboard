import {
  LayoutDashboard,
  ChevronsLeft,
  ChevronsRight,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "../components/ConfirmDialog";
import { logoutUser } from "../api/auth";
function SideBar() {
    const navigate=useNavigate()
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

 const logoutMutation = useMutation({
  mutationFn: logoutUser,
  onSuccess: () => {
    localStorage.removeItem("token");
    navigate("/");
  },
  onError: (error) => {
    console.error(error);
  },
});

  return (
    <>
      <aside
        className={`h-screen border-r bg-white transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
          </button>
        </div>

        <ul className="flex flex-col gap-2 px-3">
          <Link to="/home">
            <li
              onClick={() => setSelected("Dashboard")}
              className={`flex cursor-pointer items-center gap-3 rounded-xl p-3 font-medium transition-all ${
                selected === "Dashboard"
                  ? "bg-amber-400 text-white shadow"
                  : "text-gray-700 hover:bg-amber-100 hover:text-amber-700"
              }`}
            >
              <LayoutDashboard size={20} />
              {!isCollapsed && <span>Dashboard</span>}
            </li>
          </Link>

          <li
            onClick={() => {
              setSelected("Logout");
              setShowLogoutDialog(true);
            }}
            className={`flex cursor-pointer items-center gap-3 rounded-xl p-3 font-medium transition-all ${
              selected === "Logout"
                ? "bg-red-500 text-white shadow"
                : "text-red-600 hover:bg-red-50"
            }`}
          >
            <LogOut size={20} />
            {!isCollapsed && <span>Logout</span>}
          </li>
        </ul>
      <ConfirmDialog
        open={showLogoutDialog}
        message="Are you sure you want to log out?"
        onNo={() => {
          setShowLogoutDialog(false);
          setSelected("Dashboard");
        }}
        onYes={()=>logoutMutation.mutate()}
      />
      </aside>

     
    </>
  );
}

export default SideBar;