interface BackgroundImageProps {
  mobileImageUrl: string;
  tabletImageUrl: string;
  desktopImageUrl: string;
}

const BackgroundImage = ({
  mobileImageUrl,
  tabletImageUrl,
  desktopImageUrl,
}: BackgroundImageProps) => {
  return (
    <>
      {/* Background mobile */}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-bottom md:hidden"
        style={{ backgroundImage: `url("${mobileImageUrl}")` }}
      ></div>
      {/* Background tablet */}
      <div
        className="hidden md:fixed md:top-0 md:left-0 md:w-screen md:h-screen md:bg-cover md:bg-bottom md:block"
        style={{ backgroundImage: `url("${tabletImageUrl}")` }}
      ></div>
      {/* Background Desktop */}
      <div
        className="hidden md:hidden md:fixed md:top-0 md:left-0 md:w-screen md:h-screen md:bg-cover md:bg-bottom  lg:block xl:block "
        style={{ backgroundImage: `url("${desktopImageUrl}")` }}
      ></div>
    </>
  );
};

export default BackgroundImage;
