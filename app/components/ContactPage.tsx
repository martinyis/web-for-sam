"use client";
import Image from "next/image";
import React from "react";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const constructMailtoLink = () => {
    const subject = encodeURIComponent("Message from " + name);
    const body = encodeURIComponent(
      `Hello Sam (my name is ${name}), I wanted to contact you.%0D%0A%0D%0A{message here}%0D%0A%0D%0ABest regards`
    );
    return `mailto:farringtonsam22@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="h-full">
      <div
        className=""
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundImage: "url('/IMG_6370.jpg')",
        }}
      >
        <div className="bg-[#367C2B] bg-opacity-80 pd:pb-[1000px] mt-[120px] h-full">
          <div className="max-w-[1400px] mx-auto p-4 flex md:flex-col md:gap-[80px] justify-between items-center pt-[120px] xl:pt-[100px] pb-[100px]">
            <div className="">
              <Fade triggerOnce direction="left">
                <p className="text-white text-[60px] font-bold max-w-[640px] lg:text-[42px]">
                  Have a question or need more information? Contact me directly!
                </p>
              </Fade>
              <div className="flex flex-col mt-[70px] md:mt-[40px] gap-[50px] lg:gap-[40px] md:gap-[20px]">
                <Bounce triggerOnce cascade>
                  <div className="flex items-center gap-[32px]">
                    <div>
                      <Image
                        width={30}
                        height={30}
                        src="/email.png"
                        alt="Email Icon"
                        layout="fixed"
                      />
                    </div>
                    <p className="text-white text-[24px] lg:text-[18px]">
                      farringtonsam22@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-[32px]">
                    <div>
                      <Image
                        width={30}
                        height={30}
                        src="/phone.png"
                        alt="Phone Icon"
                        layout="fixed"
                      />
                    </div>
                    <p className="text-white text-[24px] lg:text-[18px]">
                      +1 (603) 948-6240
                    </p>
                  </div>
                  <div className="flex items-center gap-[32px]">
                    <div>
                      <Image
                        width={30}
                        height={30}
                        src="/location.png"
                        alt="Location Icon"
                        layout="fixed"
                      />
                    </div>
                    <p className="text-white text-[24px] lg:text-[18px]">
                      35 Chesley Hill Rd, Rochester, NH 03839.
                    </p>
                  </div>
                </Bounce>
              </div>
            </div>
            <div className="w-full max-w-[631px]">
              <Zoom triggerOnce>
                <form
                  action={constructMailtoLink()}
                  method="post"
                  encType="text/plain"
                  className="max-w-[631px] md:mx-auto xl:max-w-[550px] xl:px-[25px] px-[35px] xl:py-[30px] py-[50px] bg-white rounded-[24px] w-full shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[18px] text-[#367C2B] font-semibold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                      className="w-full border-b-2 h-[48px] border-[#367C2B] outline-none text-[#787878] px-[15px]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mt-[32px]">
                    <label
                      htmlFor="email"
                      className="text-[18px] text-[#367C2B] font-semibold"
                    >
                      Your email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full border-b-2 h-[48px] border-[#367C2B] outline-none text-[#787878] px-[15px]"
                      placeholder="email@gmail.com"
                    />
                  </div>
                  <div className="mt-[32px]">
                    <label
                      htmlFor="message"
                      className="text-[18px] text-[#367C2B] font-semibold mt-[32px]"
                    >
                      Your message
                    </label>
                    <textarea
                      name="message"
                      className="w-full border-2 h-[200px] border-[#367C2B] outline-none text-[#787878] mt-[6px] rounded-[12px] p-[15px]"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="mt-[32px]">
                    <button
                      type="submit"
                      className="w-full h-[48px] bg-[#FFDE00] text-[#367C2B] rounded-[8px] flex items-center justify-center"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
