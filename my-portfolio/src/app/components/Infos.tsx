"use client";

import React from "react";
import { about } from "@/data/about";

type InfosProps = {
    className?: string;
}

export default function Infos({ className }: InfosProps) {
    const details = [
        { label: "Location", value: "Cannes / Nice, FR" },
        { label: "Education", value: "Epitech Digital School" },
        { label: "Specialization", value: "Full stack/IOT" },
        { label: "Year", value: "2026 / 2027" },
        { label: "Interest", value: "IOT, Design, UI/UX, Backend " }
    ];

    return (
        <div className={`flex flex-col items-end justify-center h-full w-full pr-[10vw] ${className ?? ""}`}>
            <div className="w-full max-w-md flex flex-col gap-8">
                <span className="opacity-40 text-[10px] uppercase tracking-[0.5em] text-right mb-4">Detailed Information</span>
                
                <div className="flex flex-col gap-6">
                    {details.map((item, i) => (
                        <div key={i} className="flex flex-col items-end group">
                            <span className="text-[10px] uppercase tracking-widest opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all">
                                {item.label}
                            </span>
                            <span className="text-xl md:text-2xl font-light tracking-tight">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-right text-sm opacity-40 leading-relaxed font-light">
                    Focused on creating immersive digital <br />
                    experiences that bridge the gap <br />
                    between design and technology.
                </p>
            </div>
        </div>
    );
}
