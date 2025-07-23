import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  variant: string;
  status: string;
  price: string;
  image: string;
  quantity: number;
}

interface RugPadData {
  name: string;
  size: string;
  price: string;
  image: string;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Lahar Hand-Knotted Area Rug",
    variant: "Ecru / 6' x 9'",
    status: "In stock. Ready to ship.",
    price: "$1,119.20",
    image: "https://c.animaapp.com/oLaUSUeq/img/ecru@2x.png",
    quantity: 1,
  },
];

const rugPadData: RugPadData = {
  name: "Eco-Friendly Rug Pad",
  size: "6' x 9'",
  price: "$99.00",
  image: "https://c.animaapp.com/oLaUSUeq/img/eco-friendly-rug-pad@2x.png",
};

export const ShippingAddressSection: React.FC = () => {
  const [giftVoucher, setGiftVoucher] = useState<string>("");
  const [addGiftMessage, setAddGiftMessage] = useState<boolean>(false);

  const handleApplyVoucher = (): void => {
    console.log("Applying voucher:", giftVoucher);
  };

  const handleAddRugPad = (): void => {
    console.log("Adding rug pad to cart");
  };

  return (
    <aside className="w-full bg-m-3refprimaryprimary-95 shadow-[0px_4px_4px_#00000040] min-h-[600px]">
      <div className="flex flex-col w-full items-start p-4 sm:p-8 md:p-[44.68px]">
        <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-[24.94px] w-full">
          {/* Cart Items Section */}
          <section className="flex flex-col items-start w-full">
            <div className="flex flex-col w-full items-start justify-center">
              <div className="flex flex-col w-full items-start pt-2 pb-1 overflow-y-auto max-h-[500px]">
                {cartItems.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start justify-center w-full py-2"
                  >
                    <div className="flex items-start w-full">
                      <div className="flex-shrink-0">
                        <div className="relative w-16 h-16 sm:w-[66.5px] sm:h-[66.5px] bg-[#ededed] rounded-md">
                          <div className="w-full h-full flex items-center justify-center">
                            <img
                              className="w-full h-full rounded-md border border-solid border-[#d9d9d9] object-cover"
                              alt={item.name}
                              src={item.image}
                            />
                          </div>

                          <div className="absolute -top-2 right-0">
                            <div className="min-w-[22px] min-h-[22px] flex items-center justify-center px-2 py-0.5 bg-[#666666] rounded-full">
                              <span className="text-white text-sm">
                                {item.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col min-h-[66px] items-start justify-center pl-4 flex-1">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <h3 className="font-normal text-black text-sm sm:text-[15px]">
                              {item.name}
                            </h3>
                          </div>

                          <div className="flex flex-col items-start w-full">
                            <p className="font-normal text-[#666666] text-xs sm:text-[13px]">
                              {item.variant}
                            </p>
                            <p className="font-normal italic text-[#996c49] text-xs sm:text-[13px]">
                              {item.status}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end pl-4">
                        <span className="font-normal text-black text-sm sm:text-[15px] whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Gift Voucher Section */}
          <section className="flex flex-col items-start w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                <div className="flex-1 w-full">
                  <div className="flex-col items-start justify-center p-[1px] rounded-md border border-solid border-[#dedede] flex w-full bg-white">
                    <div className="h-[60px] py-4 px-3 w-full rounded-md flex items-center">
                      <input
                        type="text"
                        value={giftVoucher}
                        onChange={(e) => setGiftVoucher(e.target.value)}
                        placeholder="Gift Voucher"
                        className="w-full font-normal text-[#707070] text-base bg-transparent border-none outline-none"
                        aria-label="Gift voucher code"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleApplyVoucher}
                  disabled={!giftVoucher.trim()}
                  className="inline-flex items-center justify-center py-4 px-4 bg-[#ededed] rounded-md shadow-[inset_0px_0px_0px_1px_#d6d6d6] opacity-50 hover:opacity-100 disabled:opacity-50 transition-opacity h-[60px] w-full sm:w-auto"
                  aria-label="Apply gift voucher"
                >
                  <span className="font-normal text-black text-base text-center">
                    Apply
                  </span>
                </button>
              </div>

              {/* Gift Message Checkbox */}
              <div className="flex items-start py-4 w-full">
                <label className="flex items-center cursor-pointer">
                  <div className="relative w-5 h-5 mr-3">
                    <input
                      type="checkbox"
                      checked={addGiftMessage}
                      onChange={(e) => setAddGiftMessage(e.target.checked)}
                      className="w-5 h-5 bg-white rounded appearance-none border border-[#dedede] checked:bg-[#996c49] checked:border-[#996c49]"
                      aria-label="Add gift message"
                    />
                  </div>
                  <span className="font-normal text-black text-sm sm:text-[15px]">
                    Add gift message
                  </span>
                </label>
              </div>
            </div>
          </section>

          {/* Order Summary Section */}
          <section className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex justify-between items-center w-full">
                <span className="font-normal text-black text-sm sm:text-[15px]">
                  Subtotal
                </span>
                <span className="font-normal text-black text-sm sm:text-[15px] text-right">
                  $1,119.20
                </span>
              </div>

              <div className="flex flex-col items-start justify-center pt-3 w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center">
                    <span className="font-normal text-black text-sm sm:text-[15px]">
                      Shipping
                    </span>
                    <div className="flex items-center justify-center ml-1.5">
                      <div className="w-4 h-4">
                        <img
                          className="w-full h-full object-cover"
                          alt="Shipping info"
                          src="/img/component-2-5.png"
                        />
                      </div>
                    </div>
                  </div>

                  <span className="font-normal text-[#666666] text-sm sm:text-[15px] text-right">
                    Calculated at next step
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center pt-6 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg sm:text-xl font-normal text-black">
                    Total
                  </span>

                  <div className="flex items-end">
                    <span className="text-[#666666] text-xs sm:text-sm mr-2 mb-1">
                      USD
                    </span>
                    <span className="text-lg sm:text-xl font-normal text-black">
                      $1,119.20
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rug Pad Upsell Section */}
          <section className="flex flex-col items-start w-full">
            <div className="flex flex-col gap-6 w-full">
              <div className="w-full h-px">
                <hr className="w-full h-px border-b border-[#d6d6d6]" />
              </div>

              <div className="w-full">
                <h2 className="font-bold text-black text-base sm:text-[17.7px] uppercase">
                  EXTEND THE LIFETIME OF YOUR RUG
                </h2>
              </div>

              <div className="flex items-center gap-4 w-full">
                <img
                  className="w-16 h-16 sm:w-[66.5px] sm:h-[66.5px] border border-solid border-[#d9d9d9] object-cover"
                  alt={rugPadData.name}
                  src={rugPadData.image}
                />

                <div className="flex flex-col items-start justify-center flex-1">
                  <h3 className="font-normal text-black text-base sm:text-[17px]">
                    {rugPadData.name}
                  </h3>
                  <span className="font-normal text-[#666666] text-xs sm:text-[13px]">
                    {rugPadData.size}
                  </span>
                  <span className="font-normal text-[#666666] text-xs sm:text-[14px]">
                    {rugPadData.price}
                  </span>
                </div>

                <button
                  onClick={handleAddRugPad}
                  className="flex items-center justify-center p-3 sm:p-[14.55px] bg-transparent rounded-md border border-[#d6d6d6] hover:bg-[#f5f5f5] transition-colors"
                  aria-label={`Add ${rugPadData.name} to cart`}
                >
                  <span className="font-bold text-[#3f5575] text-sm sm:text-[14.7px] text-center">
                    Add
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
};
