import React from "react";
import { BlogSection } from "../components/layout/blog/BlogSection";
import { ContentWrapperSection } from "../components/layout/blog/ContentWrapperSection";
import { FooterSection } from "../components/layout/FooterSection";
import { HeaderSection } from "../components/layout/HeaderSection";
import { HeroImageSection } from "../components/layout/blog/HeroImageSection";
import { ImageWrapperSection } from "../components/layout/blog/ImageWrapperSection";

export const Blog = () => {
  return (
    <main
      className="bg-[#fff5f5] flex flex-col items-center w-full"
      data-model-id="60467:14657"
    >
      <div className="bg-m-3refprimaryprimary-99 overflow-hidden w-full max-w-[1414px] relative">
        <HeaderSection />
        <HeroImageSection />
        <ImageWrapperSection />
        <ContentWrapperSection />
        <BlogSection />
        <FooterSection />
      </div>
    </main>
  );
};
