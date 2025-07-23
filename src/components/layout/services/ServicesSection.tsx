import React from "react";
import { Card, CardContent } from "../../ui/card";

export const ServicesSection = () => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      title: "1. Carpet Washing & Cleaning Services",
      description:
        "Established in 1970, Safina Carpets has its roots in the Mughal era, where carpets adorned royal courts and symbolised luxury and refinement.",
      imagePosition: "left",
      imageUrl: "", // Empty for the first item as it uses a border instead of an image
      hasBorder: true,
    },
    {
      id: 2,
      title: "2. Carpet Repair & Restoration",
      description:
        "Established in 1970, Safina Carpets has its roots in the Mughal era, where carpets adorned royal courts and symbolised luxury and refinement.",
      imagePosition: "right",
      imageUrl:
        "https://c.animaapp.com/uQnJWZv3/img/aman-chaturvedi-k84vkqsa3nq-unsplash.png",
      hasBorder: false,
    },
    {
      id: 3,
      title: "3. Carpet Customization Services",
      description:
        "Established in 1970, Safina Carpets has its roots in the Mughal era, where carpets adorned royal courts and symbolised luxury and refinement.",
      imagePosition: "left",
      imageUrl: "https://c.animaapp.com/uQnJWZv3/img/rectangle-33.png",
      hasBorder: false,
    },
    {
      id: 7,
      title: "7. Carpet Trade & Exchange Services",
      description:
        "Established in 1970, Safina Carpets has its roots in the Mughal era, where carpets adorned royal courts and symbolised luxury and refinement.",
      imagePosition: "right",
      imageUrl:
        "https://c.animaapp.com/uQnJWZv3/img/naren-morum-6cd8xj4sibw-unsplash.png",
      hasBorder: false,
    },
    {
      id: 8,
      title: "8. Expert Consultation Services",
      description:
        "Established in 1970, Safina Carpets has its roots in the Mughal era, where carpets adorned royal courts and symbolised luxury and refinement.",
      imagePosition: "left",
      imageUrl:
        "https://c.animaapp.com/uQnJWZv3/img/firefly-carpets-and-rugs-at-home-premium-quality-handmade-craft-.png",
      hasBorder: false,
    },
    {
      id: 9,
      title: "9. Corporate & Event Services",
      description:
        "Established in 1970, Safina Carpets has its roots in the Mughal era, where carpets adorned royal courts and symbolised luxury and refinement.",
      imagePosition: "right",
      imageUrl:
        "https://c.animaapp.com/uQnJWZv3/img/firefly-carpets-and-rugs-at-home-premium-quality-handmade-craft--1.png",
      hasBorder: false,
    },
    {
      id: 10,
      title: "10. Carpet Protection Plans",
      description:
        "Established in 1970, Safina Carpets has its roots in the Mughal era, where carpets adorned royal courts and symbolised luxury and refinement.",
      imagePosition: "left",
      imageUrl:
        "https://c.animaapp.com/uQnJWZv3/img/parham-moieni-adoi9b6wzuo-unsplash.png",
      hasBorder: false,
    },
    {
      id: 11,
      title: "The Founder",
      description:
        "Established in 1970, Safina Carpets has its roots in the Mughal era, where carpets adorned royal courts and symbolised luxury and refinement.",
      imagePosition: "right",
      imageUrl:
        "https://c.animaapp.com/uQnJWZv3/img/firefly-create-a-realistic-image-of-a-luxurious-mughal-inspired-.png",
      hasBorder: false,
    },
  ];

  return (
    <section className="flex flex-col w-full gap-8 py-8">
      {services.map((service) => (
        <Card key={service.id} className="border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-6 p-5">
              {service.imagePosition === "left" && (
                <div
                  className={`w-full md:w-[550px] h-[325px] ${
                    service.hasBorder
                      ? "rounded-[20px] border-b-[5px] border-m-3refprimaryprimary-30"
                      : service.imageUrl
                        ? `bg-[url(${service.imageUrl})] bg-cover bg-center`
                        : ""
                  }`}
                />
              )}

              <div className="flex flex-col flex-1 gap-4">
                <h2 className="text-4xl font-normal text-m-3refprimaryprimary-30 [font-family:'Playfair_Display',Helvetica] leading-[44px]">
                  {service.title}
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-base font-normal text-black [font-family:'Jost',Helvetica] leading-7">
                    {service.description}
                  </p>
                  <p className="text-base font-normal text-black [font-family:'Jost',Helvetica] leading-7">
                    {service.description}
                  </p>
                </div>
              </div>

              {service.imagePosition === "right" && (
                <div
                  className={`w-full md:w-[550px] h-[325px] ${
                    service.imageUrl
                      ? `bg-[url(${service.imageUrl})] bg-cover bg-center`
                      : ""
                  }`}
                />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
