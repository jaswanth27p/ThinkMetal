import Image from "next/image";
import HeadingFadein from "./animations/HeadingFadein";

export default function LovedBy() {
    const images = Array.from({ length: 8 }, (_, i) => `/love${i + 1}.png`);
    return (
        <section className="bg-white py-16">
            <div className="px-4 md:px-10 lg:px-16 space-y-10">
                <HeadingFadein className="text-heading5 max-w-[300px] md:text-center md:max-w-full md:text-heading3 text-[#282828] leading-[63px]"><span>Loved By Designers At</span></HeadingFadein>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-14 md:gap-y-4 max-w-md md:max-w-full mx-auto">
                    {images.map((src, index) => (
                        <div key={index} className="md:aspect-[296/144] p-4 bg-[#F9FAFB] relative aspect-[164/136]">
                            <div className="relative w-full h-full">
                                <Image src={src} alt={src.split(".")[0]} unoptimized sizes="50vw" fill className="object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}