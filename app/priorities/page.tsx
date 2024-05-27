import React from "react";
import Image from "next/image";
import Acordionui from "../components/Accoorion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priorities - Sam for New Hampshire",
  description: "",
};

function Priorities() {
  return (
    <main>
      <div className="relative mt-[100px]">
        <Image
          src={"/CK2A5532.jpg"}
          alt="Sam Image"
          width={1920}
          height={528}
          className="max-h-[628px] w-[100%] lg:max-h-[500px] object-cover md:max-h-[400px] sm:max-h-[300px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-[64px] md:text-5xl lg:text-6xl font-bold sm:text-[40px]">
            MY PRIORITIES
          </p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-[20px] mt-[100px] mb-[100px]">
        <Acordionui />
      </div>
    </main>
  );
}

export default Priorities;
