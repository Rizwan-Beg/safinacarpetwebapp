import {
    BellIcon,
    CalendarIcon,
    ChevronDownIcon,
    HeartIcon,
    MapPinIcon,
    SearchIcon,
    ShoppingCartIcon,
    UserIcon,
    XIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu";

  export const HeaderSection = () => {
    // Data for Shop By Area navigation items
    const shopByAreaItems = Array(9).fill({
      label: "Shop By Area",
    });
  
    return (
      <header className="w-full bg-transparent">
        {/* Top announcement bar */}
        <div className="w-full h-[34px] bg-neutral-200">
          <div className="flex items-center justify-center h-full relative px-4">
            <p className="text-xs text-center tracking-[0.50px] leading-4 [font-family:'Jost',Helvetica] font-normal">
              MAKE YOUR HOUSE HAPPY
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-[18px] w-[18px] p-[3px] opacity-50"
              aria-label="Close announcement"
            >
              <XIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>
  
        {/* Main navigation bar */}
        <div className="w-full h-[88px] bg-m-3refprimaryprimary-30 shadow-[0px_4px_4px_#00000040]">
          <div className="flex items-center justify-between h-full px-[74px] relative">
            {/* Left section - Location and Appointment */}
            <div className="flex items-end gap-5">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MapPinIcon className="h-6 w-6" />
              </Button>
  
              <div className="flex items-center gap-2.5 relative h-[23px]">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-[23px] w-[23px] p-0"
                >
                  <CalendarIcon className="h-[23px] w-[23px]" />
                </Button>
                <img
                  className="h-[9px] w-[120px]"
                  alt="Book an appointment"
                  src="https://c.animaapp.com/DpZTXc8l/img/book-an-appointment@2x.png"
                />
              </div>
            </div>
  
            {/* Center - Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[140px] h-[83px]">
              <div className="relative w-[140px] h-[83px] bg-[url(https://c.animaapp.com/DpZTXc8l/img/logo-1@2x.png)] bg-cover bg-[50%_50%]">
                <div className="absolute w-[140px] h-5 top-[45px] left-0 bg-m-3refprimaryprimary-30" />
                <div className="absolute w-[133px] h-1 top-[53px] left-1 [font-family:'Cinzel_Decorative',Helvetica] font-bold text-white text-[15.1px] text-center tracking-[-0.32px] leading-[3.2px]">
                  safina carpets
                </div>
              </div>
            </div>
  
            {/* Right section - Icons */}
            <div className="flex items-center gap-5">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <SearchIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <HeartIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <BellIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <UserIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ShoppingCartIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
  
        {/* Category navigation */}
        <nav className="w-full h-10 bg-neutral-200">
          <ul className="flex h-full items-center px-[61px]">
            {shopByAreaItems.map((item, index) => (
              <li
                key={`shop-by-area-${index}`}
                className="flex flex-col items-start"
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-10 px-3 py-2 flex items-center gap-[3px]"
                    >
                      <span className="text-xs tracking-[0.50px] leading-6 [font-family:'Jost',Helvetica] font-normal">
                        {item.label}
                      </span>
                      <ChevronDownIcon className="h-[6.36px] w-[11.32px]" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {/* Dropdown content would go here */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  };
  