"use client";

import { useState, useRef } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Experiences from "./Experiences";

const SECTIONS = ["about", "skills", "projects", "experiences"] as const;

export default function ScrollPanel() {
    const [index, setIndex] = useState(0);
    const isThrottled = useRef(false);

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

    return (
        <div
            onWheel={handleWheel}
            className="relative bg-red-600 w-full h-full overflow-hidden border-white/50 border"
        >
            <AboutMe className={index === 0 ? "active" : "hidden"} />
            <Skills className={index === 1 ? "active" : "hidden"} />
            <Projects className={index === 2 ? "active" : "hidden"} />
            <Experiences className={index === 3 ? "active" : "hidden"} />
        </div>
    );
}