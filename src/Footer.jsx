import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ResumePDF from "./assets/Resume.pdf";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 border-t border-gray-800">

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Syed.</h2>
          <p className="text-sm mb-6">
            A collection of projects and ideas that blends AI, data, and web developement.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.instagram.com/aariz._/" target="_blank" className="hover:text-white"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/syed-aariz/" target="_blank" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="https://github.com/SyedAariz" target="_blank" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#experiences" className="hover:text-gray-300">Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li>
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Resume
              </a>
            </li>
            <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://github.com/SyedAariz" target="_blank" className="hover:text-white">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/syed-aariz/" target="_blank" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/aariz._/" target="_blank" className="hover:text-white">Instagram</a></li>
            <li><a href="mailto:syedaariz1234@gmail.com" className="hover:text-white">Email</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        <p className="text-gray-400">
          Designed & Developed by <span className="text-white">Syed Aariz</span>.
        </p>
        <p className="mt-1">
          Built with React, Vite, Tailwind & Flask. Hosted on Vercel.
        </p>
        <p className="mt-3">© 2025 Syed Aariz. All rights reserved.</p>
      </div>

    </footer>
  );
}
