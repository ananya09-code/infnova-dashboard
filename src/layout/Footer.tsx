function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4 text-sm text-gray-600">
      <p>© {new Date().getFullYear()} INFNOVA Technologies. All rights reserved.</p>

      <p>
        Built with <span className="font-semibold text-amber-500">React</span> &
        <span className="font-semibold text-amber-500"> Tailwind CSS</span>
      </p>
    </footer>
  );
}

export default Footer;