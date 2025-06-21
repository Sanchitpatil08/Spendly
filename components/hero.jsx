"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundLines } from "./ui/background-lines";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { GridBackgroundDemo } from "./ui/grid-background";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowBigLeft, ArrowRightIcon } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden pt-40 pb-20 px-4">
      {/* Grid background positioned behind everything */}
      <div className="absolute inset-0 z-10">
        <GridBackgroundDemo />
      </div>

      <div className="container mx-auto text-center relative z-40">
       
          <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
            Manage Your Finances <br /> with <ContainerTextFlip />
          </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
              <ArrowRightIcon/>
            </Button>
           
          </Link>
          {/* <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link> */}
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner1.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
