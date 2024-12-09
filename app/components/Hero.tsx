import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RightArrowLine from '@/assets/RightArrowLine'

export default function Hero() {
    return (
        <section className=' md:mb-[27.5%] lg:mb-[25%] xl:mb-[20%]'>
            <div className="bg-white max-w-[1440px] mx-auto md:text-center py-6 md:py-16 px-4 md:px-10 lg:px-14 relative">
                <h1 className="text-[34px] md:text-[60px] mx-auto max-w-[1192px] text-[#171717] lg:text-[84px] leading-[40px] md:leading-[69px] lg:leading-[89px]  font-semibold mb-4">
                    Create, inspect, and apply synthetic surveillance broadly.
                </h1>
                <p className="text-[#5F5F5F] text-[14px] md:text-[20px] leading-[26px] md:leading-[35px] mb-8">
                    Start with a stunning homepage. Stay motivated without hurting your pocket.
                </p>
                <button className="bg-gradient-to-r flex-shrink-0 transform transition duration-500  from-[#FB432C] to-[#FB432C] text-white border py-2 px-4 rounded-[39px] hover:bg-none hover:bg-white hover:border-[#FB432C] hover:text-[#FB432C]">
                    Start for free
                </button>
                <div className="mt-8 hidden text-[#A3A3A3] text-[12px] md:text-[14px] leading-[20px] md:flex gap-4 justify-center">
                    Want to talk or get a live demo?
                    <Link href="/contact" className="text-[#525252] flex gap-1 justify-center items-center font-medium">
                        Get in touch <RightArrowLine />
                    </Link>
                </div>
                <div className='relative md:absolute inset-0 top-[55%] lg:top-[50%] xl:top-[40%] w-full aspect-[1440/701]'>
                    <Image unoptimized src={'/HeroLines.svg'} alt={'.'} fill sizes='100vw' className='object-contain' />
                    <div className="absolute w-[44px] md:w-[66px] lg:w-[88px] aspect-square  top-[20%] left-[10%] ">
                        <Image unoptimized src={'/HeroLeftIcon1.png'} alt={'.'} sizes='100vw' fill />
                    </div>
                    <div className="absolute  w-[44px] md:w-[66px] lg:w-[88px] aspect-square top-[55%] left-[20%] ">
                        <Image unoptimized src={'/HeroLeftIcon2.png'} alt={'.'} sizes='100vw' fill />
                    </div>
                    <div className="absolute  w-[44px] md:w-[66px] lg:w-[88px] aspect-square top-[80%] left-[5%] ">
                        <Image unoptimized src={'/HeroLeftIcon3.png'} alt={'.'} sizes='100vw' fill />
                    </div>
                    <div className="absolute w-[44px] md:w-[66px] lg:w-[88px] aspect-square  top-[25%] right-[2.5%] ">
                        <Image unoptimized src={'/HeroRightIcon1.png'} alt={'.'} sizes='100vw' fill />
                    </div>
                    <div className="absolute  w-[44px] md:w-[66px] lg:w-[88px] aspect-square top-[47.5%] right-[12.5%] ">
                        <Image unoptimized src={'/HeroRightIcon2.png'} alt={'.'} sizes='100vw' fill />
                    </div>
                    <div className="absolute  w-[44px] md:w-[66px] lg:w-[88px] aspect-square top-[75%] right-[20%] ">
                        <Image unoptimized src={'/HeroRightIcon3.png'} alt={'.'} sizes='100vw' fill />
                    </div>
                </div>
                <div className="mt-8 md:hidden text-[#A3A3A3] text-[12px] md:text-[14px]  leading-[20px] flex gap-4 justify-center">
                    Want to talk or get a live demo?
                    <Link href="/contact" className="text-[#525252] flex gap-1 justify-center items-center font-medium">
                        Get in touch <RightArrowLine />
                    </Link>
                </div>
            </div>
        </section>
    )
}