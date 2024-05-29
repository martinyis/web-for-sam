import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import MeetSamCards from "../components/MeetSamCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Sam - Sam for New Hampshire",
  description: "",
};

export default function MeetSam() {
  return (
    <main>
      <div className="max-w-[1400px] md:max-w-full md:flex-col md:px-0 mx-auto px-10 flex justify-between items-center gap-[20px] mb-[100px] md:-mt-10 md:gap-[40px]"></div>
      <div
        className="min-h-screen"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundImage: "url('/CK2A5541.jpg')",
        }}
      >
        <MeetSamCards />
      </div>
    </main>
  );
}
