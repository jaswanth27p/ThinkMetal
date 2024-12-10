import { LogoIconOrangeWhite } from "@/assets/LogoIcons";
import StaggeredContainer from "./animations/StaggeredContainer";

export default function CTA() {
    return (
        <section className="bg-white py-16">
            <StaggeredContainer className="text-center px-4 md:px-10 lg:px-16 max-w-xl flex flex-col justify-center items-center mx-auto">
                <LogoIconOrangeWhite />
                <h2 className="text-[26px] mt-4 leading-[40px] font-bold text-[#171717]">
                    Increase your team&apos;s visibility and alignment
                </h2>
                <p className="text-[#525252] md:text-[20px] text-[14px] leading-[20px] md:leading-[28px] mt-2">
                    Start for free, flexible for all teams.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                    <button className="px-6 py-2 text-[14px] leading-[24px] font-semibold text-[#282828] ">
                        Request a demo
                    </button>
                    <button className="bg-gradient-to-r flex-shrink-0  transform transition duration-500 from-[#FB432C] to-[#FB432C] text-white border py-2 px-4 rounded-[39px] hover:bg-none hover:bg-white hover:border-[#FB432C] hover:text-[#FB432C]">
                        Start for free
                    </button>
                </div>
            </StaggeredContainer>
        </section>
    )
}