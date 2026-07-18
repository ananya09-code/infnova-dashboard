import Logo from "../components/Logo";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Logo style="w-12 h-12" type={2} />
        <div>
          <h1 className="text-xl font-bold text-gray-800">INFNOVA</h1>
          <p className="text-sm text-gray-500">
            Internship Management Dashboard
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Welcome, <span className="font-semibold">Administrator</span>
        </span>

        <button className="rounded-lg bg-amber-300 px-4 py-2 font-medium text-gray-900 transition hover:bg-amber-400">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;