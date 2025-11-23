'use client';

import React from "react";
import Boxes from "./background-boxes";
import { Marquee, MarqueeContent, MarqueeItem } from "./marquee";

import PepsiMan from "./assets/PepsiMan.jpg";
import Uncharted from "./assets/Uncharted.jpg";
import Bo2 from "./assets/Bo2.jpg";
import Crash from "./assets/Crash.jpeg"
import GTA from "./assets/GTA.jpg"
import GOW from "./assets/GOW.jpg"
import SLY from "./assets/SLY.jpg"



export default function BackgroundBoxesDemo() {
  const images = [PepsiMan, Uncharted, Bo2, Crash, GTA, GOW, SLY];

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-none">

      {/* --- MARQUEE --- */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <Marquee className="w-[80%]">
          <MarqueeContent speed={40}>
            {new Array(12).fill(null).map((_, index) => {
              const imgSrc = images[index % 7]; // rotate between the 4 images

              return (
                <MarqueeItem className="h-28 w-28 mx-4" key={index}>
                  <img
                    src={imgSrc}
                    alt={`Game ${index}`}
                    className="shadow-xl object-cover rounded-lg"
                  />
                </MarqueeItem>
              );
            })}
          </MarqueeContent>
        </Marquee>
      </div>

      {/* Radial mask overlay */}
      <div
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        style={{
          maskImage: "radial-gradient(white, transparent)",
          WebkitMaskImage: "radial-gradient(white, transparent)",
        }}
      />

      {/* Animated Boxes */}
      <Boxes />
    </div>
  );
}
