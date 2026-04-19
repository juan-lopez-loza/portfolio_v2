"use client";

import React from "react";

type ContactProps = {
    className?: string;
}

export default function Contact({ className }: ContactProps) {
    const socialLinks = [
        { label: "Email", value: "juan.lopez-loza@epitech.eu", url: "mailto:juan.lopez-loza@epitech.eu" },
        { label: "LinkedIn", value: "Juan Lopez Loza", url: "https://www.linkedin.com/in/juan-lopez-loza-12550939b/" },
        { label: "GitHub", value: "juan-lopez-loza", url: "https://github.com/juan-lopez-loza" },
        { label: "Instagram", value: "@juan_llz", url: "https://instagram.com/juan_lopez_loza" }
    ];

    return (
        <div className={`flex flex-col items-end justify-center h-full w-full pr-[10vw] ${className ?? ""}`}>
            <div className="w-full max-w-lg flex flex-col items-end gap-12">
                <span className="opacity-40 text-[10px] uppercase tracking-[0.5em] mb-4">Get in touch</span>
                
                <div className="flex flex-col items-end gap-10">
                    {socialLinks.map((link, i) => (
                        <a 
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-end"
                        >
                            <span className="text-[10px] uppercase tracking-widest opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all translate-y-2 group-hover:translate-y-0">
                                {link.label}
                            </span>
                            <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:italic transition-all">
                                {link.value.split('@')[0]}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="mt-8 text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-20">
                        Based in Nice, France<br />
                        Available for opportunities 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
