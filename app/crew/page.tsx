"use client";

import React, { Fragment, useState } from "react";
import data from "../../data.json";
import { Tab, Transition } from "@headlessui/react";
import Typewriter from "typewriter-effect";
import BackgroundImage from "../ui/components/backgroundImage";
import PageHeader from "../ui/components/pageHeader";

function page() {
  const crews = data.crew;

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <BackgroundImage
        mobileImageUrl="/crew/background-crew-mobile.jpg"
        tabletImageUrl="/crew/background-crew-tablet.jpg"
        desktopImageUrl="/crew/background-crew-desktop.jpg"
      />

      {/* Main element */}
      <main className="relative h-screen">
        <div className="h-full lg:overflow-x-hidden">
          <PageHeader pageNumber="02" title="MEET YOUR CREW" />

          <div className="h-full flex flex-col gap-6  items-center md:flex-col-reverse lg:flex-row-reverse lg:gap-10 lg:h-4/5 lg:w-screen">
            <Tab.Group onChange={setActiveTab}>
              {crews.map((crew, index) =>
                index == activeTab ? (
                  <Transition
                    key={index}
                    appear
                    as={Fragment}
                    show={index == activeTab}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    {/* Content being switched by Tab list */}
                    <div
                      key={index}
                      className="w-[327px] h-[223px] mx-auto border-b border-white/15  md:w-[467px] md:h-2/3 md:border-0 lg:w-[40%] lg:h-[95%]"
                    >
                      <img
                        className=" mx-auto w-[200px] h-[223px] md:w-full md:h-full "
                        src={crew.images.png}
                      />
                    </div>

                    {/* had to remove the div below cos i was getting flickering effects on mobile view */}

                    {/* <div
                      key={index}
                      className="w-[327px] h-[223px] mx-auto border-b border-white/15  md:w-[467px] md:h-2/3 md:border-0 lg:w-1/2 lg:h-auto"
                    >
                      <img
                        className="max-w-full max-h-full mx-auto"
                        src={crew.images.png}
                      />
                    </div> */}
                  </Transition>
                ) : null
              )}
              <div className="h-full flex flex-col gap-6  items-center md:flex md:flex-col-reverse md:justify-end lg:w-1/2 lg:justify-center lg:ml-40">
                {/* Tab List used to switch betweeen content */}
                <Tab.List className="text-customPurple flex gap-4 lg:w-full ">
                  {crews.map((crew, index) => (
                    <div key={index}>
                      <Tab className="font-barlow tracking-wide_xl text-sm ">
                        {({ selected }) => (
                          <div
                            className={`${
                              selected
                                ? "border-b-2 bg-white"
                                : "bg-white/20 hover:bg-white/50"
                            } w-[10px] h-[10px] rounded-full lg:w-[15px] lg:h-[15px] `}
                          ></div>
                        )}
                      </Tab>
                    </div>
                  ))}
                </Tab.List>

                {/* Content being switched by Tab list */}
                <Tab.Panels className="w-full">
                  {crews.map((crew, index) => (
                    <Tab.Panel key={index} className=" w-full ">
                      <p className="w-full font-Bellefair text-base text-center text-white/60 md:text-2xl lg:text-left lg:text-5xl">
                        {crew.role.toUpperCase()}
                      </p>
                      <h2 className="w-full font-Bellefair text-2xl text-center text-white mb-6 md:text-40p lg:text-left lg:text-8xl">
                        <Typewriter
                          onInit={(typewriter) => {
                            typewriter
                              .typeString(`${crew.name.toUpperCase()}`)
                              .start();
                          }}
                        />
                      </h2>
                      <div className="text-customPurple w-full px-4 text-center text-15p leading-6 md:text-base md:px-36 lg:text-left lg:px-0 lg:pr-40 lg:mb-24 lg:text-lg">
                        {crew.bio}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
