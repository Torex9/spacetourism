import React from "react";
import BackgroundImage from "../ui/components/backgroundImage";
import DestinationComponent from "../ui/components/DestinationComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destination",
  description: "Explore the destination of the space tourism.",
};

function Destination() {
  return (
    <>
      <BackgroundImage
        mobileImageUrl="/destination/background-destination-mobile.jpg"
        tabletImageUrl="/destination/background-destination-tablet.jpg"
        desktopImageUrl="/destination/background-destination-desktop.jpg"
      />

      {/* Main element */}
      <main className="relative h-screen ">
        <DestinationComponent />
      </main>
    </>
  );
}

export default Destination;
