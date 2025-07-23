import React from "react";

const servicesData = [
  {
    id: 1,
    image: "https://c.animaapp.com/cJKvF53e/img/craftsmanship@2x.png",
    title: "Heirloom\nCraftsmanship",
    description: "We are proud to champion\nartisanal techniques.",
    linkText: "Craftsmanship",
    linkIcon: "https://c.animaapp.com/cJKvF53e/img/component-3-3.svg",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/cJKvF53e/img/funding-1@2x.png",
    title: "Heirloom\nCraftsmanship",
    description: "We are proud to champion\nartisanal techniques.",
    linkText: "Craftsmanship",
    linkIcon: "https://c.animaapp.com/cJKvF53e/img/component-3-3.svg",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/cJKvF53e/img/warranty-1@2x.png",
    title: "Heirloom\nCraftsmanship",
    description: "We are proud to champion\nartisanal techniques.",
    linkText: "Craftsmanship",
    linkIcon: "https://c.animaapp.com/cJKvF53e/img/component-3-3.svg",
  },
  {
    id: 4,
    image: "https://c.animaapp.com/cJKvF53e/img/services@2x.png",
    title: "A Truly Personal\nService",
    description: "We will help you find your dream\nrug.",
    linkText: "All our services",
    linkIcon: "https://c.animaapp.com/cJKvF53e/img/component-3.svg",
  },
];

export const HeroSection = () => {
  return (
    <section className="absolute w-[1440px] h-[547px] top-[812px] left-0 bg-white">
      <div className="relative h-[547px] bg-m-3refprimaryprimary-99">
        <header className="absolute w-[727px] h-[60px] top-[17px] left-[390px] [font-family:'Caveat',Helvetica] font-normal text-m-3refprimaryprimary-20 text-[45px] tracking-[0] leading-[52px] whitespace-nowrap">
          "MEET MANUFACTURERS DIRECTLY"
        </header>

        <div className="flex gap-[26px] absolute top-[98px] left-[70px]">
          {servicesData.map((service, index) => (
            <article key={service.id} className="w-[305px] h-[428px] relative">
              <div className="absolute w-[305px] h-[426px] top-0 left-0 bg-white rounded-[20px]" />

              <div className="w-64 h-[407px] relative left-[25px] flex flex-col items-start gap-[24.9px] top-[9px]">
                <div className="flex w-[242.67px] items-start justify-center relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#15130f]">
                  <div className="flex flex-col items-center pt-0 pb-px px-0 relative flex-1 grow">
                    <div className="flex items-start justify-center pt-0 pb-[5px] px-0 relative self-stretch w-full flex-[0_0_auto]">
                      {service.id === 4 ? (
                        <div className="relative flex-1 max-w-[242.67px] grow self-stretch bg-[url(https://c.animaapp.com/cJKvF53e/img/services@2x.png)] bg-cover bg-[50%_50%]" />
                      ) : (
                        <div className="relative flex-1 max-w-[242.67px] grow self-stretch" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center px-[13.34px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-extralight text-black text-[29.2px] text-center tracking-[0] leading-8">
                    {service.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>

                <div className="flex flex-col items-center pl-[10.56px] pr-[10.58px] pt-0 pb-[0.1px] relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-[14.4px] text-center tracking-[0] leading-[normal]">
                    {service.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.description.split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <div className="flex items-center justify-center pl-[44.4px] pr-[44.41px] py-0 relative self-stretch w-full flex-[0_0_auto] mb-[-9.93px]">
                  <div className="relative w-[153.86px] h-11">
                    <div className="relative w-[154px] h-6 top-2.5">
                      <a
                        href="#"
                        className="absolute w-[130px] h-[19px] top-0 left-0 font-www-therugcompany-com-semantic-link font-[number:var(--www-therugcompany-com-semantic-link-font-weight)] text-[#15130f] text-[length:var(--www-therugcompany-com-semantic-link-font-size)] text-center tracking-[var(--www-therugcompany-com-semantic-link-letter-spacing)] leading-[var(--www-therugcompany-com-semantic-link-line-height)] whitespace-nowrap [font-style:var(--www-therugcompany-com-semantic-link-font-style)]"
                      >
                        {service.linkText}
                      </a>

                      <img
                        className="absolute w-6 h-6 top-0 left-[130px]"
                        alt="Arrow icon"
                        src={service.linkIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {service.id === 2 && (
                <div className="absolute w-[196px] h-[196px] top-1.5 left-[49px] bg-[url(https://c.animaapp.com/cJKvF53e/img/funding-1@2x.png)] bg-cover bg-[50%_50%]" />
              )}

              {service.id === 3 && (
                <img
                  className="absolute w-[198px] h-[186px] top-3 left-[55px] object-cover"
                  alt="Warranty"
                  src="https://c.animaapp.com/cJKvF53e/img/warranty-1@2x.png"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
