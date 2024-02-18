"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const TextTicker = ({ messages }: { messages: string[] }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 20000); 
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
      <Card className="text-ticker overflow-hidden whitespace-nowrap shadow-md">
        <div className="inline-block animate-marquee text-xs py-2">
          {messages[currentMessageIndex]}
        </div>
      </Card>

  );
};

export default TextTicker;
