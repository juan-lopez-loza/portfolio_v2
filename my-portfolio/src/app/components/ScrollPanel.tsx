"use client";

import React, { useState, useRef } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Infos from "./Infos";
import Contact from "./Contact";
import { about } from "@/data/about";

const SECTIONS = ["about", "skills", "projects", "infos", "contact"] as const;

export default function ScrollPanel() {
    const [index, setIndex] = useState(0);
    const isThrottled = useRef(false);

//FUNCTION FOR VIRTUAL SCROLL
    function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
        if (isThrottled.current) return;

        const direction = e.deltaY > 0 ? 1 : -1;

        setIndex((prev) => {
            const next = prev + direction;
            if (next < 0) return 0;
            if (next >= SECTIONS.length) return SECTIONS.length - 1;
            return next;
        });

        isThrottled.current = true;
        setTimeout(() => {
            isThrottled.current = false;
        }, 1000);
    }

//FUNCTION FOR DISPLAY SECTION
    function displaySection(e: React.MouseEvent<HTMLSpanElement>){
        const section = e.currentTarget.dataset.section;
        if (section) {
            const sectionIndex = SECTIONS.indexOf(section as typeof SECTIONS[number]);
            if (sectionIndex !== -1) setIndex(sectionIndex);
        }
    }

    return (
        <div className="relative bg-black w-full h-full overflow-hidden border-white/50 border">
            <div className="flex flex-col mt-8 ml-8">
                <h1 className="font-bold text-[3vw]">{about.lastname} {about.firstname}</h1>
                <h3>IT Student</h3>
                <div className="flex flex-col mt-8">
                    <span className="cursor-pointer" onClick={displaySection} data-section="about">About</span>
                    <span className="cursor-pointer mt-2" onClick={displaySection} data-section="skills">Competences</span>
                    <span className="cursor-pointer mt-2" onClick={displaySection} data-section="projects">Projects</span>
                    <span className="cursor-pointer mt-2" onClick={displaySection} data-section="infos">Info</span>
                    <span className="cursor-pointer mt-2" onClick={displaySection} data-section="contact">Contact</span>
                </div>
            </div>
            <AboutMe className={`transition-all duration-500 ease-in-out ${index === 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
            <Skills className={`transition-all duration-500 ease-in-out ${index === 1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
            <Projects className={`transition-all duration-500 ease-in-out ${index === 2 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
            <Infos className={`transition-all duration-500 ease-in-out ${index === 3 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
            <Contact className={`transition-all duration-500 ease-in-out ${index === 4 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
        </div>
    );
}