import CirclePlay from "@/assets/CirclePlay";
import CircleTick from "@/assets/CircleTick";
import Image from "next/image";
import StaggeredContainer from "./animations/StaggeredContainer";

export default function FeedbackSection() {
    return (
        <section >
            <div className="px-4 md:px-10 lg:px-16 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 bg-white">
                <div className=" bg-[#FAFAFA] flex justify-center items-center rounded-[24px] p-4">
                    <div className="relative lg:w-auto lg:h-full w-full aspect-[358/361]">
                        <Image src={"/feedbackImg.png"} unoptimized sizes="100vw" alt={"."} fill />
                    </div>
                </div>
                <StaggeredContainer className="">
                    <button className="bg-gradient-to-r mb-2 flex-shrink-0  transform transition duration-500 from-[#FB432C] to-[#FB432C] text-white border py-2 px-4 rounded-[100px] text-body-medium-semibold hover:bg-none hover:bg-white hover:border-[#FB432C] hover:text-[#FB432C]">
                        Feedback
                    </button>
                    <h2 className="text-[34px] md:text-[54px] leading-[40px] md:leading-[63px] font-semibold text-[#282828]">Better feedback at the right time.</h2>
                    <p className="mt-4 text-[#5F6980] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px]">
                        Campsite has been instrumental in keeping designers aware of
                        each others&apos; work-in-progress in a way that was previously
                        slowing us down. It&apos;s also one of the only channels where.
                    </p>
                    <div className="flex items-center justify-start mt-6  gap-4">
                        <span className="pr-4 py-2 text-body-large-regular leading-[26px] rounded-full flex gap-2"><CircleTick />Coded</span>
                        <span className="pr-4 py-2 text-body-large-regular leading-[26px] rounded-full flex gap-2"><CircleTick />100% Secure</span>
                    </div>
                    <p className="flex gap-2 text-body-large-semibold leading-[26px] mt-6 text-black hover:underline">
                        <CirclePlay />See how it works
                    </p>
                </StaggeredContainer>
            </div>
        </section>
    )
}