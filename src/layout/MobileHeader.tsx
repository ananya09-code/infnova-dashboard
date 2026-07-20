import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../components/Logo";

function MobileHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Header */}
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
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0
          bg-black/20
          backdrop-blur-sm
          transition-all duration-300
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
          z-40
        `}
      />
      <div
        className={`
          fixed
          top-[73px]
          left-0
          right-0
          mx-4
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
          transition-all
          duration-300
          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }
          z-50
        `}
      >
        <nav className="flex flex-col py-2">
          <button className="px-6 py-4 text-left font-medium text-gray-700 transition hover:bg-amber-400">
            Dashboard
          </button>

          <button className="px-6 py-4 text-left font-medium text-gray-700 transition hover:bg-amber-400">
            Applicants
          </button>

          <button className="px-6 py-4 text-left font-medium text-gray-700 transition hover:bg-amber-400">
            Analytics
          </button>

          <button className="px-6 py-4 text-left font-medium text-gray-700 transition hover:bg-amber-400">
            Settings
          </button>

          <hr className="my-2" />

          <button className="px-6 py-4 text-left font-medium text-red-600 transition hover:bg-red-50">
            Logout
          </button>
        </nav>
      </div>
    </>
  );
}

export default MobileHeader;