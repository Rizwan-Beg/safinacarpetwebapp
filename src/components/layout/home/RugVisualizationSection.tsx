import React, { useState } from "react";

const carouselData = [
  {
    id: 1,
    title: "RUG VISUALIZATION",
    description:
      "you asking for a visualization of how a SAFINA CARPETS rug would look in a room? If so, let me know the type of room (living room, bedroom, office, etc.) and the style of carpet you'd like to see (Persian, Mughal, modern, etc.), and I'll generate an image for you.",
    backgroundImage: "https://c.animaapp.com/cJKvF53e/img/rugvisual-1.png",
    handImage:
      "https://c.animaapp.com/cJKvF53e/img/desktop----all-hands---right-hand-with-tattooed-arm.svg",
    rugImage: "https://c.animaapp.com/cJKvF53e/img/rugvisual-1-1@2x.png",
  },
];

const paginationDots = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
];

export const RugVisualizationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : carouselData.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < carouselData.length - 1 ? prev + 1 : 0));
  };

  const handleTryNow = () => {
    console.log("Try Now button clicked");
  };

  return (
    <section
      className="absolute w-[1449px] h-[750px] top-[1359px] left-0 bg-m-3refprimaryprimary-20"
      role="region"
      aria-label="Rug Visualization Carousel"
    >
      <div className="relative w-[1443px] h-[638px] top-14">
        <button
          className="absolute w-[76px] h-[76px] top-[281px] left-0 z-10 bg-transparent border-none cursor-pointer"
          onClick={handlePrevSlide}
          aria-label="Previous slide"
          type="button"
        >
          <img
            className="w-full h-full"
            alt="Previous"
            src="https://c.animaapp.com/cJKvF53e/img/simple-line-icons-arrow-up.svg"
          />
        </button>

        <div className="absolute w-[1297px] h-[638px] top-0 left-[73px] bg-[url(https://c.animaapp.com/cJKvF53e/img/rugvisual-1.png)] bg-[100%_100%]">
          <div className="relative h-[638px]">
            <div className="absolute w-[582px] h-[562px] top-[74px] left-[715px] rounded-[0px_0px_50px_0px]">
              <div className="relative h-[562px] bg-[url(https://c.animaapp.com/cJKvF53e/img/desktop----all-hands---right-hand-with-tattooed-arm.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[146px] h-[258px] top-[179px] left-[124px]"
                  alt="Rug visualization example"
                  src="https://c.animaapp.com/cJKvF53e/img/rugvisual-1-1@2x.png"
                />
              </div>
            </div>

            <div className="absolute w-[758px] h-[638px] top-0 left-0 rounded-[30px] bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_49%,rgba(50,50,50,0.58)_70%,rgba(255,255,255,0)_100%)]" />

            <header className="absolute w-[412px] h-[61px] top-[92px] left-[104px]">
              <h2 className="[font-family:'Cinzel',Helvetica] font-normal text-white text-[40.5px] tracking-[0] leading-[46.8px] m-0">
                RUG VISUALIZATION
              </h2>
            </header>

            <div className="absolute w-[399px] h-[271px] top-[164px] left-[117px]">
              <p className="[font-family:'Roboto',Helvetica] font-normal text-white text-[14.4px] tracking-[0.45px] leading-[21.6px] m-0">
                you asking for a visualization of how a SAFINA CARPETS rug would
                look in a room? If so, let me know the type of room (living
                room, bedroom, office, etc.) and the style of carpet you&#39;d
                like to see (Persian, Mughal, modern, etc.), and I&#39;ll
                generate an image for you.
              </p>
            </div>

            <button
              className="all-[unset] box-border w-32 h-9 gap-[7.2px] top-[382px] left-[117px] rounded-[90.06px] border-[0.9px] border-solid border-white flex flex-col items-center justify-center absolute overflow-hidden cursor-pointer hover:bg-white hover:bg-opacity-10 focus:outline-2 focus:outline-white focus:outline-offset-2 transition-all duration-200"
              onClick={handleTryNow}
              type="button"
              aria-label="Try rug visualization now"
            >
              <div className="flex items-center justify-center gap-[7.2px] px-[21.61px] py-[9.01px] relative flex-1 self-stretch w-full grow">
                <span className="relative w-fit mt-[-1.89px] mb-[-0.09px] font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-m-3white text-[length:var(--m3-label-large-font-size)] text-center tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [font-style:var(--m3-label-large-font-style)]">
                  Try Now
                </span>
              </div>
            </button>

            <nav
              className="absolute w-[333px] h-[11px] top-[593px] left-[516px]"
              role="tablist"
              aria-label="Carousel pagination"
            >
              {paginationDots.map((dot, index) => (
                <button
                  key={dot.id}
                  className={`absolute w-[104px] h-[11px] top-0 rounded-[90.06px] border-[1.8px] border-solid border-white cursor-pointer transition-all duration-200 hover:bg-white hover:bg-opacity-20 ${
                    dot.active ? "bg-[#d9d9d9]" : "bg-transparent"
                  } ${
                    index === 0
                      ? "left-0"
                      : index === 1
                        ? "left-[114px]"
                        : "left-[229px]"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  role="tab"
                  
                  aria-label={`Go to slide ${index + 1}`}
                  type="button"
                />
              ))}
            </nav>
          </div>
        </div>

        <button
          className="w-[76px] top-[281px] left-[1367px] rotate-180 absolute h-[76px] z-10 bg-transparent border-none cursor-pointer"
          onClick={handleNextSlide}
          aria-label="Next slide"
          type="button"
        >
          <img
            className="w-[73px] top-0 left-[3px] -rotate-180 absolute h-[76px]"
            alt="Next"
            src="https://c.animaapp.com/cJKvF53e/img/simple-line-icons-arrow-up-1.svg"
          />
        </button>
      </div>
    </section>
  );
};
