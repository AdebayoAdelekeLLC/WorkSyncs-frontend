"use client";

import React, { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/components/dashboard/Sidebar";
import MainHeader from "@/components/dashboard/MainHeader";

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  return (
    <>
      <div className="flex gap-5 relative bg-[#F9FAFB]">
        <Sidebar />
        <main className="w-full h-screen overflow-y-scroll pt-4 relative bg-[#F9FAFB]">
          <div className="relative w-full">
            <MainHeader />
          </div>
          <div className=" mt-24 pr-5 min-h-[80vh] text-black">{children}</div>
        </main>
      </div>
    </>
  );
};

export default DashboardWrapper;
