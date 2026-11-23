import React from 'react';

export default function HoneyDripDivider({ className = "", flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-10 sm:h-14 lg:h-18 object-cover ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        {/* Layered Golden Honey Droplets & Waves */}
        <path
          d="M0 0H1440V28C1405 28 1390 42 1360 42C1330 42 1315 28 1285 28C1255 28 1240 58 1210 58C1180 58 1165 28 1135 28C1105 28 1090 68 1060 68C1030 68 1015 28 985 28C955 28 940 48 910 48C880 48 865 28 835 28C805 28 790 75 760 75C730 75 715 28 685 28C655 28 640 45 610 45C580 45 565 28 535 28C505 28 490 62 460 62C430 62 415 28 385 28C355 28 340 52 310 52C280 52 265 28 235 28C205 28 190 78 160 78C130 78 115 28 85 28C55 28 40 46 15 46C5 46 0 42 0 42V0Z"
          fill="#D49B28"
          fillOpacity="0.85"
        />
        <path
          d="M0 0H1440V20C1415 20 1400 35 1370 35C1340 35 1325 20 1295 20C1265 20 1250 48 1220 48C1190 48 1175 20 1145 20C1115 20 1100 55 1070 55C1040 55 1025 20 995 20C965 20 950 38 920 38C890 38 875 20 845 20C815 20 800 62 770 62C740 62 725 20 695 20C665 20 650 38 620 38C590 38 575 20 545 20C515 20 500 52 470 52C440 52 425 20 395 20C365 20 350 42 320 42C290 42 275 20 245 20C215 20 200 65 170 65C140 65 125 20 95 20C65 20 50 38 20 38C8 38 0 35 0 35V0Z"
          fill="#C99A35"
        />
        {/* Subtle highlights on the honey drops */}
        <circle cx="160" cy="74" r="3.5" fill="#FBF4E4" fillOpacity="0.6" />
        <circle cx="760" cy="71" r="3.5" fill="#FBF4E4" fillOpacity="0.6" />
        <circle cx="1060" cy="64" r="3" fill="#FBF4E4" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
