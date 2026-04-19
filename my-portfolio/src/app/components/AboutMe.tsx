//
//  AboutMe.tsx
//  Portfolio
//
//  Created by Juan Lopez Loza on 10/01/2026.
//

"use client";

import React, { useState } from "react";
import { about } from "@/data/about";
import { status } from "@/data/status";

type AboutMeProps = {
    className?: string;
};

export default function AboutMe({ className }: AboutMeProps) {

    const [index, setIndex] = useState(0);

//FUNCTION FOR CHANGE STATUS
    function changeStatus(e: React.MouseEvent){
        if (index >= status.length - 1) setIndex(0);
        else setIndex(index +1);
    }

    return (
            <div className={`absolute right-8 mt-35 mr-5 text-right flex flex-col items-end font-bold uppercase leading-tight z-11 ${className ?? ""}`}>
                <span>Born in 2007</span>
                <span>in Cannes, France.</span>
                <span>I love create</span>
                <span>and solving</span>
                <span>problem with</span>
                <span>programming.</span>
                <span>I'm student at</span>
                <span>Epitech Nice</span>
                <span>currently in</span>
                <span>first year of</span>
                <span>Bachelors.</span>
                <span className="text-yellow-400" onMouseOver={changeStatus}>{status[index].title}</span>
            </div>
    );
}