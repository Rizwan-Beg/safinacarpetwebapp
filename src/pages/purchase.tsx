
import { FooterSection } from "../components/layout/FooterSection";
import { HeaderSection } from "../components/layout/HeaderSection";
import React, { useState } from "react";
import React, { useEffect } from "react";
interface Size {
  name: string;
}

interface Color {
  name: string;
  icon: string;
}

interface FairtradeCard {
  image: string;
  title: string;
  description: string;
}

interface AccordionItem {
  title: string;
  content: string;
}

interface HelpOption {
  label: string;
  underline: boolean;
}

export const Purchase: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>("5 X 7");
  const [selectedColor, setSelectedColor] = useState<string>("Rust");
  const [quantity, setQuantity] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  // Check screen size for responsive design
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const sizes: Size[] = [
    { name: "5 X 7" },
    { name: "6 X 9" },
    { name: "9 X 12" }
  ];
  
  const colors: Color[] = [
    { name: "Rust", icon: "https://c.animaapp.com/x4TEakH5/img/icon-1.svg" },
    { name: "Green", icon: "https://c.animaapp.com/x4TEakH5/img/icon.svg" },
  ];

  const thumbnailImages: string[] = [
    "https://c.animaapp.com/x4TEakH5/img/firefly-carpets-and-rugs-at-home--premium-quality-handmade-craft@2x.png",
    "https://c.animaapp.com/x4TEakH5/img/rugcustom@2x.png",
    "https://c.animaapp.com/x4TEakH5/img/rugvisual@2x.png",
    "https://c.animaapp.com/x4TEakH5/img/firefly-carpets-and-rugs-at-home-premium-quality-handmade-craft--3@2x.png",
    "https://c.animaapp.com/x4TEakH5/img/firefly-carpets-and-rugs-at-home-premium-quality-handmade-craft--3@2x.png",
    "https://c.animaapp.com/x4TEakH5/img/firefly-carpets-and-rugs-at-home-premium-quality-handmade-craft--3@2x.png",
  ];

  const navigationItems: string[] = Array(9).fill("Shop By Area");

  const helpOptions: HelpOption[] = [
    { label: "FAQs", underline: true },
    { label: "Chatbot", underline: false },
    { label: "Call us", underline: false },
    { label: "Email", underline: false },
    { label: "WhatsApp", underline: false },
  ];

  const accordionItems: AccordionItem[] = [
    {
      title: "Product Details",
      content:
        "To cancel your order, please get in touch with our customer service team as soon as possible with your order number. Orders can only be canceled before they are processed and shipped.",
    },
    {
      title: "Shipping and Returns",
      content:
        "To cancel your order, please get in touch with our customer service team as soon as possible with your order number. Orders can only be canceled before they are processed and shipped.",
    },
    {
      title: "Care instruction",
      content:
        "To cancel your order, please get in touch with our customer service team as soon as possible with your order number. Orders can only be canceled before they are processed and shipped.",
    },
  ];

  const fairtradeCards: FairtradeCard[] = Array(3).fill({
    image: "https://c.animaapp.com/x4TEakH5/img/fairtrade-2@2x.png",
    title: "Fairtrade",
    description:
      "Obeetee has created an additional fair-trade facility called the raj carpet, where 2% premium charged to the customers is returned to the weavers in the form of rewards",
  });

  const handleQuantityChange = (change: number): void => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="60907:34318"
    >
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Main content container with responsive adjustments */}
        <div className="relative w-full min-h-screen">
          {/* Background gradients */}
          <div className="absolute w-full h-[654px] top-0 left-0 bg-[linear-gradient(180deg,rgba(229,229,229,1)_0%,rgba(255,153,155,1)_100%)]" />
          <div className="absolute w-full h-[654px] top-[654px] left-0 bg-[linear-gradient(0deg,rgba(255,245,245,0.05)_0%,rgba(241,194,194,0.8)_50%,rgba(255,153,155,1)_100%)]" />

          {/* Blogs heading */}
          <h1 className="absolute w-[179px] h-[61px] top-[243px] left-[5%] sm:left-[8%] md:left-[73px] font-m3-headline-large font-[number:var(--m3-headline-large-font-weight)] text-white text-[length:var(--m3-headline-large-font-size)] tracking-[var(--m3-headline-large-letter-spacing)] leading-[var(--m3-headline-large-line-height)] [font-style:var(--m3-headline-large-font-style)]">
            Blogs
          </h1>

          {/* Main product image - responsive */}
          <img
            className="absolute w-[90%] sm:w-[80%] md:w-[590px] h-auto md:h-[605px] top-[38px] left-[5%] sm:left-[15%] md:left-[173px] object-cover"
            alt="Firefly carpets and rugs at home premium quality handmade craft"
            src="https://c.animaapp.com/x4TEakH5/img/firefly-carpets-and-rugs-at-home-premium-quality-handmade-craft-.png"
          />

          {/* Thumbnail images - hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex flex-col w-[85px] items-start gap-[19px] absolute top-[38px] left-[73px]">
            {thumbnailImages.map((src, index) => (
              <img
                key={index}
                className="relative self-stretch w-full h-[85px] object-cover"
                alt={`Rug thumbnail ${index + 1}`}
                src={src}
              />
            ))}
          </div>

          {/* Product details container - responsive */}
          <div className="absolute w-[90%] sm:w-[80%] md:w-[569px] h-auto md:h-[1008px] top-[650px] sm:top-[700px] md:top-[38px] left-[5%] sm:left-[10%] md:left-[799px] bg-[#fff5f5] rounded-[5px] p-4 md:p-0">
            <h2 className="w-full md:w-[525px] h-auto md:h-[57px] mt-4 md:mt-0 md:absolute md:top-[49px] md:left-[46px] [font-family:'Source_Serif_Pro',Helvetica] font-normal text-black text-2xl md:text-4xl tracking-[0] leading-[19.2px] underline">
              Aaban Hand Knotted
            </h2>

            <p className="w-full md:w-[496px] h-auto md:h-[50px] mt-4 md:mt-0 md:absolute md:top-[130px] md:left-[48px] [font-family:'Crimson_Text',Helvetica] font-normal text-black text-base tracking-[0] leading-[25px]">
              Large Afghan rugs, Custom Size, High Quality Handmade Afghan large
              Red Area rug, Turkmen Tribal Rug, Living room,Afghan rug, Living
              room rug.
            </p>

            <div className="w-full md:w-[188px] h-[15px] mt-4 md:mt-0 md:absolute md:top-[103px] md:left-[49px] [font-family:'Charm',Helvetica] font-normal text-[#8b1010] text-[15px] tracking-[0] leading-[25px] whitespace-nowrap">
              Hand knotted
            </div>

            <div className="w-full md:w-[146px] h-[33px] mt-4 md:mt-0 md:absolute md:top-[193px] md:left-[49px] [font-family:'Crimson_Text',Helvetica] font-normal text-[#920c0c] text-2xl tracking-[0] leading-[25px]">
              $1,399
            </div>

            <p className="w-full md:w-[167px] h-[17px] mt-2 md:mt-0 md:absolute md:top-[222px] md:left-[49px] [font-family:'Crimson_Text',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[25px] whitespace-nowrap">
              (inclusive all tax and duties)
            </p>

            {/* Divider lines */}
            <img
              className="w-[90%] md:w-[495px] h-[9px] mt-4 md:mt-0 md:absolute md:top-[274px] md:left-[42px] object-cover"
              alt="Divider line"
              src="https://c.animaapp.com/x4TEakH5/img/line-2.svg"
            />

            <img
              className="w-[90%] md:w-[495px] h-[9px] mt-4 md:mt-0 md:absolute md:top-[411px] md:left-[42px] object-cover"
              alt="Divider line"
              src="https://c.animaapp.com/x4TEakH5/img/line-3.svg"
            />

            {/* Size selection */}
            <label className="block w-full md:w-[67px] h-[17px] mt-4 md:mt-0 md:absolute md:top-[282px] md:left-[48px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Size:
            </label>

            <div
              className="flex flex-wrap md:inline-flex items-center gap-3 md:gap-7 mt-2 md:mt-0 md:absolute md:top-[310px] md:left-[49px]"
              role="group"
              aria-label="Size selection"
            >
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size.name)}
                  className={`w-[calc(33%-8px)] sm:w-[120px] md:w-[135px] h-[37px] relative border-black flex items-center justify-center gap-2.5 p-2.5 rounded-[5px] border-2 border-solid ${
                    selectedSize === size.name
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  aria-pressed={selectedSize === size.name}
                >
                  <span className="mt-[-5.50px] mb-[-1.50px] text-base relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-center tracking-[0] leading-6 whitespace-nowrap">
                    {size.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Color selection */}
            <label className="block w-full md:w-[67px] h-[17px] mt-4 md:mt-0 md:absolute md:top-[355px] md:left-[49px] text-black text-base [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal] whitespace-nowrap">
              Color:
            </label>

            <div
              className="flex flex-wrap md:absolute md:w-[198px] md:h-[21px] mt-2 md:mt-0 md:top-[382px] md:left-[35px]"
              role="group"
              aria-label="Color selection"
            >
              <div className="relative w-full md:w-[194px] h-[21px] flex md:block">
                {colors.map((color, index) => (
                  <div
                    key={color.name}
                    className={`mr-4 md:mr-0 md:absolute md:top-0 ${index === 0 ? "md:left-0" : "md:left-[106px]"}`}
                  >
                    <button
                      onClick={() => setSelectedColor(color.name)}
                      className="flex w-12 h-[21px] items-center justify-center"
                      
                      aria-label={`Select ${color.name} color`}
                    >
                      <div className="inline-flex items-center justify-center relative flex-[0_0_auto] mt-[-9.48px] mb-[-9.48px] rounded-[100px] overflow-hidden">
                        <div className="inline-flex items-center justify-center p-2 relative flex-[0_0_auto]">
                          <img
                            className="relative w-6 h-6"
                            alt={`${color.name} color option`}
                            src={color.icon}
                          />
                        </div>
                      </div>
                    </button>
                    <span
                      className={`absolute ${index === 0 ? "w-[86px] h-2 top-1.5 left-[42px]" : "w-[47px] h-[5px] top-2 left-[41px]"} [font-family:'Inter',Helvetica] font-normal text-[#533434] text-sm tracking-[0] leading-[normal] whitespace-nowrap`}
                    >
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity selection */}
            <label className="block w-full md:w-[85px] h-[17px] mt-16 md:mt-0 md:absolute md:top-[424px] md:left-[49px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Quantity
            </label>

            <div className="w-[79px] mt-2 md:mt-0 md:absolute md:top-[457px] md:left-[49px] border-black flex items-center justify-center gap-2.5 p-2.5 rounded-[5px] border-2 border-solid">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="text-black text-base [font-family:'Montserrat',Helvetica] font-medium"
                  aria-label="Decrease quantity"
                >
                  --
                </button>
                <span className="text-black text-base [font-family:'Montserrat',Helvetica] font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="text-black text-base [font-family:'Montserrat',Helvetica] font-medium"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button className="w-full sm:w-[80%] md:w-[396px] h-11 mt-4 md:mt-0 md:absolute md:top-[456px] md:left-[139px] bg-m-3refprimaryprimary-30 flex items-center justify-center gap-2.5 p-2.5 rounded-[5px] border-2 border-solid border-m-3refprimaryprimary-30">
              <span className="mt-[-2.00px] text-white text-base relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-center tracking-[0] leading-6 whitespace-nowrap">
                ADD TO CART
              </span>
            </button>

            {/* WhatsApp order button */}
            <button className="w-full sm:w-[80%] md:w-[487px] mt-4 md:mt-0 md:absolute md:top-[513px] md:left-[49px] bg-[#0ed260] border-transparent flex items-center justify-center gap-2.5 p-2.5 rounded-[5px] border-2 border-solid">
              <span className="mt-[-2.00px] text-white text-base relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-center tracking-[0] leading-6 whitespace-nowrap">
                Order via WhatsApp
              </span>
              <img
                className="w-5 h-5"
                alt="WhatsApp icon"
                src="https://c.animaapp.com/x4TEakH5/img/vector-9.svg"
              />
            </button>

            {/* Shipping and help section */}
            <p className="w-full md:w-[333px] h-3.5 mt-8 md:mt-0 md:absolute md:top-[676px] md:left-[76px] [font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              Free India Shipping &amp; Easy Returns
            </p>

            <p className="w-full md:w-[94px] h-3.5 mt-4 md:mt-0 md:absolute md:top-[710px] md:left-[49px] [font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              <span className="font-bold">Need Help</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0]">
                ? Try
              </span>
            </p>

            <img
              className="hidden md:block absolute w-5 h-4 top-[675px] left-[49px]"
              alt="Shipping icon"
              src="https://c.animaapp.com/x4TEakH5/img/vector-10.svg"
            />

            <div className="flex flex-wrap md:inline-flex items-center gap-[5px] mt-2 md:mt-0 md:absolute md:top-[705px] md:left-[143px]">
              {helpOptions.map((option, index) => (
                <button
                  key={index}
                  className="w-[calc(50%-4px)] sm:w-[70px] md:w-[74px] h-[27px] mb-2 md:mb-0 relative border-black flex items-center justify-center gap-2.5 p-2.5 rounded-[5px] border-2 border-solid"
                >
                  <span
                    className={`mt-[-10.50px] mb-[-6.50px] text-black text-[11px] relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-center tracking-[0] leading-6 whitespace-nowrap ${option.underline ? "underline" : ""}`}
                  >
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Rug ID and rating */}
            <div className="mt-4 md:mt-0 md:absolute md:w-[119px] md:h-[15px] md:top-[226px] md:left-[419px] [font-family:'Narnoor',Helvetica] font-normal text-[#6b4343] text-[11px] text-center tracking-[0] leading-6 whitespace-nowrap">
              Rug Id-03218772
            </div>

            <img
              className="mt-2 md:mt-0 md:absolute md:w-[86px] md:h-3.5 md:top-[249px] md:left-[52px]"
              alt="Rating stars"
              src="https://c.animaapp.com/x4TEakH5/img/frame-51.svg"
            />

            {/* Accordion items */}
            <div className="flex flex-col w-full md:w-[550px] items-start mt-8 md:mt-0 md:absolute md:top-[745px] md:left-[8px]">
              {accordionItems.map((item, index) => (
                <details
                  key={index}
                  className="relative self-stretch w-full h-auto md:h-[69px] overflow-hidden border-b-2 [border-bottom-style:solid] border-m-3refprimaryprimary-30"
                >
                  <summary className="flex w-full md:w-[768px] items-center justify-between px-4 py-6 relative top-0 left-0 bg-m-3refprimaryprimary-99 cursor-pointer">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Crimson_Text',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[21px] whitespace-nowrap">
                      {item.title}
                    </span>
                    <div className="relative w-[25px] h-[13px] bg-[url(https://c.animaapp.com/x4TEakH5/img/vector-16.svg)] bg-[100%_100%]" />
                  </summary>
                  <div className="flex w-full md:w-[768px] items-center justify-around gap-2.5 px-4 py-6 relative md:absolute md:top-[69px] md:left-0 bg-m-3refprimaryprimary-99">
                    <p className="relative flex-1 self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-black text-base tracking-[0] leading-[25px]">
                      {item.content}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* Additional information */}
            <p className="w-full md:w-[544px] h-auto md:h-[34px] mt-8 md:mt-0 md:absolute md:top-[973px] md:left-[24px] [font-family:'Montserrat',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[25px]">
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[25px]">
                For more information, please review our{" "}
              </span>
              <a href="#" className="underline">
                Guide
              </a>
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[25px]">
                {" "}
                sections and{" "}
              </span>
              <a href="#" className="underline">
                FAQ
              </a>
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[25px]">
                .
              </span>
            </p>
          </div>

          {/* Divider lines */}
          <img
            className="hidden md:block absolute w-[526px] h-px top-[1307px] left-[72px] object-cover"
            alt="Divider line"
            src="https://c.animaapp.com/x4TEakH5/img/line-8.svg"
          />

          <img
            className="hidden md:block absolute w-[525px] h-[3px] top-[1305px] left-[843px] object-cover"
            alt="Divider line"
            src="https://c.animaapp.com/x4TEakH5/img/line-5.svg"
          />

          {/* Customer review heading */}
          <h2 className="text-center md:text-left w-full md:w-[225px] h-auto md:h-[38px] mt-[1200px] sm:mt-[1400px] md:mt-0 md:absolute md:top-[1283px] md:left-[623px] [font-family:'Playfair_Display',Helvetica] font-normal text-[#584f4f] text-2xl tracking-[0] leading-6">
            Customer Review
          </h2>

          {/* Fairtrade cards */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-[25px] mt-8 md:mt-0 md:absolute md:top-[1098px] md:left-[70px]">
            {fairtradeCards.map((card, index) => (
              <article
                key={index}
                className="relative w-[90%] sm:w-[80%] md:w-[416px] h-[154.61px] bg-m-3refprimaryprimary-90 rounded-[5px]"
              >
                <div className="flex flex-col w-32 h-[155px] items-start p-[4.52px] relative rounded-[5px]">
                  <div className="inline-flex flex-col min-w-[118.71px] h-[145.82px] items-start justify-between p-[9.04px] relative bg-[#edede4] rounded-[4.93px]">
                    <img
                      className="relative max-w-[118.71px] w-[44.18px] max-h-[36.97px] h-[36.97px] bg-cover bg-[50%_50%]"
                      alt="Fairtrade logo"
                      src={card.image}
                    />
                    <div className="flex flex-col h-[50.93px] items-start relative self-stretch w-full">
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative self-stretch mt-[-0.41px] [font-family:'Inter',Helvetica] font-normal text-[#1c1b1b] text-[4.8px] tracking-[0] leading-[7.4px]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start pt-[5.75px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative w-fit mt-[-0.41px] [font-family:'Inter',Helvetica] font-light text-[#191919] text-[10.6px] tracking-[0] leading-[17.7px] whitespace-nowrap">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Recommend For You section */}
          <div className="w-full md:w-[225px] h-auto md:h-[59px] mt-8 md:mt-0 text-center md:text-left md:absolute md:top-[1862px] md:left-[614px]">
            <h2 className="w-full md:w-[225px] h-auto md:h-[38px] md:absolute md:top-[21px] md:left-0 [font-family:'Playfair_Display',Helvetica] font-normal text-[#584f4f] text-2xl tracking-[0] leading-6">
              Recommend For You
            </h2>

            <div className="hidden md:block absolute w-6 h-6 top-0 left-[94px]">
              <div className="relative w-[18px] h-[22px] top-0.5 left-[3px]">
                <img
                  className="absolute w-[18px] h-5 top-0 left-0"
                  alt="Recommendation icon"
                  src="https://c.animaapp.com/x4TEakH5/img/vector-17.svg"
                />
              </div>
            </div>
          </div>

          {/* Recently view section */}
          <div className="w-full md:w-[725px] h-auto md:h-[38px] mt-8 md:mt-0 text-center md:text-left md:absolute md:top-[2397px] md:left-[647px]">
            <img
              className="hidden md:block w-[529px] h-[3px] md:absolute md:top-[17px] md:left-[196px] object-cover"
              alt="Divider line"
              src="https://c.animaapp.com/x4TEakH5/img/line-9.svg"
            />

            <h2 className="w-full md:w-[201px] h-auto md:h-[38px] md:absolute md:top-0 md:left-0 [font-family:'Playfair_Display',Helvetica] font-normal text-[#584f4f] text-2xl tracking-[0] leading-6">
              Recently view
            </h2>
          </div>

          {/* Additional container */}
          <div className="hidden md:block absolute w-[415px] h-[346px] top-[1511px] left-[73px] bg-[#e1b2b2] shadow-[0px_4px_4px_#00000040]" />
        </div>

        {/* Header - responsive */}
        <HeaderSection/>
        <FooterSection/>
      </div>
    </div>
  );
};
