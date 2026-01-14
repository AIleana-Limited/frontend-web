import Hero from "@/components/site/home/Hero";
import TrustedClient from "@/components/site/home/TrustedClient";
import UseCase from "@/components/site/home/UseCase";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <TrustedClient />
      <section className="w-full mt-20 p-2">
        <div className="max-w-7xl mx-auto flex flex-col gap-5.5 justify-centery items-center">
          {/* Badge */}
          <div className="inline-flex max-w-md rounded-full border border-[#C7A55C] bg-[#F5E4AF] px-4 py-2 text-xs font-medium text-black/70">
            Reasons to choose us
          </div>

          <h2 className="text-(--text-primay) text-4xl text-center font-medium leading-[1.05] md:text-[54px]">
            Aileana packed with powerful features
          </h2>

          <p className="max-w-md text-center  text-sm leading-relaxed text-(--text-primary) md:text-base">
            Discover how AIleana transforms everyday social interactions into
            income opportunities
          </p>

          <div className="h-50"></div>
        </div>
      </section>
      <UseCase />
    </div>
  );
};

export default page;
