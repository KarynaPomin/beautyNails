import { Link } from "react-router-dom";
import logoNapis from "/src/assets/logo/napis-white.png";
import { useState } from "react";

const pages = [
  { name: "Główna", path: "/" },
  { name: "Galeria", path: "/gallery" },
  { name: "Usługi", path: "/price-list" },
  { name: "Kontakt", path: "/contact" },
];

const Header = ({ image, title, subtitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full min-h-[50vh] h-[150vh] sm:h-[80vh] overflow-hidden flex flex-col">
      
      <img
        src={image}
        alt="baner"
        className="absolute inset-0 scale-250 sm:scale-100 w-full h-[150vh] sm:h-full object-contain sm:object-cover brightness-50 rotate-90 sm:rotate-0"
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between p-5 sm:flex-wrap">
          <img
            src={logoNapis}
            alt="logo"
            className="max-w-[480px] min-w-[200px] p-0.5"
          />

          <nav className="hidden md:flex gap-6 text-white font-medium">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="text-lg font-medium hover:text-[#ffd8be] hover:scale-105 transition duration-700 ease-in-out"
              >
                {page.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none hover:scale-105 hover:text-shadow-lg/20 hover:text-shadow-white transition duration-700 ease-in-out"
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-[80px] right-0 bg-green-100\ backdrop-blur-md text-white w-[30%] justify-center flex flex-col gap-4 p-6 rounded-l-xl md:hidden ">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-[#ffd8be] hover:scale-105 transition duration-700 ease-in-out"
              >
                {page.name}
              </Link>
            ))}
          </div>
        )}

        <div className="flex flex-col items-start justify-center flex-grow text-left text-white ml-[10%]">
          <h1 className="mb-[2.5%]">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
