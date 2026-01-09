"use client";

type ExperiencesProps = {
    className?: string;
}

export default function Experiences({ className }: ExperiencesProps) {
    return (
        <main className={`h-full about-me ${className ?? ""}`}>
            <h1 className="absolute bottom-4 left-4 text-black font-black text-[20vw] leading-none tracking-tight">
                Experiences
            </h1>
        </main>
    );
}