import React from "react";
import { ColorSelectionSection } from "../components/layout/home/ColorSelectionSection";
import { HeroSection } from "../components/layout/home/HeroSection";
import { ManufacturerInfoSection } from "../components/layout/home/ManufacturerInfoSection";
import { RugVisualizationSection } from "../components/layout/home/RugVisualizationSection";
import { SizeSelectionSection } from "../components/layout/home/SizeSelectionSection";
import { FooterSection } from "../components/layout/FooterSection";
import { HeaderSection } from "../components/layout/HeaderSection";

const colorImages = [
  {
    id: 1,
    src: "https://c.animaapp.com/cJKvF53e/img/grey-wool@2x.png",
    alt: "Grey wool rug",
    className:
      "relative max-w-[304px] w-[304px] h-[290px] bg-cover bg-[50%_50%]",
  },
  {
    id: 2,
    src: "https://c.animaapp.com/cJKvF53e/img/mask-group-5281-16a34506-d14b-434b-a453-e87b1cb4936d-png-1@2x.png",
    alt: "Patterned rug",
    className:
      "w-[304px] h-[290px] relative max-w-[304px] bg-cover bg-[50%_50%]",
  },
  {
    id: 3,
    src: "https://c.animaapp.com/cJKvF53e/img/brown-wool@2x.png",
    alt: "Brown wool rug",
    className:
      "relative max-w-[304px] w-[304px] h-[290px] rotate-180 bg-cover bg-[50%_50%]",
  },
  {
    id: 4,
    src: "https://c.animaapp.com/cJKvF53e/img/green-wool@2x.png",
    alt: "Green wool rug",
    className: "relative w-[304px] h-[290px] bg-cover bg-[50%_50%]",
  },
  {
    id: 5,
    src: "https://c.animaapp.com/cJKvF53e/img/white-wool@2x.png",
    alt: "White wool rug",
    className: "relative self-stretch w-full h-[290px] bg-cover bg-[50%_50%]",
  },
];

const colorImagesSecondRow = [
  {
    id: 6,
    src: "https://c.animaapp.com/cJKvF53e/img/mask-group-5274-dab962c7-539d-45cf-a0bd-8efc467876a3-png-1@2x.png",
    alt: "Patterned rug variant",
    className:
      "w-[304px] h-[290px] relative max-w-[304px] bg-cover bg-[50%_50%]",
  },
  {
    id: 7,
    src: "https://c.animaapp.com/cJKvF53e/img/light-red-wool@2x.png",
    alt: "Light red wool rug",
    className:
      "relative max-w-[304px] w-[304px] h-[290px] bg-cover bg-[50%_50%]",
  },
  {
    id: 8,
    src: "https://c.animaapp.com/cJKvF53e/img/maa@2x.png",
    alt: "Maa rug",
    className: "relative w-[304px] h-[290px] bg-cover bg-[50%_50%]",
  },
  {
    id: 9,
    src: "https://c.animaapp.com/cJKvF53e/img/mask-group-5279-11e49122-884e-45ff-b28b-0f7397fb1f70-png-1@2x.png",
    alt: "Patterned rug variant 2",
    className:
      "flex-1 grow h-[272.1px] relative max-w-[304px] bg-cover bg-[50%_50%]",
  },
  {
    id: 10,
    src: "https://c.animaapp.com/cJKvF53e/img/light-grey-wool@2x.png",
    alt: "Light grey wool rug",
    className:
      "relative max-w-[304px] w-[304px] h-[290px] bg-cover bg-[50%_50%]",
  },
];

const galleryImages = [
  {
    id: 1,
    src: "https://c.animaapp.com/cJKvF53e/img/ali-choubin-qsfgz3p2c2e-unsplash@2x.png",
    alt: "Ali choubin",
  },
  {
    id: 2,
    src: "https://c.animaapp.com/cJKvF53e/img/ali-choubin-l5bp-ugwuko-unsplash@2x.png",
    alt: "Ali choubin",
  },
  {
    id: 3,
    src: "https://c.animaapp.com/cJKvF53e/img/erfan-banaei-p00r5jmtmpy-unsplash@2x.png",
    alt: "Erfan banaei",
  },
  {
    id: 4,
    src: "https://c.animaapp.com/cJKvF53e/img/ali-choubin--yw4k-6wrwe-unsplash@2x.png",
    alt: "Ali choubin",
  },
  {
    id: 5,
    src: "https://c.animaapp.com/cJKvF53e/img/ali-choubin--kuwzusofo8-unsplash@2x.png",
    alt: "Ali choubin",
  },
  {
    id: 6,
    src: "https://c.animaapp.com/cJKvF53e/img/ali-choubin-rn9kqjjzoym-unsplash@2x.png",
    alt: "Ali choubin",
  },
  {
    id: 7,
    src: "https://c.animaapp.com/cJKvF53e/img/michael-oxendine-so5ltzshpdq-unsplash@2x.png",
    alt: "Michael oxendine",
  },
  {
    id: 8,
    src: "https://c.animaapp.com/cJKvF53e/img/spacejoy-eyey5yzhsvu-unsplash@2x.png",
    alt: "Spacejoy",
  },
  {
    id: 9,
    src: "https://c.animaapp.com/cJKvF53e/img/saeed-karimi-ryhb78llgaq-unsplash@2x.png",
    alt: "Saeed karimi",
  },
  {
    id: 10,
    src: "https://c.animaapp.com/cJKvF53e/img/firefly-carpets-and-rugs-at-home--premium-quality-handmade-craft@2x.png",
    alt: "Firefly carpets and",
  },
  {
    id: 11,
    src: "https://c.animaapp.com/cJKvF53e/img/firefly-carpets-and-rugs-at-home-premium-quality-handmade-craft-@2x.png",
    alt: "Firefly carpets and",
  },
  {
    id: 12,
    src: "https://c.animaapp.com/cJKvF53e/img/firefly-carpets-and-rugs-at-home--premium-quality-handmade-craft-1@2x.png",
    alt: "Firefly carpets and",
  },
];

export const Desktop = () => {
  return (
    
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="60908:37630"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[3458px] relative">
        <HeroSection />
        <HeaderSection />
        <RugVisualizationSection />
        <div className="absolute w-[1444px] h-[812px] top-0 -left-0.5">
          <div className="absolute w-[1444px] h-[812px] top-0 left-0">
            <div className="relative w-12 h-12 top-[759px] left-[11px]">
              <div className="relative w-[46px] h-[46px]">
                <div className="flex w-[46px] h-[46px] items-start absolute top-0 left-0 overflow-hidden">
                  <div className="flex flex-col w-[46px] h-[46px] items-center justify-center relative">
                    <img
                      className="relative w-[46px] h-[46px]"
                      alt="Component"
                      src="https://c.animaapp.com/cJKvF53e/img/component-1.svg"
                    />
                  </div>

                  <div className="flex flex-col w-[46px] h-[46px] items-center justify-center relative">
                    <img
                      className="relative w-px h-[46px]"
                      alt="Component"
                      src="/img/component-1.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[25px] h-[25px] top-[11px] left-[11px]">
                  <img
                    className="absolute w-[21px] h-[21px] top-0.5 left-0.5"
                    alt="Vector"
                    src="https://c.animaapp.com/cJKvF53e/img/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <ManufacturerInfoSection />
          <img
            className="absolute w-12 h-12 top-[753px] left-[1381px]"
            alt="Component"
            src="https://c.animaapp.com/cJKvF53e/img/component-1-1.svg"
          />
        </div>

        <div className="absolute w-[1440px] h-[626px] top-[2110px] left-0">
          <SizeSelectionSection />
          <div className="flex flex-col w-[1320px] h-[568px] items-start absolute top-[58px] left-[47px]">
            <div className="flex h-[290px] items-center relative self-stretch w-full">
              {colorImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`inline-flex items-start justify-center relative flex-[0_0_auto] ${index > 0 ? "ml-[-50px]" : ""}`}
                >
                  {image.id === 5 ? (
                    <div className="flex flex-col w-[304px] items-center justify-center gap-2.5 relative">
                      <div
                        className={image.className}
                        style={{ backgroundImage: `url(${image.src})` }}
                      />
                    </div>
                  ) : (
                    <div
                      className={image.className}
                      style={{ backgroundImage: `url(${image.src})` }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="inline-flex items-center relative flex-[0_0_auto] -mt-5">
              {colorImagesSecondRow.map((image, index) => (
                <div
                  key={image.id}
                  className={`inline-flex items-start relative flex-[0_0_auto] ${index > 0 ? "ml-[-50px]" : ""}`}
                >
                  {image.id === 9 ? (
                    <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
                      <div className="flex w-[304px] h-[290px] items-start justify-center relative">
                        <div className="flex w-[285.23px] items-start justify-center relative">
                          <div
                            className={image.className}
                            style={{ backgroundImage: `url(${image.src})` }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
                      <div
                        className={image.className}
                        style={{ backgroundImage: `url(${image.src})` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute w-[1440px] h-[67px] top-0 left-0 bg-white" />

          <div className="w-[440px] h-[67px] top-0.5 left-[488px] absolute [font-family:'Josefin_Sans',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-10">
            SHOP BY COLOR
          </div>
        </div>

        <ColorSelectionSection />
        <div className="absolute w-[1440px] h-[74px] top-[2736px] left-0 bg-neutral-200">
          <div className="w-[364px] h-[51px] top-[22px] left-[538px] absolute [font-family:'Josefin_Sans',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-10">
            SHOP BY SIZE
            
          </div>
        </div>
        
        

        <div className="flex flex-wrap w-[1295px] items-start gap-[107px_25px] absolute top-[2833px] left-[72px]">
          {galleryImages.map((image) => (
            <img
              key={image.id}
              className="relative w-[195px] h-[239px] object-cover"
              alt={image.alt}
              src={image.src}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};
