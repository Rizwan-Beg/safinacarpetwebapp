import React from "react";
import { AboutUsSection } from "../components/layout/services/AboutUsSection";
import { FooterSection } from "../components/layout/FooterSection";
import { HeaderSection } from "../components/layout/HeaderSection";
import { ServicesSection } from "../components/layout/services/ServicesSection";

export const Services = () => {
  return (
    <main
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="60460:14179"
    >
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        <HeaderSection />
        <ServicesSection />
        <AboutUsSection />
        <FooterSection />
      </div>
    </main>
  );
};
