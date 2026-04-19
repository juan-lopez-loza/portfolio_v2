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
            <div className="absolute top-80 right-8 flex flex-col items-end gap-4 z-11 h-[60vh] overflow-y-auto scrollbar-y-none scrollbar-hide">
                {projects.project.map((project) => (
                    <div key={project.id} className="flex flex-col items-end gap-1">
                        <h3 className="text-yellow-400 font-bold">
                            {project.url ? (
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {project.title}
                                </a>
                            ) : (
                                project.title
                            )}
                        </h3>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xs italic hover:underline">
                            Github
                        </a>
                        <span className="text-white text-sm text-right whitespace-pre-line max-w-xs">{project.description}</span>
                        <span className="text-gray-400 text-xs italic">{project.technologies.join(', ')}</span>
                        <span className="text-blue-400 text-xs">{project.state}</span>
                    </div>
                ))}
            </div>
        </main>
    );
}