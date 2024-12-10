import LogoIconOrangeGray from "@/assets/LogoIcons";
import RightArrow from "@/assets/RightArrow";
import Image from "next/image";
import StaggeredContainer from "./animations/StaggeredContainer";

export default function BetterFeadback() {
    return (
        <section className="bg-gradient-to-tl from-[#FB432C]  to-[#FF591E]">
            <div className="px-4 md:px-10 lg:px-16 max-w-[1440px] mx-auto  py-16 flex flex-col items-center justify-center">
                <StaggeredContainer className="md:text-center mb-8">
                    <h1 className="text-white text-heading6 md:text-heading3 leading-[40px] md:leading-[63px]">Better feedback at the right time.</h1>
                    <p className="text-white text-body-2xl-regular leading-[24px] mt-2">Best time here</p>
                </StaggeredContainer>
                <div className="bg-[#111111] relative border border-black/5 overflow-hidden aspect-[1150/358] text-white rounded-[24px] md:px-10 shadow-lg max-w-md md:max-w-6xl w-full min-h-[350px]">
                    <div className="relative md:-top-[80px] md:bg-[#222222] h-full w-full flex flex-col justify-center md:justify-end  rounded-[20px] p-8 space-y-8 md:space-y-16">
                        <div className="flex gap-4 flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="flex gap-4">
                                <LogoIconOrangeGray />
                                <div className="flex flex-col items-start gap-1">
                                    <p className="text-[21px] leading-[34px] font-medium">Cloudhub</p>
                                    <p className="text-[#737373] text-[20px] leading-[30px]">2m ago in Brand</p>
                                </div>
                            </div>
                            <button className="bg-gradient-to-r flex-shrink-0  transform transition duration-200 from-[#FB432C] to-[#FB432C] text-white py-2 px-4 rounded-[39px] hover:bg-none border border-transparent  hover:border-[#FB432C] hover:text-[#FB432C]">
                                View post
                            </button>
                        </div>
                        <div className="w-full h-[4px] md:hidden bg-[#2C2C2C] text-transparent select-none">.</div>
                        <div className="flex justify-between items-center">
                            <div className="mt-4 gap-4 md:gap-0 flex flex-col md:flex-row md:items-center w-full">
                                <div className="flex">
                                    <Image src={"/profile1.png"} alt={"."} width={48} height={48} className="rounded-full" />
                                    <Image src={"/profile2.png"} alt={"."} width={48} height={48} className="rounded-full relative -left-[18px]" />
                                    <Image src={"/profile3.png"} alt={"."} width={48} height={48} className="rounded-full relative -left-[36px]" />
                                </div>
                                <div className="flex flex-grow items-center justify-between">
                                    <p className="text-[12px] leading-[20px] md:text-[20px] md:leading-[30px] max-w-[400px]">3 people are looking for feedback this week</p>
                                    <RightArrow />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <StaggeredContainer staggerType="fromCenter" className="grid md:grid-cols-3 gap-4 mt-4 max-w-md md:max-w-6xl w-full">
                    <div className="bg-[#111111] text-white rounded-[24px] p-6 flex flex-col items-start">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9997 25.4168C22.9912 25.4168 25.4163 22.9917 25.4163 20.0002C25.4163 17.0086 22.9912 14.5835 19.9997 14.5835C17.0081 14.5835 14.583 17.0086 14.583 20.0002C14.583 22.9917 17.0081 25.4168 19.9997 25.4168Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.0003 32.0832C13.3269 32.0832 7.91699 26.6733 7.91699 19.9998C7.91699 13.3264 13.3269 7.9165 20.0003 7.9165C31.3545 7.9165 32.0837 15.2082 32.0837 19.9998V22.0832C32.0837 23.9242 30.5913 25.4165 28.7503 25.4165C26.9093 25.4165 25.417 23.9242 25.417 22.0832V14.5832" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="mt-2 font-bold">Mentions</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Mention anyone on your team to include them in a post.
                        </p>
                    </div>
                    <div className="bg-[#111111] text-white rounded-[24px] p-6 flex flex-col items-start">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.667 11.3335C10.667 12.4381 9.77155 13.3335 8.66699 13.3335C7.56243 13.3335 6.66699 12.4381 6.66699 11.3335C6.66699 10.2289 7.56243 9.3335 8.66699 9.3335C9.77155 9.3335 10.667 10.2289 10.667 11.3335Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.667 20.6665C10.667 21.7709 9.77155 22.6665 8.66699 22.6665C7.56243 22.6665 6.66699 21.7709 6.66699 20.6665C6.66699 19.5621 7.56243 18.6665 8.66699 18.6665C9.77155 18.6665 10.667 19.5621 10.667 20.6665Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.333 11.3335H25.6663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.333 20.6665H25.6663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="mt-2 font-bold">Polls</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Get a quick gut check from the team on design options.
                        </p>
                    </div>
                    <div className="bg-[#111111] text-white rounded-[24px] p-6 flex flex-col items-start">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33301 16.0002C6.33301 10.6614 10.6609 6.3335 15.9997 6.3335C21.3385 6.3335 25.6663 10.6614 25.6663 16.0002C25.6663 21.339 21.3385 25.6668 15.9997 25.6668C10.6609 25.6668 6.33301 21.339 6.33301 16.0002Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 16.1271L14.4828 18.6668L20 13.3335" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="mt-2 font-bold">Resolve comments</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Mark comments as resolved to keep the conversation focused.
                        </p>
                    </div>
                </StaggeredContainer>
            </div>
        </section>
    )
}