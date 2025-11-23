import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import  Contacting  from "./Contacting.jsx";

export default function Navigation() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openContact, setOpenContact] = useState(false);


  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}
          backdrop-blur-xl bg-black/20 border-b border-white/10
          shadow-[0_0_20px_rgba(140,75,255,0.15)]
        `}
      >
        <div className="w-full px-6 py-3 grid grid-cols-[auto_1fr_auto] items-center">

          {/* Logo */}
          <h1 className="text-[1.6rem] font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Aariz.dev
          </h1>

          {/* Links */}
          <ul className="flex justify-center space-x-10 text-[1.1rem] font-semibold text-gray-200 tracking-wide">
            {["Home", "About", "Projects", "Experiences"].map((item) => (
              <li key={item}>
                <a
                  className="hover:text-purple-400 transition-colors"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Get in Touch Button */}
          <button
            onClick={() => setOpenContact(true)}
            className="
              px-6 py-2 text-[0.95rem]
              font-medium text-white
              rounded-xl
              bg-gradient-to-br from-purple-500 via-purple-600 to-blue-500
              shadow-lg shadow-purple-500/40
              hover:shadow-purple-400/50
              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            Get in Touch
          </button>
        </div>
      </nav>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        <Contacting open={openContact} setOpen={setOpenContact} />
      </AnimatePresence>
    </>
  );
}
