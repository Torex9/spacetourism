import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/components/header";

export const metadata: Metadata = {
  title: {
    default: "Space Tourism",
    template: "%s | Space Tourism",
  },

  description: "A tourism website for space enthusiasts.",
  icons: {
    icon: "/favicons/favicon-32x32.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/favicons/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/favicons/safari-pinned-tab.svg",
        color: "#ed5c82",
      },
      {
        rel: "shortcut icon",
        url: "/favicons/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="relative">
        <Header
          logoSrcurl="/Logo.png"
          menuIconUrl="/hamburger.svg"
          closeMenuIconUrl="/icon-menu-close.svg"
          links={[
            { id: "00", text: "HOME", url: "/" },
            { id: "01", text: "DESTINATION", url: "/destination" },
            { id: "02", text: "CREW", url: "/crew" },
            { id: "03", text: "TECHNOLOGY", url: "/technology" },
          ]}
        />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
