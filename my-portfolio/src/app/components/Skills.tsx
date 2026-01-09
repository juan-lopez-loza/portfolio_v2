"use client";

type SkillsProps = {
    className?: string;
}

export default function Skills({ className }: SkillsProps) {
    return (
        <main className={`h-full about-me ${className ?? ""}`}>
            <h1 className="absolute bottom-4 left-4 text-black font-black text-[20vw] leading-none tracking-tight">
                Skills
            </h1>
        </main>
    );
}