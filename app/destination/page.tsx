"use client";
import data from "../../data.json";
import { Tab, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Typewriter from "typewriter-effect";
import BackgroundImage from "../ui/components/backgroundImage";
import PageHeader from "../ui/components/pageHeader";

function page() {
  const destinations = data.destinations;

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <BackgroundImage
        mobileImageUrl="/destination/background-destination-mobile.jpg"
        tabletImageUrl="/destination/background-destination-tablet.jpg"
        desktopImageUrl="/destination/background-destination-desktop.jpg"
      />

      {/* Main element */}
      <main className="relative h-screen ">
        <div className="h-full lg:overflow-x-hidden ">
          <PageHeader pageNumber="01" title="PICK YOUR DESTINATION" />

          <div className="h-full flex flex-col gap-5  items-center lg:flex-row lg:gap-10 lg:h-4/5 xl:gap-30">
            <Tab.Group onChange={setActiveTab}>
              {destinations.map((destination, index) =>
                index == activeTab ? (
                  <Transition
                    appear
                    key={index}
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
                      className="md:mb-6 lg:w-1/2 lg:flex lg:justify-center lg:ml-14 xl:ml-14"
                    >
                      <img
                        className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]"
                        src={destination.images.png}
                      />
                    </div>
                  </Transition>
                ) : null
              )}
              <div className=" test flex flex-col justify-center w-full items-center lg:w-1/2 lg:justify-start ">
                {/* Tab List used to switch betweeen content */}
                <Tab.List className="text-customPurple flex gap-6 md:gap-8 lg:w-full">
                  {destinations.map((destination, index) => (
                    <div key={index}>
                      <Tab className="font-barlow tracking-wide_xl text-sm md:text-base ">
                        {({ selected }) => (
                          <p
                            className={`${
                              selected
                                ? "border-b-4 text-white"
                                : "hover:border-b-4 hover:border-white/50"
                            } py-2 `}
                          >
                            {destination.name.toUpperCase()}
                          </p>
                        )}
                      </Tab>
                    </div>
                  ))}
                </Tab.List>
                {/* Content being switched by Tab list */}
                <Tab.Panels className="w-full ">
                  {destinations.map((destination, index) => (
                    <Tab.Panel key={index} className=" h-full w-full">
                      <div className="">
                        <h1 className="text-white font-Bellefair text-8xl w-full text-center mb-2 md:text-11xl lg:text-left">
                          <Typewriter
                            onInit={(typewriter) => {
                              typewriter
                                .typeString(`${destination.name.toUpperCase()}`)
                                .start();
                            }}
                          />
                        </h1>
                        <div className="mx-4 border-b border-white/25 mb-9 md:mx-20 lg:mx-0 lg:mr-40 xl:mr-52">
                          <p className="text-customPurple h-full w-full text-center mb-9 text-15p md:text-base md:leading-7 lg:text-left ">
                            {destination.description}
                          </p>
                        </div>

                        <div className="md:flex md:justify-center md:gap-24 lg:justify-start">
                          <div className="mx-auto mb-9 md:mx-0">
                            <p className="text-center w-full font-barlow text-customPurple text-sm tracking-wide_xl mb-2 lg:text-left">
                              AVG. DISTANCE
                            </p>
                            <h3 className="text-white text-center w-full font-Bellefair text-3xl">
                              <Typewriter
                                onInit={(typewriter) => {
                                  typewriter
                                    .typeString(
                                      `${destination.distance.toUpperCase()}`
                                    )
                                    .start();
                                }}
                              />
                            </h3>
                          </div>

                          <div className="mx-auto md:mx-0">
                            <p className="text-center w-full font-barlow text-customPurple text-sm tracking-wide_xl mb-2 lg:text-left">
                              EST. TRAVEL TIME
                            </p>
                            <h3 className="text-white text-center w-full font-Bellefair text-3xl lg:text-left">
                              <Typewriter
                                onInit={(typewriter) => {
                                  typewriter
                                    .typeString(
                                      `${destination.travel.toUpperCase()}`
                                    )
                                    .start();
                                }}
                              />
                            </h3>
                          </div>
                        </div>
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
