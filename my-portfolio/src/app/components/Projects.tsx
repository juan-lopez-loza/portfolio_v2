//
//  Contact.tsx
//  Portfolio
//
//  Created by Juan Lopez Loza on 27/02/2026.
//

"use client";

import React from "react";
import { projects } from "@/data/project"

type ProjectsProps ={
    className?: string
}

export default function Projects({ className }: ProjectsProps) {


    return (
        <main className={`h-full ${className ?? ""}`}>
            <div className="absolute top-80 right-8 text-right flex flex-col items-end font-bold text-[3vw] md:text-[1.5vw] uppercase leading-tight z-11">
                <h3 className="text-yellow-400">
                    <a href={projects[0].url} target="_blank" rel="noopener noreferrer">
                        {projects[0].title}
                    </a>
                </h3>
                <span className="text-white whitespace-pre-line">{projects[0].description}</span>

                <h3 className="text-yellow-400">{projects[1].title}</h3>
                <span className="text-white whitespace-pre-line">{projects[1].description}</span>

                <h3 className="text-yellow-400">{projects[2].title}</h3>
                <span className="text-white whitespace-pre-line">{projects[2].description}</span>

                <h3 className="text-yellow-400">
                    <a href={projects[3].url} target="_blank" rel="noopener noreferrer">
                        {projects[3].title}
                    </a>
                </h3>
                <span className="text-white whitespace-pre-line">{projects[3].description}</span>
            </div>
        </main>
    );
}