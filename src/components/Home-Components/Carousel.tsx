"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import img1 from "@/assets/Carousel1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
export function CarouselDefault() {
  return (
    <Carousel className="max-h-64 lg:max-h-96 overflow-hidden" placeholder={"Carousel"} autoplay>
      <Image
        src={img1}
        alt="image 1"
        className="object-fill w-full h-64 lg:h-96"
        height={530}
        width={1524}
      />
      <Image
        src={img3}
        alt="image 3"
        className="object-fill w-full h-64 lg:h-96"
        height={530}
        width={1524}
      />
      <Image
        src={img2}
        alt="image 2"
        className="object-fill w-full h-64 lg:h-96"
        height={530}
        width={1524}
      />
    
    </Carousel>
  );
}
