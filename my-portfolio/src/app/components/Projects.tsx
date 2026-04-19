"use client";

import React from "react";
import { projects } from "@/data/project"

type ProjectsProps = {
    className?: string
}

export default function Projects({ className }: ProjectsProps) {
    return (
        <div className={`flex flex-col items-end w-full h-full pr-[10vw] overflow-y-auto scrollbar-hide overflow-hidden${className ?? ""}`}>
            {/* Spacer for initial positioning - better than justify-center for scrollable content */}
            <div className="w-full max-w-4xl flex flex-col items-end pt-40 pb-40 gap-16">
                <span className="opacity-40 text-[10px] uppercase tracking-[0.6em] mb-4">Selected Works</span>
                
                <div className="flex flex-col gap-32 w-full items-end">
                    {projects.project.map((project, i) => (
                        <div key={project.id} className="group relative flex flex-col items-end">
                            {/* Project Number */}
                            <span className="text-[10px] font-mono opacity-20 mb-4 tracking-[0.2em]">
                                PROJECTS / 0{i + 1}
                            </span>
                            
                            {/* Project Title */}
                            <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-right group-hover:text-accent transition-colors duration-500">
                                {project.url ? (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                                        {project.title.split(' ').map((word, index) => (
                                            <span key={index} className="block">{word}</span>
                                        ))}
                                    </a>
                                ) : (
                                    <span className="opacity-40 block">
                                        {project.title.split(' ').map((word, index) => (
                                            <span key={index} className="block">{word}</span>
                                        ))}
                                    </span>
                                )}
                            </h3>

                            {/* Project Metadata */}
                            <div className="mt-8 flex flex-col items-end gap-4 max-w-sm">
                                <p className="text-right text-sm font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap justify-end gap-x-4 gap-y-1 mt-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-30 group-hover:opacity-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.githubUrl && (
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="mt-6 text-[10px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:border-accent hover:text-accent transition-all"
                                    >
                                        View Source code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
