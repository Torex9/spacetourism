"use client";

import Typewriter from "typewriter-effect";
import BackgroundImage from "./ui/components/backgroundImage";

export default function Home() {
  return (
    <>
      <BackgroundImage
        mobileImageUrl="/home/background-home-mobile.jpg"
        tabletImageUrl="/home/background-home-tablet.jpg"
        desktopImageUrl="/home/background-home-desktop.jpg"
      />

      {/* Main element */}
      <main className="relative h-full pt-5">
        <div className="h-full">
          <div className="h-full flex flex-col gap-1 md:gap-0  items-center xl:flex-row xl:justify-between xl:w-screen lg:flex-row lg:justify-between lg:w-screen">
            <div className=" lg:w-1/2 lg:p-10 xl:w-1/2 xl:p-36">
              <h2 className="text-customPurple mb-3 font-barlow tracking-wide_xl text-base font-light w-full text-center md:text-xl md:tracking-wide_xl lg:text-2xl lg:text-left xl:text-3xl xl:text-left ">
                SO, YOU WANT TO TRAVEL TO
              </h2>
              <h1 className="text-white mb-3 font-Bellefair text-11xl w-full text-center md:text-15xl lg:text-left xl:text-left">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("SPACE").start();
                  }}
                />
              </h1>

              <p className=" text-center font-barlow_regular text-base px-3 leading-7 mb-20 text-customPurple md:mx-40 lg:mx-0 lg:text-left lg:text-lg lg:px-0 xl:mx-0 xl:text-left xl:px-0 xl:leading-8">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center xl:w-1/2 xl:flex xl:items-center xl:justify-center">
              <div className=" bg-transparent w-[290px] h-[290px] flex justify-center  items-center  rounded-full hover:bg-white/20 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                <div className="flex justify-center  items-center  rounded-full w-[190px] h-[190px] bg-white md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] ">
                  <span className="text-center font-Bellefair text-xl xl:text-5xl">
                    EXPLORE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
