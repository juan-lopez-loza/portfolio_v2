"use client";

import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Infos from "./Infos";
import Contact from "./Contact";
import { about } from "@/data/about";

const SECTIONS = ["about", "skills", "projects", "infos", "contact"] as const;

export default function ScrollPanel() {
    const [index, setIndex] = useState(0);

    function displaySection(e: React.MouseEvent<HTMLSpanElement>){
        const section = e.currentTarget.dataset.section;
        if (section) {
            const sectionIndex = SECTIONS.indexOf(section as typeof SECTIONS[number]);
            if (sectionIndex !== -1) setIndex(sectionIndex);
        }
    }

    return (
        <div className="relative w-full h-full overflow-hidden grain border border-white/20">
            {/* Header Section */}
            <div className="absolute top-12 left-12 z-50 pointer-events-none">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
                    {about.lastname}<br/>{about.firstname}
                </h1>
                <p className="mt-4 text-xs tracking-[0.4em] uppercase opacity-40 font-mono">
                    IT student
                </p>
            </div>

            {/* Navigation - Click only */}
            <nav className="absolute bottom-12 left-12 z-50 flex flex-col gap-2">
                {SECTIONS.map((section, i) => (
                    <span
                        key={section}
                        onClick={displaySection}
                        data-section={section}
                        className={`cursor-pointer text-left text-xs uppercase tracking-[0.3em] transition-all duration-300 font-bold ${
                            index === i ? " translate-x-4" : "text-foreground/30 hover:text-foreground"
                        }`}
                    >
                        {index === i ? `• ` : section}
                    </span>
                ))}
            </nav>

            {/* Content Display */}
            <div className="relative w-full h-full">
                <AboutMe className={`absolute inset-0 transition-all duration-700 ${index === 0 ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-full pointer-events-none"}`} />
                <Skills className={`absolute inset-0 transition-all duration-700 ${index === 1 ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-full pointer-events-none"}`} />
                <Projects className={`absolute inset-0 transition-all duration-700 ${index === 2 ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-full pointer-events-none"}`} />
                <Infos className={`absolute inset-0 transition-all duration-700 ${index === 3 ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-full pointer-events-none"}`} />
                <Contact className={`absolute inset-0 transition-all duration-700 ${index === 4 ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-full pointer-events-none"}`} />
            </div>

            {/* Page Counter */}
            <div className="absolute bottom-12 right-12 text-[10px] font-mono opacity-20 tracking-widest uppercase">
                {index + 1} / {SECTIONS.length}
            </div>
        </div>
    );
}
