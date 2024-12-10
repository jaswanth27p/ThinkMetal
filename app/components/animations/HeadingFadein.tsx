"use client"
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

type Props = {
    children: React.ReactNode;
    className?: string;
    start?: string;
    end?: string;
}
export default function HeadingFadein({
    children,
    className = '',
    start,
    end,
}: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (containerRef.current) {
            const elements = containerRef.current.children;

            gsap.from(elements, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: start ?? 'bottom bottom',
                    end: end ?? 'bottom center',
                    scrub: true,
                },
            });
        }
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    )
}