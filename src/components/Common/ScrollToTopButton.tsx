"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;

    setIsVisible(scrollPercentage > 20);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="ease-in duration-300">
      <Button
        variant={"scrollButton"}
        className={`fixed right-4 bottom-4 w-10 h-10 border-r-[50%] p-1 ${
          isVisible
            ? "visible transition-all ease-linear duration-200 "
            : "transition-all ease-linear opacity-0"
        } `}
        onClick={scrollToTop}
      >
        <ArrowUp />
      </Button>
    </div>
  );
}
