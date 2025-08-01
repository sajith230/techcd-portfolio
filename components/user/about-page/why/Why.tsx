import React from "react";
import SectionTitle from "./SectionTitle";
import BrandCarousel from "../../home-page/about/BrandCarousel";

const Why = () => {
  return (
    <section className="relative mt-[3em] pb-[3em]">
      <div className="from-primary absolute top-1/2 left-0 aspect-square w-2/5 -translate-x-1/2 rounded-full bg-radial to-transparent blur-[5em]"></div>

      <div className="px-container relative container mx-auto mb-[3em]">
        <SectionTitle />
        <p className="text-[13px] sm:text-[15px] md:text-[17px] lg:col-span-6 lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <div className="mt-[1em] grid grid-cols-1 gap-[1.5em] lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-foreground/10 border-foreground/20 rounded-[1em] border px-[1.5em] py-[1em] text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px]"
            >
              <div className="flex items-center gap-[0.5em]">
                <div className="size-[2em] rounded-full bg-[#D9D9D9]"></div>
                <p className="text-[1.1em]">Lorem Ipsum</p>
              </div>
              <p className="mt-[0.5em] text-[0.9em] font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,
              </p>
            </div>
          ))}
        </div>
      </div>

      <BrandCarousel />
    </section>
  );
};

export default Why;
