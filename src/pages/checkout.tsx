import React from "react";
import { PaymentSection } from "../components/layout/checkOut/PaymentSection";
import { ShippingAddressSection } from "../components/layout/checkOut/ShippingAddressSection";

export const CheckOut: React.FC = () => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="60575:11877"
    >
      <div className="bg-white w-full max-w-[1440px] overflow-hidden">
        <div className="relative">
          <header className="w-full bg-transparent">
            <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-[60px] py-4 bg-m-3refprimaryprimary-30">
              <div className="flex items-center gap-2.5 p-2.5">
                <img
                  className="w-6 h-6"
                  alt="Mdi light map marker"
                  src="https://c.animaapp.com/oLaUSUeq/img/mdi-light-map-marker.svg"
                />

                <div className="relative h-[23px] hidden sm:block">
                  <img
                    className="w-[120px] h-[9px] mt-2"
                    alt="Book AN APPOINTMENT"
                    src="https://c.animaapp.com/oLaUSUeq/img/book-an-appointment@2x.png"
                  />

                  <div className="inline-flex items-center gap-2.5 absolute top-0 left-0">
                    <img
                      className="w-[23px] h-[23px]"
                      alt="Mdi light calendar"
                      src="https://c.animaapp.com/oLaUSUeq/img/mdi-light-calendar.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-[140px] h-[83px]">
                <div className="w-full h-full">
                  <div className="relative w-[140px] h-20 top-[3px] bg-[url(https://c.animaapp.com/oLaUSUeq/img/logo-1@2x.png)] bg-cover bg-[50%_50%]">
                    <div className="absolute w-full h-5 top-[42px] left-0 bg-m-3refprimaryprimary-30" />

                    <div className="absolute w-[133px] h-1 top-[49px] left-1 [font-family:'Cinzel_Decorative',Helvetica] font-bold text-white text-[15.1px] text-center tracking-[-0.32px] leading-[3.2px]">
                      safina carpets
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center p-2.5">
                <img
                  className="w-6 h-6"
                  alt="Mdi light cart"
                  src="https://c.animaapp.com/oLaUSUeq/img/mdi-light-cart.svg"
                />
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <PaymentSection />
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ShippingAddressSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
