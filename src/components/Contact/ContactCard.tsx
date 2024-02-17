import { MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ContactCard({
  icon,
  heading,
  content,
}: {
  icon: React.ReactNode;
  heading: string;
  content: string;
}) {
  return (
    <div
      className={`bg-white h-52 flex flex-col items-center py-10 px-10 justify-between  shadow-md`}
    >
      {icon}
      <p className="text-xl font-bold text-[#777777]">{heading}</p>
      <p className="text-sm font-normal text-black">{content}</p>
    </div>
  );
}
