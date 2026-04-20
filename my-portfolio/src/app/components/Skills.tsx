//
//  Contact.tsx
//  Portfolio
//
//  Created by Juan Lopez Loza on 27/02/2026.
//

"use client";

import { skill } from "@/data/skill";
import React from "react";

type SkillsProps = {
    className?: string;
}

export default function Skills({ className }: SkillsProps) {
    const frontendSkills = skill.filter(s => s.category === "frontend");
    const tools = skill.filter(s => s.category === "tool");
    const backendSkills = skill.filter(s => s.category === "backend");
    const backendNames = backendSkills.map(s => s.name).join('\n');
    const frontendNames = frontendSkills.map(s => s.name).join('\n');
    const toolsNames = tools.map(s => s.name).join('\n');

    return (
        <main className={`h-full ${className ?? ""}`}>
            <div className="absolute top-80 right-8 text-right flex flex-col items-end font-bold text-[3vw] md:text-[1.5vw] uppercase leading-tight z-11">
                <h3 className="text-yellow-400 italic">Backend</h3>
                <span className="text-white whitespace-pre-line">{backendNames}</span>
                <h3 className="text-yellow-400 italic">Frontend</h3>
                <span className="text-white whitespace-pre-line">{frontendNames}</span>
                <h3 className="text-yellow-400 italic">Tools</h3>
                <span className="text-white whitespace-pre-line">{toolsNames}</span>
            </div>
        </main>
    );
}