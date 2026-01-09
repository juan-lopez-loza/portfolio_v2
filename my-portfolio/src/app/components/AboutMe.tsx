"use client";

type AboutMeProps = {
    className?: string;
};

export default function AboutMe({ className }: AboutMeProps) {
    return (
        <main className={`h-full about-me ${className ?? ""}`}>
            <h1 className="absolute bottom-4 left-4 text-black font-black text-[20vw] leading-none tracking-tight">
                Juan
            </h1>
        </main>
    );
}