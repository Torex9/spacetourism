import React from "react";
import BackgroundImage from "../ui/components/backgroundImage";
import TechnologyComponent from "../ui/components/TechnologyComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description: "Learn about the technology of the space tourism.",
};

function Technology() {
  return (
    <>
      <BackgroundImage
        mobileImageUrl="/technology/background-technology-mobile.jpg"
        tabletImageUrl="/technology/background-technology-tablet.jpg"
        desktopImageUrl="/technology/background-technology-desktop.jpg"
      />

      {/* Main element */}
      <main className="relative h-full">
        <TechnologyComponent />
      </main>
    </>
  );
}

export default Technology;
