import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="h-[10vh] w-full flex items-center justify-between px-3 sm:px-10 font-serif">
      <img
        src="/images/logo.webp"
        alt=""
        className="object-cover object-center py-3 sm:py-0 h-full sm:min-w-auto text-lg text-black font-bold text-center"
      />

      <div className="flex items-center gap-10">
        <div className="hidden md:flex items-center gap-10">
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
        </div>
        <Link
          className="text-sm px-2 py-2 min-w-[100px] sm:w-full max-h-[50px] sm:h-full bg-[#b67c35] rounded-md text-white font-bold text-center cursor-pointer"
          to="/form"
        >
          Become a Model
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
