import React from "react";

export const PaymentSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-wrap gap-4 items-center">
        <img src="https://c.animaapp.com/oLaUSUeq/img/visa.svg" alt="Visa" className="h-6 sm:h-8" />
        <img src="https://c.animaapp.com/oLaUSUeq/img/mastercard.svg" alt="Mastercard" className="h-6 sm:h-8" />
        <img src="https://c.animaapp.com/oLaUSUeq/img/amex.svg" alt="American Express" className="h-6 sm:h-8" />
        <img src="https://c.animaapp.com/oLaUSUeq/img/discover.svg" alt="Discover" className="h-6 sm:h-8" />
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="card-number" className="text-sm md:text-[14px] font-normal text-[#666666]">
            Card Number
          </label>
          <input
            type="text"
            id="card-number"
            placeholder="1234 5678 9012 3456"
            className="w-full border border-[#dedede] rounded-md p-2 md:p-3 text-base focus:outline-none focus:border-[#996c49]"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="expiry-date" className="text-sm md:text-[14px] font-normal text-[#666666]">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry-date"
              placeholder="MM/YY"
              className="w-full border border-[#dedede] rounded-md p-2 md:p-3 text-base focus:outline-none focus:border-[#996c49]"
            />
          </div>
          
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="security-code" className="text-sm md:text-[14px] font-normal text-[#666666]">
              Security Code
            </label>
            <input
              type="text"
              id="security-code"
              placeholder="CVC"
              className="w-full border border-[#dedede] rounded-md p-2 md:p-3 text-base focus:outline-none focus:border-[#996c49]"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="name-on-card" className="text-sm md:text-[14px] font-normal text-[#666666]">
            Name on Card
          </label>
          <input
            type="text"
            id="name-on-card"
            placeholder="John Doe"
            className="w-full border border-[#dedede] rounded-md p-2 md:p-3 text-base focus:outline-none focus:border-[#996c49]"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3 mt-2">
        <input
          type="checkbox"
          id="save-card"
          className="w-5 h-5 accent-[#996c49]"
        />
        <label htmlFor="save-card" className="text-sm sm:text-base font-normal text-black cursor-pointer">
          Save this card for future purchases
        </label>
      </div>
    </div>
  );
};
