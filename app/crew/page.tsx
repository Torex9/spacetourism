import React from "react";
import BackgroundImage from "../ui/components/backgroundImage";
import CrewComponents from "../ui/components/CrewComponents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "crew",
  description: "Meet the crew of the space tourism.",
};

function Crew() {
  return (
    <>
      <BackgroundImage
        mobileImageUrl="/crew/background-crew-mobile.jpg"
        tabletImageUrl="/crew/background-crew-tablet.jpg"
        desktopImageUrl="/crew/background-crew-desktop.jpg"
      />

      {/* Main element */}
      <main className="relative h-screen">
        <CrewComponents />
      </main>
    </>
  );
}

export default Crew;
