import React, { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import AuthTestimonySlider from "@/components/auth/AuthTestimonySlider";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <section className="grid grid-cols-2 h-screen font-mabry bg-[#E5F5FF]">
        {/* Left side - fixed height and no scrolling */}
        <div className="p-[20px] h-screen overflow-hidden">
          <div
            className="bg-[#10105b] w-full rounded-t-[30px] "
            style={{ height: "calc(100vh - 20px)" }}
          >
            <div className="pt-[60px] pb-[30px] px-[50px] text-white flex flex-col justify-between h-full">
              <section>
                <div className="relative w-[194px] h-[40px]">
                  <Image src="/ws-logo.svg" fill alt="Agtrade logo" />
                </div>
                <div className="mt-[84px]">
                  <h1 className="font-mabry text-[58px] font-bold text-white leading-[62px] mb-[32px]">
                    Enjoy a simple Employee experience
                  </h1>
                  <p className="text-[#E4DBDB] w-3/4 text-lg leading-[26px]">
                    Our comprehensive range of features offers your organisation
                    an unparalleled he sheer range of solutions to keep staff on
                    track.
                  </p>
                </div>
              </section>
              <section>
                <AuthTestimonySlider />
              </section>
            </div>
          </div>
        </div>

        {/* Right side - scrollable content */}
        <div className="overflow-y-auto h-screen p-[20px] flex justify-center items-center">
          <div className="w-11/12">{children}</div>
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="relative w-[498px] h-[250px]">
            <Image src="/images/cube.png" fill alt="Agtrade logo" />
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default PageWrapper;
