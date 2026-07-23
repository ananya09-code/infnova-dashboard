function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-4 text-sm text-gray-600">
      <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} INFNOVA Technologies. All rights reserved.
        </p>

        <p>
          Built with{" "}
          <span className="font-semibold text-amber-500">React</span>{" "}
          &{" "}
          <span className="font-semibold text-amber-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;