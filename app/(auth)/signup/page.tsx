import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="font-mabry">
      <h2 className="text-[36px] font-bold leading-[40px] mb-[8px]">
        Let&apos;s get started quickly
      </h2>
      <p className="text-[#645D5D] mb-[32px]">
        Already have an account?{" "}
        <Link href="/login" className="text-base text-brand">
          Sign In
        </Link>
      </p>
      <form action="">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 h-[60px]"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 h-[60px]"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 h-[60px]"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 h-[60px]"
              placeholder="Enter Password"
              required
            />
          </div>
        </div>
        <div className="">
          <button className="w-full text-white bg-brand rounded-md h-[40px]">
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Page;
