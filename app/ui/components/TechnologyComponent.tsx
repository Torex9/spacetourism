"use client";

import { Tab, Transition } from "@headlessui/react";
import data from "../../../data.json";
import React, { Fragment, useState } from "react";
import Typewriter from "typewriter-effect";
import PageHeader from "./pageHeader";
import Image from "next/image";

const TechnologyComponent = () => {
  const technologys = data.technology;

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="h-full lg:overflow-x-hidden">
      <PageHeader pageNumber="03" title="SPACE LAUNCH 101" />

      <div className="h-full flex flex-col gap-6  items-center lg:flex-row-reverse lg:items-center lg:gap-0 lg:h-4/5 ">
        <Tab.Group onChange={setActiveTab}>
          {technologys.map((technology, index) =>
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
                  className="w-full mb-4 md:mb-6 lg:flex lg:justify-end"
                >
                  {/* image below is only for mobile and tablet */}
                  <Image
                    width={1024}
                    height={170}
                    src={technology.images.landscape}
                    alt={technology.images.landscape}
                    className="w-full h-[170px] md:h-[310px] lg:hidden"
                  />

                  {/* image below is only for large displays */}
                  <Image
                    src={technology.images.portrait}
                    width={1440}
                    height={450}
                    alt={technology.images.portrait}
                    className=" hidden md:hidden lg:block lg:h-[450px]"
                  />
                </div>
              </Transition>
            ) : null
          )}

          {/* Tab List used to switch betweeen content */}
          <Tab.List className="flex gap-4 md:mb-6 lg:flex-col lg:order-1 lg:ml-40">
            {technologys.map((technology, index) => (
              <div key={index}>
                <Tab className="">
                  {({ selected }) => (
                    <div
                      className={`${
                        selected
                          ? " bg-white text-black"
                          : " bg-transparent text-white hover:border-white"
                      } w-[40px] h-[40px] rounded-full flex justify-center  items-center border border-white/25 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]`}
                    >
                      <span className="text-center font-Bellefair text-base md:text-2xl lg:text-5xl">
                        {index + 1}
                      </span>
                    </div>
                  )}
                </Tab>
              </div>
            ))}
          </Tab.List>

          {/* Content being switched by Tab list */}
          <Tab.Panels className="h-max w-full">
            {technologys.map((technology, index) => (
              <Tab.Panel key={index} className=" h-full w-full">
                <p className="w-full font-barlow text-sm text-center text-customPurple tracking-wide_xl mb-2 md:text-base lg:px-12 lg:text-left lg:text-lg">
                  THE TERMINOLOGY ...
                </p>
                <h2 className="w-full font-Bellefair text-2xl text-center text-white mb-4 md:text-40p lg:px-12 lg:text-left lg:text-7xl">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(`${technology.name.toUpperCase()}`)
                        .start();
                    }}
                  />
                </h2>
                <div className="text-customPurple h-full w-full px-2 text-center text-15p leading-7 md:text-base md:px-40 lg:px-12 lg:text-left">
                  {technology.description}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default TechnologyComponent;
