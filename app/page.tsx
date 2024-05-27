"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
export default function Home() {
  return (
    <main>
      <div className="md:max-w-full md:flex-col md:px-0 md:mt-[180px] sm:mt-[170px] mx-auto flex mt-[120px] justify-between items-center gap-[20px] md:gap-[40px]">
        <div className="flex flex-col items-center w-[80%]">
          <Fade>
            <Image
              src="/IMG_9969.jpg"
              alt="Sam Image"
              width={288}
              height={262}
              className="rounded-lg lg:hidden block"
            />
            <Image
              src="/IMG_9969.jpg"
              alt="Sam Image"
              width={200}
              height={150}
              className="rounded-lg hidden lg:block"
            />
            <p className="max-w-[367px] mt-[10px] text-[#367C2B] text-[32px] font-bold lg:text-[24px] lg:max-w-[250px]">
              For our Future
            </p>
            <div className="mt-[26px] sm:mt-[15px] flex gap-[10px] sm:flex-col">
              <button
                onClick={() => {
                  window.location.href = "/meetsam";
                }}
                className="w-[185px] h-[52px] lg:w-[150px] lg:h-[45px] sm:w-[130px] sm:h-[45px] text-[#367C2B] font-bold flex items-center justify-center rounded-[8px] bg-[#FFDE00] transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5 active:shadow-sm"
              >
                <p>Meet Sam</p>
              </button>
              <button
                onClick={() => {
                  window.location.href = "/";
                }}
                className="font-bold w-[185px] h-[52px] lg:w-[150px] lg:h-[45px] sm:w-[130px] sm:h-[45px] text-[#367C2B] flex items-center justify-center rounded-[8px] bg-[#FFDE00] transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5 active:shadow-sm"
              >
                <p>Donate</p>
              </button>
            </div>
          </Fade>
        </div>
        <div className="carousel">
          <div className="relative w-full h-full">
            <Image
              src="/CK2A5530.jpg"
              alt="Sam Image 1"
              layout="fill"
              className="carousel-image"
              objectFit="cover"
            />
            <Image
              src="/CK2A5410.jpg"
              alt="Sam Image 2"
              layout="fill"
              className="carousel-image"
              objectFit="cover"
            />
            <Image
              src="/IMG_5342.jpg"
              alt="Sam Image 3"
              layout="fill"
              className="carousel-image"
              objectFit="cover"
            />
            <Image
              src="/IMG_4118.jpg"
              alt="Sam Image 3"
              layout="fill"
              className="carousel-image"
              objectFit="cover"
            />
            <Image
              src="/IMG_6312.JPG"
              alt="Sam Image 3"
              layout="fill"
              className="carousel-image"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div
        className="bg-fixed min-h-screen"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundImage: "url('/CK2A5495.jpg')",
        }}
      >
        <div className="bg-[#367C2B] bg-opacity-80 h-screen md:h-auto flex items-center">
          <div className="max-w-[1170px] mx-auto p-4">
            <div className="flex justify-between items-center">
              <div className="w-[30%] bg-white h-[2px] "></div>
              <p className="text-center font-bold text-white text-[52px] md:text-[32px] sm:text-[24px]">
                About Me
              </p>
              <div className="w-[30%] bg-white h-[2px]"></div>
            </div>
            <div className="flex gap-[100px] lg:gap-[50px] items-center justify-between mt-[60px] md:flex-col">
              <Slide direction="left" triggerOnce>
                <div className="max-w-[430px] text-[18px] text-white lg:text-[14px]">
                  <p>
                    I am running for State Representative because my future is
                    at stake. The bills that I vote on will impact me for
                    decades. I stand for values like family, faith, and freedom,
                    all of which are under attack.
                  </p>
                  <p className="mt-[50px]">
                    "Rochester has a choice to make: a choice between personal
                    liberty and government overreach, between prosperous growth
                    and gradual decline, and between a system of merit and free
                    handouts. As a young person, I have skin in the game because
                    my future is on the ballot. I want to raise a family in the
                    same great state of New Hampshire that I grew up in. I am
                    running for State Representative to defend sanity because it
                    is hanging on by a thread.
                  </p>
                </div>
              </Slide>
              <Slide direction="right" triggerOnce>
                <Image
                  src={"/sam-image.png"}
                  alt="Sam Image"
                  width={500}
                  height={500}
                  className="shadow-xl shadow-black rounded-lg"
                />
              </Slide>
            </div>
          </div>
          {/* <div className="max-w-[1170px] mx-auto p-4">
            <div className="flex justify-between items-center mt-[20px]">
              <div className="w-[25%] bg-white h-[2px] "></div>
              <p className="text-center font-bold text-white text-[52px] md:text-[32px] sm:text-[24px]">
                Why Am I running?
              </p>
              <div className="w-[25%] bg-white h-[2px]"></div>
            </div>
            <p className="max-w-[600px] text-[18px] text-white lg:text-[14px] mx-auto mt-[40px]">
              I am a proud 6th-generation citizen of Rochester. Having grown up
              on our farm that has been in the family since 1913, I have
              developed an appreciation for family, history, and tradition. Over
              the past few years, I have revitalized our farm. I successfully
              negotiated with the USDA to secure conservation funding which has
              allowed me to bring this property back to its prime. You can find
              me baling hay, raising pigs, and sawing lumber over the summer.
            </p>
          </div> */}
        </div>
      </div>
    </main>
  );
}
