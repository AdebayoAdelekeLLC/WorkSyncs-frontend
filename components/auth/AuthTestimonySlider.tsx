"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const AuthTestimonySlider = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Manage the current slide

  const slides = [
    {
      content:
        "Worksync has transformed the way our organisation approaches employee relation and task distribution. The sheer range of components Keep staff on track with custom forms & checklists and ensure work flows with live reports from the field. ",
      name: "Sarah Ashiru",
      img: "/images/SA.png",
      position: "Chief Operation Officer",
    },
    {
      content:
        "Worksync has transformed the way our organisation approaches employee relation and task distribution. The sheer range of components Keep staff on track with custom forms & checklists and ensure work flows with live reports from the field. ",
      name: "John Doe",
      img: "/images/SA.png",
      position: "CEO",
    },
    {
      content:
        "Worksync has transformed the way our organisation approaches employee relation and task distribution. The sheer range of components Keep staff on track with custom forms & checklists and ensure work flows with live reports from the field. ",
      name: "John Doe",
      img: "/images/SA.png",
      position: "CEO",
    },
  ];

  // Change slide at regular intervals (e.g., 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // Handle changing slide manually based on indicator click
  const changeSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative w-full h-[220px] bg-[#172B39] rounded-[20px] p-[24px]">
      {/* Slide Content */}
      <div className="text-base font-normal leading-[24px] text-[#F0E6E6]">
        {slides[activeSlide].content}
      </div>
      <div className="flex my-4 gap-x-3 items-center">
        <div className="relative h-[40px] w-[40px] rounded-full">
          <Image
            src={slides[activeSlide]?.img ?? ""}
            alt={slides[activeSlide]?.name}
            fill
          />
        </div>
        <div className="">
          <p className="text-sm font-medium leading-[16px] mb-[5px]">
            {slides[activeSlide].name}
          </p>
          <p className="text-xs leading-[14px] text-[#A29999] font-normal">
            {slides[activeSlide].position}
          </p>
        </div>
      </div>
      {/* Navigation Dots (Indicators) */}
      <div className="flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-[8px] h-[8px] rounded-full cursor-pointer ${
              activeSlide === index ? "bg-[#0097FE]" : "bg-[#645D5D]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AuthTestimonySlider;
