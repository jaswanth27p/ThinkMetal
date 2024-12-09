"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { horizontalLoop } from '@/utils/HorizontalScroll';
import { C1, C2, C3, C4, C5, C6, C7 } from '@/assets/ClientsLogo';

export default function Clients() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (scrollRef.current) {
            const itemsArray = Array.from(scrollRef.current.children) as HTMLElement[];
            horizontalLoop(itemsArray, { paused: false, repeat: -1 });
        }
    }, [scrollRef]);

    return (
        <section>
            <div className=' pt-16 pb-20 md:pt-24 md:pb-28'>
                <div ref={scrollRef} className="flex w-full relative items-center overflow-hidden space-x-14">
                    <div className="h-[30px] flex-shrink-0 relative  w-[140px] flex justify-center items-center left-[14px]">
                        <C1/>
                    </div>
                    <div className=" h-[40px] flex-shrink-0 relative w-[140px] flex justify-center items-center">
                        <C2/>
                    </div>
                    <div className="h-[40px] flex-shrink-0 relative w-[160px] flex justify-center items-center">
                        <C3 />
                    </div>
                    <div className="h-[36px] flex-shrink-0 relative w-[150px]   flex justify-center items-center">
                        <C4 />
                    </div>
                    <div className="h-[50px] flex-shrink-0 relative w-[120px] flex justify-center items-center">
                        <C5 />
                    </div>
                    <div className=" h-[40px] flex-shrink-0 relative w-[160px] flex justify-center items-center">
                        <C6 />
                    </div>
                    <div className="h-[60px] flex-shrink-0 relative w-[120px] flex justify-center items-center">
                        <C7 />
                    </div>
                    <div className="h-[30px] flex-shrink-0 relative  w-[140px] flex justify-center items-center">
                        <C1 />
                    </div>
                    <div className=" h-[40px] flex-shrink-0 relative w-[140px] flex justify-center items-center">
                        <C2 />
                    </div>
                    <div className="h-[40px] flex-shrink-0 relative w-[160px] flex justify-center items-center">
                        <C3 />
                    </div>
                    <div className="h-[36px] flex-shrink-0 relative w-[150px]   flex justify-center items-center">
                        <C4 />
                    </div>
                    <div className="h-[50px] flex-shrink-0 relative w-[120px] flex justify-center items-center">
                        <C5 />
                    </div>
                    <div className=" h-[40px] flex-shrink-0 relative w-[160px] flex justify-center items-center">
                        <C6 />
                    </div>
                    <div className="h-[60px] flex-shrink-0 relative w-[120px] flex justify-center items-center right-[14px]">
                        <C7 />
                    </div>
                </div>
            </div>
        </section>
    )
}