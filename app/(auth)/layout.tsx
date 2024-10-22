import { Anybody } from "next/font/google";
import { ReactNode } from "react";
import PageWrapper from "./PageWrapper";

// Define the metadata type
interface Metadata {
  title: string;
  description: string;
}

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "WorkSyncs",
  description: "Your work in one app",
};

// Define the props type for RootLayout
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={anybody.className}>
      <PageWrapper>{children}</PageWrapper>
    </div>
  );
}
