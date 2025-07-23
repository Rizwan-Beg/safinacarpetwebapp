import React from "react";
import { Input } from "../ui/input";

// Define data for footer links to make the code more maintainable
const companyInfoLinks = [
  { title: "Shop", href: "#" },
  { title: "Custom Orders", href: "#" },
  { title: "Manufacturing Process", href: "#" },
  { title: "About Us", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Services", href: "#" },
];

const supportPoliciesLinks = [
  { title: "Shipping Policy", href: "#" },
  { title: "Return & Refund Policy", href: "#" },
  { title: "Terms & Conditions", href: "#" },
  { title: "FAQs", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Guide", href: "#" },
  { title: "Track My Order", href: "#" },
];

const businessWholesaleLinks = [
  { title: "Bulk Orders", href: "#" },
  { title: "Wholesale Inquiry Form", href: "#" },
  { title: "Corporate & Hospitality Projects", href: "#" },
  { title: "SAFINA CARPETS Reseller", href: "#" },
  { title: "Export & International Trade Partnerships", href: "#" },
];

const socialIcons = [
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1.svg",
    alt: "Facebook",
  },
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1-1.svg",
    alt: "Instagram",
  },
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1-2.svg",
    alt: "Twitter",
  },
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1-3.svg",
    alt: "Pinterest",
  },
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1-4.svg",
    alt: "YouTube",
  },
];

const paymentIcons = [
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1-5.svg",
    alt: "American Express",
  },
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1-6.svg",
    alt: "Mastercard",
  },
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1-7.svg",
    alt: "PayPal",
  },
  { src: "https://c.animaapp.com/DpZTXc8l/img/component-1-8.svg", alt: "Visa" },
  {
    src: "https://c.animaapp.com/DpZTXc8l/img/component-1-9.svg",
    alt: "Google Pay",
  },
];

export const FooterSection = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="w-full bg-m-3refprimaryprimary-95 py-14 px-4 md:px-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info Column */}
          <div className="border-r border-[#240000] pr-6">
            <div className="mb-4">
              <h2 className="font-['Cinzel',Helvetica] font-bold text-m-3refprimaryprimary-30 text-2xl text-center tracking-[1.20px] leading-[25px]">
                SAFINA CARPETS TRADERS
              </h2>
            </div>

            <div className="text-center mb-4">
              <p className="font-['Montserrat',Helvetica] font-normal text-[#160000] text-[14.5px] underline">
                &#34;Make Your House Happy&#34;
              </p>
            </div>

            <div className="text-center mb-6">
              <p className="font-['Montserrat',Helvetica] font-normal text-[#160000] text-[14.5px]">
                Preserving the heritage of Mughal-era artistry through premium
                handmade and machine-made rugs and carpets
              </p>
            </div>

            <div className="text-center">
              <address className="font-normal text-[#240000] text-sm not-italic">
                2592 S. Beverly St
                <br />
                Suite 130
                <br />
                Boise, ID 8xc09
              </address>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Company Info */}
              <div>
                <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#160000] text-[17px] mb-3">
                  Company Info
                </h3>
                <ul className="space-y-1">
                  {companyInfoLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-normal text-[#160000] text-sm hover:underline"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support & Policies */}
              <div>
                <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#160000] text-[17px] mb-3">
                  Support &amp; Policies
                </h3>
                <ul className="space-y-1">
                  {supportPoliciesLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-normal text-[#160000] text-sm hover:underline"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business & Wholesale */}
              <div>
                <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#160000] text-[17px] mb-3">
                  Business &amp; Wholesale
                </h3>
                <ul className="space-y-1">
                  {businessWholesaleLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-normal text-[#160000] text-sm hover:underline"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-['Jost',Helvetica] font-medium text-[#240000] text-[17px] mb-4">
              SUBSCRIBE TO NEWSLETTER
            </h3>

            <div className="mb-6">
              <Input
                className="bg-white border-[0.71px] border-solid border-[#240000] font-['Jost',Helvetica] font-light text-[#240000] text-[10px] tracking-[0.71px]"
                placeholder="Enter your email address"
              />
            </div>

            <h4 className="font-medium text-black underline mb-3">
              CONTACT US
            </h4>

            <div className="space-y-2 mb-4">
              <p className="font-normal text-[#695858] text-sm">
                T. +91 741XF GFSTW
              </p>
              <p className="font-['Jost',Helvetica] font-normal text-black text-[11.3px] leading-[22.6px]">
                Mon-Sat / 10AM-7PM (IST)
              </p>
              <a
                href="mailto:safinacarpets@yahoo.com"
                className="font-['Jost',Helvetica] italic text-[#962d1a] underline text-sm"
              >
                safinacarpets@yahoo.com
              </a>
            </div>

            <div className="mt-4">
              <p className="font-medium text-[#695858] uppercase text-sm">
                BOOK VIRTUAL APPOINTMENT
              </p>
            </div>

            <div className="flex space-x-3 mt-4">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#" className="block">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-[35px] h-[35px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="w-full bg-m-3refprimaryprimary-20 shadow-[inset_0px_4px_4px_#00000040] py-4 px-4 bg-red-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-['Jost',Helvetica] font-light text-white text-sm">
              ©2025 Safinacarpets.com | All Rights Reserved | Powered By :
              Pixxel Digital
            </p>
          </div>

          <div className="flex space-x-2">
            {paymentIcons.map((icon, index) => (
              <div key={index} className="px-1">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-[45px] h-[30.84px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
