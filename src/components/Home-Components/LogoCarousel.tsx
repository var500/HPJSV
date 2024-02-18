"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { One, Two, Three, Four, Five, Six } from "@/assets/LogoCarousel";
export function LogoCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        })
      ]}
      className="w-full max-h-6 my-10 "
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1">
        <CarouselItem className=" basis-1/4">
          <div className="p-1">
            <Image src={One} alt={"one"} height={100} width={150} />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-1/6">
          <div className="p-1">
            <Image src={Two} alt={"one"} height={100} width={150} />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-1/4">
          <div className="p-1">
            <Image src={Three} alt={"one"} height={100} width={150} />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-1/4">
          <div className="p-1">
            <Image src={Four} alt={"one"} height={100} width={150} />
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 basis-1/4">
          <div className="p-1">
            <Image src={Five} alt={"one"} height={100} width={150} />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-1/4">
          <div className="p-1">
            <Image src={Six} alt={"one"} height={100} width={150} />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
