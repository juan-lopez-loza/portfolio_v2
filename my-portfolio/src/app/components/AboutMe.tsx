"use client";

import React, { useState } from "react";
import Me from "./Me";
import { about } from "@/data/about";
import { status } from "@/data/status";

type AboutMeProps = {
    className?: string;
};

export default function AboutMe({ className }: AboutMeProps) {

    const [index, setIndex] = useState(0);

//FUNCTION FOR CHANGE STATUS
    function changeStatus(e: React.MouseEvent){
        if (index >= status.length - 1) setIndex(0);
        else setIndex(index +1);
    }

    return (
        <main className={`relative w-full h-full about-me ${className ?? ""}`}>
            <Me className="absolute -bottom-235 left-1/2 right-1/2 -translate-x-1/2 w-[90%] md:w-[90%] z-10 origin-top"/> {/*duration-300 hover:scale-110 transition-transform*/}
            <h1 className="absolute top-4 left-1/2 -translate-x-1/2 w-full text-center text-[18vw] md:text-[15vw] font-black text-black leading-none scale-x-[1.6] origin-center uppercase">
                {about.firstname}
            </h1>
            <h3 className="absolute top-75 left-8 text-[4vw] font-black text-black leading-none tracking-tight">
                {about.lastname}
            </h3>
            <div className="absolute top-80 right-8 text-right flex flex-col items-end font-bold text-[3vw] md:text-[1.5vw] uppercase leading-tight z-11">
                <span>{about.birth}</span>
                <span className="text-yellow-400" onMouseOver={changeStatus}>{status[index].title}</span>
                <h3 className="mt-4 w-[33vw] text-[5vw] md:text-[3vw] font-black text-white leading-none uppercase">
                    {about.interest}
                </h3>
            </div>
            <div className="absolute bottom-12 left-8 flex flex-col font-black text-[4vw] md:text-[2vw] uppercase leading-none z-11">
                <span>{about.state}</span>
                <span className="opacity-50 text-[2vw] md:text-[1vw]">Portfolio 2026</span>
            </div>
        </main>
    );
}