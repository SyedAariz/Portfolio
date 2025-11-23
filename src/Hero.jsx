import React from "react";
import profilePic from "./assets/profilePic.jpg"; // 👈 update this path as needed


const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="animate-fade-up flex flex-col items-center mt-20"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="relative group">
        {/* Glowing outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-80 group-hover:scale-110"></div>

        {/* Profile picture with 3D spin + glow */}
        <img
          src={profilePic}
          alt="Profile"
          className="relative w-64 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-700 shadow-lg transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
        />
      </div>
    </div>
  );
};

export default Hero;
