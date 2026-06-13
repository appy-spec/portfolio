import { useState } from "react";
import { Menu, X } from "lucide-react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="navbar shadow-md px-4 py-2 fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="flex items-center justify-between h-16">
        <div className="text-black">
          <a
            href="#main"
            className="
              flex
              items-center
              justify-center
              hover:text-blue-500
              hover:cursor-pointer
              transition
            "
          >
            <HomeOutlinedIcon sx={{ fontSize: 36 }} />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#expertise"
            className="text-black hover:text-blue-600 hover:cursor-pointer transition-colors duration-300 text-lg"
          >
            Expertise
          </a>

          <a
            href="#learning-path"
            className="text-black hover:text-blue-600 hover:cursor-pointer transition-colors duration-300 text-lg"
          >
            Learning Path
          </a>

          <a
            href="#projects"
            className="text-black hover:text-blue-600 hover:cursor-pointer transition-colors duration-300 text-lg"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-black hover:text-blue-600 hover:cursor-pointer transition-colors duration-300 text-lg"
          >
            Contact
          </a>
        </div>
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
          <a
            href="#expertise"
            className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Expertise
          </a>

          <a
            href="#learning-path"
            className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Learning Path
          </a>

          <a
            href="#projects"
            className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="w-full rounded-lg bg-slate-100 px-4 py-3 text-left hover:bg-blue-500 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
