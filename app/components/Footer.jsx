import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
function Footer() {
  return (
    <div className="bg-[#fffff7] text-[#0E6400]">
      <div className="mx-auto flex flex-col justify-center">
        <div className="px-[10px] pt-[70px] mx-auto">
          <Image
            src="/FILE_7068-1.png"
            alt="Sam Image"
            width={130}
            height={80}
            className="rounded-lg mx-auto"
          />
        </div>
        <div className="px-[10px] max-w-[800px] mx-auto pt-[50px] ">
          <div className="flex justify-between gap-[32px] md:flex-col">
            <div className="flex items-center gap-[17px]">
              <Image
                src="/location_on.png"
                alt="locations"
                width={24}
                height={24}
              />
              <p className="text-[16px]">
                35 Chesley Hill Rd, Rochester, NH 03839
              </p>
            </div>
            <div className="flex items-center gap-[17px]">
              <Image
                src="/email_on.png"
                alt="locations"
                width={24}
                height={24}
              />
              <p className="text-[16px]">farringtonsam22@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="px-[10px] max-w-[800px] mx-auto pt-[20px] ">
          <Socials />
        </div>
        <div className="mt-[26px] w-full h-[1px] bg-[#236F00]"></div>
        <div className="px-[10px] mt-[28px] mx-auto mb-[80px] text-center">
          <p>
            Paid for by Friends of Sam Farrington. Elliot Boutin, Treasurer. 35
            Chesley Hill Rd, Rochester, NH 03839.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
