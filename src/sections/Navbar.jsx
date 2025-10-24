import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      // If click is inside the menu or on the toggle button, do nothing
      if (!open) return;
      const target = e.target;
      if (
        (menuRef.current && menuRef.current.contains(target)) ||
        (toggleRef.current && toggleRef.current.contains(target))
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <header className="relative h-[10vh] w-full flex items-center justify-between px-3 sm:px-10 font-serif">
      <img
        src="/images/logo.webp"
        alt="logo"
        className="object-contain object-center py-3 sm:py-0 h-full max-w-1/2 md:min-w-auto"
      />

      <div className="flex items-center gap-5 ml-5">
        {/* Desktop links */}
        <nav className="text-xl hidden lg:flex items-center gap-10">
          <Link className="cursor-pointer" to="/">
            Home
          </Link>
          <Link className="cursor-pointer" to="/about">
            About
          </Link>
          <Link className="cursor-pointer" to="/services">
            Services
          </Link>
          <Link className="cursor-pointer" to="/models">
            Models
          </Link>
          <Link className="cursor-pointer" to="/reviews">
            Reviews
          </Link>
        </nav>

        <Link
          className="text-xl px-2 py-2 min-w-[100px] sm:w-full h-[50px] sm:h-full bg-[#b67c35] rounded-md text-white font-bold text-center cursor-pointer hidden sm:flex hover:bg-black hover:text-white transition ease-in-out duration-300"
          to="/form"
        >
          Become a Model
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          ref={toggleRef}
          className="lg:hidden ml-2 p-2 z-100 rounded-md text-white bg-black shadow-sm ring-1 ring-gray-200 hover:bg-white/100 transition scale-z-100"
        >
          {!open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 z-50 ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex flex-col items-center gap-6 py-24 px-6 text-white">
          <Link onClick={() => setOpen(false)} className="text-xl" to="/">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} className="text-xl" to="/about">
            About
          </Link>
          <Link onClick={() => setOpen(false)} className="text-xl" to="/services">
            Services
          </Link>
          <Link onClick={() => setOpen(false)} className="text-xl" to="/models">
            Models
          </Link>
          <Link onClick={() => setOpen(false)} className="text-xl" to="/reviews">
            Reviews
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="text-xl px-4 py-2 bg-[#b67c35] rounded-md text-white font-bold w-full text-center max-w-xs"
            to="/form"
          >
            Become a Model
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
