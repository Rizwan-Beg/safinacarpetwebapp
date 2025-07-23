import React from "react";

const colorCategories = [
  {
    label: "SHOP REDS",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP BLUES",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP GREY",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP GREENS",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP BEIGE",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP WHITES",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP PINKS",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP BROWNS",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP BLACKS",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
  {
    label: "SHOP MULTI",
    image:
      "https://c.animaapp.com/cJKvF53e/img/mask-group-5276-1b042795-9bc7-4990-b283-8574975084e9-png@2x.png",
  },
];

interface ColorCardProps {
  label: string;
  image: string;
  index: number;
}

const ColorCard = ({ label, image, index }: ColorCardProps) => {
  const isTopRow = index < 5;
  const topPosition = isTopRow ? "top-2.5" : "top-[325px]";
  const leftPosition = `left-[${200 + (index % 5) * 304}px]`;

  return (
    <div
      className={`absolute w-[304px] h-[315px] ${topPosition} ${leftPosition}`}
    >
      <div className="relative h-[290px]">
        <div className="inline-flex items-start justify-center absolute top-0 left-0">
          <div
            className="flex-1 grow h-[290px] relative max-w-[304px] bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>

        <div className="flex flex-col w-[304px] items-center pt-0 pb-[0.75px] px-[103px] absolute top-[243px] left-0">
          <div className="text-[15px] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#0f0f0f] text-center tracking-[1.65px] leading-[24.8px] whitespace-nowrap">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ColorSelectionSection = () => {
  return (
    <section
      className="absolute w-[1920px] h-[676px] top-[2649px] left-[-1989px]"
      role="region"
      aria-label="Shop by Color"
    >
      <div className="relative h-[650px] top-[27px] bg-[url(https://c.animaapp.com/cJKvF53e/img/background.png)] bg-cover bg-[50%_50%]">
        {colorCategories.map((category, index) => (
          <ColorCard
            key={category.label}
            label={category.label}
            image={category.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
