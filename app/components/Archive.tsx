import Image from "next/image"
import HeadingFadein from "./animations/HeadingFadein"
import StaggeredContainer from "./animations/StaggeredContainer"

export default function Archive() {
  return (
    <div className="bg-white px-4 md:px-10 lg:px-16 py-16">
      <HeadingFadein><h1 className="text-2xl font-bold mb-14 text-center md:text-heading3 text-heading5">Your Archive of progress</h1></HeadingFadein>
      <StaggeredContainer className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-8 max-w-md md:max-w-4xl w-full">
        <div className="bg-[#FCFCFC] overflow-hidden aspect-[570/398] flex flex-col border border-black/5 rounded-[8px] p-6 pb-0">
          <h2 className="font-semibold md:text-[18px] text-center md:leading-[28px] text-[10px] leading-[16px] mt-4 mb-2">Projects</h2>
          <p className="text-[#525252] text-center mb-4">Organize, follow, and archive.</p>
          <div className="flex flex-grow bg-white border border-black/5 shadow-sm justify-between items-center rounded-b-none rounded-[14px]">
            <div className="relative w-full h-full mx-4 mt-4">
              <Image src={"/ArchiveChart1.png"} unoptimized alt={"."} fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="bg-[#FCFCFC] overflow-hidden aspect-[570/398] flex flex-col border border-black/5 rounded-[8px] p-6 pb-0">
          <h2 className="font-semibold md:text-[18px] text-center md:leading-[28px] text-[10px] leading-[16px] mt-4 mb-2">Member profiles</h2>
          <p className="text-[#525252] text-center mb-4">Automatic portfolios of your work.</p>
          <div className="flex flex-grow bg-white border border-black/5 shadow-sm justify-between items-center rounded-b-none rounded-[14px]">
            <div className="relative bottom-[12%] w-full scale-[115%] h-full">
              <Image src={"/ArchiveChart2.png"} unoptimized alt={"."} fill className="object-contain" />
            </div>
          </div>
        </div>
      </StaggeredContainer>
    </div>
  )
}