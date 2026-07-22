import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../components/Logo";
import ConfirmDialog from "../components/ConfirmDialog";

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    setShowLogoutDialog(false);
    setSelected("Dashboard");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Logo style="w-8 h-8" type={2} />

            <div>
              <h1 className="text-lg font-bold text-gray-800">
                INFNOVA
              </h1>
              <p className="text-xs text-gray-500">
                Internship Dashboard
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      <div
        className={`fixed left-0 right-0 top-18.25 z-50 mx-4 overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col py-2">
          <button
            className={`px-6 py-4 text-left font-medium transition ${
              selected === "Dashboard"
                ? "bg-amber-400 text-white"
                : "text-gray-700 hover:bg-amber-100"
            }`}
            onClick={() => {
              setSelected("Dashboard");
              setIsOpen(false);
            }}
          >
            Dashboard
          </button>

          <button
            className={`px-6 py-4 text-left font-medium transition ${
              selected === "logout"
                ? "bg-red-500 text-white"
                : "text-red-600 hover:bg-red-50"
            }`}
            onClick={() => {
              setSelected("logout");
              setShowLogoutDialog(true);
              setIsOpen(false);
            }}
          >
            Logout
          </button>
        </nav>
      </div>

      <ConfirmDialog
        open={showLogoutDialog}
        message="Are you sure you want to log out?"
        onNo={() => {
          setShowLogoutDialog(false);
          setSelected("Dashboard");
        }}
        onYes={handleLogout}
      />
    </>
  );
}

export default MobileHeader;