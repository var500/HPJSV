"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Card({
  icon,
  heading,
  content,
  url,
}: {
  heading: string;
  content: string;
  url: string;
  icon: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className="flex flex-row w-full min-h-[150px] py-5 gap-4 px-4 rounded-md shadow-md transition  bg-blue-50 hover:bg-blue-300 text-blue-500 hover:text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex px-2 ${hovered ? "text-white" : ""}`}>{icon}</div>
      <div className="flex flex-col w-full gap-4 hover:text-white">
        <Link
          className={`${
            hovered ? "text-white" : "text-[#545454]"
          } text-base lg:text-xl font-semibold`}
          href={url}
        >
          {heading}
        </Link>
        <p
          className={`${
            hovered ? "text-white" : "text-black"
          } font-normal text-xs lg:text-sm`}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
