"use client"
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

type Props = {
    children: React.ReactNode;
    className?: string;
    staggerDuration?: number;
    triggerLocation?: string | Element;
    start?: string;
    staggerType?: "default" | "fromCenter";
    end?: string;
}
export default function StaggeredContainer({
    children,
    className = '',
    staggerDuration = 0.2,
    start,
    end,
    staggerType ="default",
}: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (containerRef.current) {
            const elements = containerRef.current.children;
            console.log(window.innerWidth)
            gsap.from(elements, {
                opacity: 0,
                y: 50,
                stagger: (staggerType === "fromCenter" && window.innerWidth>=768)
                    ? {
                        grid: "auto",
                        from: "center",
                        amount: staggerDuration,
                    }
                    : staggerDuration,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: start ?? 'top bottom',
                    end: end ?? 'bottom center',
                    scrub: true,
                },
            });
        }
    }, [staggerDuration]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    )
}