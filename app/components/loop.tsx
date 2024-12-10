import Image from "next/image";
import StaggeredContainer from "./animations/StaggeredContainer";

export default function Loop() {
    return (
        <section className="bg-gradient-to-tl from-[#FB432C]  to-[#FF591E]">
            <div className="px-4 md:px-10 lg:px-16 h-full max-w-[1440px] min-h-[550px] sm:min-h-screen lg:min-h-fit lg:aspect-[1440/836]  mx-auto  pt-16 flex flex-col items-center justify-center">
                <StaggeredContainer className="md:text-center mb-8">
                    <h1 className="text-white text-heading6 md:text-heading2 leading-[40px] md:leading-[73px] ">Keep every one in the loop</h1>
                    <p className="text-white mx-auto max-w-[480px] text-body-xl-regular md:text-body-large-semibold mt-4 mb-6">All good things starts with a homepage. Get inspired without breaking your wallet.</p>
                    <button className="flex-shrink-0  transform transition duration-500 bg-white border py-2 px-4 rounded-[39px]">
                        Start for free
                    </button>
                </StaggeredContainer>
                <div className="flex-grow w-full relative">
                    <Image src={"/LoopFrame.png"} unoptimized alt={"."} fill className="object-contain object-bottom"/>
                </div>
            </div>
        </section>
    )
}