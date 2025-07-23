import React from "react";

export const ManufacturerInfoSection = () => {
  return (
    <section className="absolute w-[639px] h-[248px] top-[332px] left-[406px]">
      <div className="relative w-[635px] h-[248px] bg-[#00000033] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
        <button
          className="all-[unset] box-border w-[150px] h-[42px] gap-2 top-[159px] left-[241px] bg-m-3refprimaryprimary-30 rounded-[100px] shadow-[0px_1px_3px_1px_#00000026] backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)] flex flex-col items-center justify-center absolute overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-[0px_2px_4px_2px_#00000033] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          data-m3-mode="light-high-contrast"
          data-typeface-mode="baseline"
          aria-label="Shop now for handmade and machine made rugs"
        >
          <div className="flex items-center justify-center gap-2 px-6 py-2.5 relative flex-1 self-stretch w-full grow">
            <span className="relative w-fit mt-[-0.50px] font-www-jaipurrugs-com-jost-medium-underline-upper font-[number:var(--www-jaipurrugs-com-jost-medium-underline-upper-font-weight)] text-white text-[length:var(--www-jaipurrugs-com-jost-medium-underline-upper-font-size)] text-center tracking-[var(--www-jaipurrugs-com-jost-medium-underline-upper-letter-spacing)] leading-[var(--www-jaipurrugs-com-jost-medium-underline-upper-line-height)] underline whitespace-nowrap [font-style:var(--www-jaipurrugs-com-jost-medium-underline-upper-font-style)]">
              SHOP NOW
            </span>
          </div>
        </button>

        <h1 className="absolute top-[27px] left-[41px] [font-family:'Cinzel',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[44px] whitespace-nowrap">
          WELCOME TO SAFINA CARPETS
        </h1>

        <p className="absolute top-[83px] left-32 [font-family:'Abhaya_Libre',Helvetica] font-normal text-white text-2xl tracking-[0] leading-8 whitespace-nowrap">
          HANDMADE &amp; MACHINEMADE RUGS
        </p>

        <img
          className="absolute w-[415px] h-px top-[72px] left-[109px] object-cover"
          alt="Decorative line separator"
          src="https://c.animaapp.com/cJKvF53e/img/line-1.svg"
        />
      </div>
    </section>
  );
};
