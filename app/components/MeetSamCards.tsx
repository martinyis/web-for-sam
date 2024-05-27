"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
function MeetSamCards() {
  return (
    <div className="bg-[#367C2B] bg-opacity-80 pb-[200px]">
      <div className="max-w-[1170px] px-[20px] mx-auto pt-[120px]">
        <Fade triggerOnce>
          <p className="text-[52px] font-bold text-white text-center">
            Meet Sam
          </p>
        </Fade>
        <div className="mt-[60px] flex flex-col gap-[20px]">
          <div className="flex justify-between gap-[40px] items-center md:flex-col-reverse">
            <Fade triggerOnce direction="left">
              <p className="text-white text-[18px] max-w-[700px] xl:max-w-[500px] lg:text-[16px]">
                I am a proud 6th-generation citizen of Rochester. Having grown
                up on our farm that has been in the family since 1913, I have
                developed an appreciation for family, history, and tradition.
                Over the past few years, I have revitalized our farm. I
                successfully negotiated with the USDA to secure conservation
                funding which has allowed me to bring this property back to its
                prime. You can find me baling hay, raising pigs, and sawing
                lumber over the summer.
              </p>
            </Fade>
            <Fade triggerOnce direction="right">
              <Image
                src="/CK2A5339.jpg"
                alt="Sam Image 1"
                width={432}
                height={324}
                className="shadow-xl shadow-black rounded-lg"
              />
            </Fade>
          </div>
          <div className="flex justify-between gap-[40px] items-center md:flex-col mt-[30px]">
            <Fade triggerOnce direction="left">
              <Image
                src="/IMG_6240.JPG"
                alt="Sam Image 1"
                width={432}
                height={324}
                className="shadow-xl shadow-black rounded-lg"
              />
            </Fade>
            <Fade triggerOnce direction="right">
              <p className="text-white text-[18px] max-w-[700px] xl:max-w-[500px] lg:text-[16px]">
                I am proud of where I come from. Rochester is a close-knit
                community with tough but friendly people. In 2022, I graduated
                from Spaulding High School. Rochester is important to me because
                I am the product of our amazing community. I give back to the
                city that built me by serving as an American Legion baseball
                coach and volunteering at Howie’s Field of Dreams. New
                Hampshire, I believe, is the greatest state in the Union. And
                yes, America is the greatest nation on Earth.
              </p>
            </Fade>
          </div>
          <div className="flex justify-between gap-[40px] items-center md:flex-col-reverse mt-[30px]">
            <Fade triggerOnce direction="left">
              <p className="text-white text-[18px] max-w-[700px] xl:max-w-[500px] lg:text-[16px]">
                As an economics student at the University of New Hampshire, I
                understand how fiscal policy and markets interact. Low taxes are
                the result of low spending. Families need to manage budgets
                responsibly, and so should the state of New Hampshire. When the
                pro- Palestine and anti-Israel protests broke out at UNH, I
                successfully organized a peaceful counterprotest. We waved
                American flags to show our peers that it is okay to be a proud
                American. I am committed to preserving free speech.
              </p>
            </Fade>
            <Fade triggerOnce direction="right">
              <Image
                src="/IMG_4012.jpg"
                alt="Sam Image 1"
                width={432}
                height={324}
                className="shadow-xl shadow-black rounded-lg"
              />
            </Fade>
          </div>
          <div className="flex justify-between gap-[40px] items-center md:flex-col mt-[30px]">
            <Fade triggerOnce direction="left">
              <Image
                src="/CK2A5410.jpg"
                alt="Sam Image 1"
                width={432}
                className="shadow-xl shadow-black rounded-lg"
                height={324}
              />
            </Fade>
            <Fade triggerOnce direction="right">
              <p className="text-white text-[18px] max-w-[700px] xl:max-w-[500px] lg:text-[16px]">
                I am running for State Representative because my future is at
                stake. The bills that I vote on will impact me for decades. I
                stand for values like family, faith, and freedom, all of which
                are under attack. Rochester has a choice to make: a choice
                between personal liberty and government overreach; a choice
                between prosperous growth and gradual decline; a choice between
                a system of merit and free handouts. As a 20-year-old, I have
                skin in the game because my future is literally on the ballot.
                My generation is at a crossroads with no clear path forward.
                Young people are struggling to purchase homes. We are hesitant
                to marry, let alone having children. We will be burdened by
                interest payments on our soaring national debt. I want to raise
                a family in the same great state of New Hampshire that I grew up
                in. I am running for state rep to defend our state motto “Live
                Free or Die” because legislatures should defend, not limit,
                personal freedom.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetSamCards;
