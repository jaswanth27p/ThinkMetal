import { ReviewIcon1, ReviewIcon2 } from "@/assets/ReviewIcons";
import Image from "next/image";
import StaggeredContainer from "./animations/StaggeredContainer";

export default function Review() {
  return (
      <section className="bg-[#F9FAFB] py-16 ">
          <StaggeredContainer className="max-w-[1140px] px-4 md:px-10 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
              <div className="flex flex-col items-start gap-6">
                  <ReviewIcon1/>
                  <p className="text-[#282828] leading-[30px] text-body-xl-regular md:mb-6">
                      Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what&apos;s transpiring across various teams — impeccably aligning with our pre-existing procedures.
                  </p>
                  <div className="flex items-center gap-4">
                      <Image src={"/Profile4.png"} alt={"."} width={48} height={48} className="rounded-full" />
                      <div>
                          <h4 className="text-body-large-semibold text-[#171717]">Gabriel Valdivia</h4>
                          <p className="text-body-medium-regular text-[#737373]">Principal Product Designer, Patreon</p>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col items-start gap-6">
                  <ReviewIcon2/>
                  <p className="text-[#282828] leading-[30px] text-body-xl-regular md:mb-6">
                      Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.
                  </p>
                  <div className="flex items-center gap-4">
                      <Image src={"/Profile5.png"} alt={"."} width={48} height={48} className="rounded-full"/>
                      <div>
                          <h4 className="text-body-large-semibold text-[#171717]">Buzz Usborne</h4>
                          <p className="text-body-medium-regular text-[#737373]">Principal Designer, Buildkite</p>
                      </div>
                  </div>
              </div>
          </StaggeredContainer>
      </section>
  )
}