"use client";

type ProjectsProps ={
    className?: string
}

export default function Projects({ className }: ProjectsProps) {
    return (
        <main className={`h-full ${className ?? ""}`}>
            <h1 className="absolute bottom-4 left-4 text-black font-black text-[20vw] leading-none tracking-tight">
                Projects
            </h1>
        </main>
    );
}