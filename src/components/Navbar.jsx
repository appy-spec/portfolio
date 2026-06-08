import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar shadow-md px-4 py-2 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          <h1>Rahul Patel</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button className="text-black hover:text-blue-600 transition-colors duration-300 text-lg">
            Expertise
          </button>

          <button className="text-black hover:text-blue-600 transition-colors duration-300 text-lg">
            Experience
          </button>

          <button className="text-black hover:text-blue-600 transition-colors duration-300 text-lg">
            Projects
          </button>

          <button className="text-black hover:text-blue-600 transition-colors duration-300 text-lg">
            Resume
          </button>

          <button className="text-black hover:text-blue-600 transition-colors duration-300 text-lg">
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 py-4">
          <button className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition">
            Expertise
          </button>

          <button className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition">
            Experience
          </button>

          <button className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition">
            Projects
          </button>

          <button className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition">
            Resume
          </button>

          <button className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;