"use client";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { NotificationIcon } from "@/helpers/util";

/* eslint-disable react/prop-types */
const MainHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state: any) => state.user.user);
  const router = useRouter();
  //   const pathname = usePathname();
  //   const dispatch = useDispatch();

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    // dispatch(logOut());
    router.push("/");
    localStorage.removeItem("verifixAdminUser");
  };

  return (
    <div className="relative bg-white font-mabry">
      <div
        className="fixed top-0 right-0 bg-white text-primary z-50 shadow-sm"
        style={{ width: "calc(100% - 250px)" }}
      >
        <div className="flex justify-between items-center py-3 px-5">
          {/* <div className="w-1/2 relative">
            <input
              type="search"
              placeholder="Search here..."
              className="bg-gray-50 pl-8 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            />
            <div className="absolute  flex bottom-0 top-0 justify-center items-center left-3 text-primary cursor-pointer">
              <FaSearch className="text-veriDark" />
            </div>
          </div> */}
          <div>
            <h3 className="text-[#16151C] text-[20px] leading-[20px] font-medium mb-4">
              Good Morning, Kingsley !
            </h3>
            <p className="text-[#8F8F8F] text-base font-normal leading-[16px]">
              Practice makes permanent with consistency
            </p>
          </div>

          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-6">
              <label className="inline-flex items-center cursor-pointer">
                <span className="me-3 text-sm font-medium text-[#3F3F3F]">
                  Switch to Admin
                </span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#CCEAFF]"></div>
              </label>
              <NotificationIcon />
            </div>

            <div className="flex gap-2 items-center border border-[#EEEEEE] p-[10px] rounded-[10px]">
              <div className="rounded-full w-[36px] h-[36px] flex justify-center bg-primary items-center cursor-pointer">
                {user?.image?.assetUrl ? (
                  <Image
                    src={user?.image?.assetUrl}
                    width={36}
                    height={36}
                    className="rounded-full w-[36px] h-[36px]"
                    priority
                    alt="avatar"
                  />
                ) : (
                  <div className="border border-veriDark flex justify-center items-center text-veriDark rounded-full h-[36px] w-[36px]">
                    <p className="flex items-center text-lg">
                      {user?.firstName?.charAt(0)}
                      {user?.firstName?.charAt(0)}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-base font-medium text-[#3F3F3F]">
                  Kingsley Uka
                </p>
                <p className="text-sm font-normal text-[#8F8F8F]">
                  kingsleuka@aallc.com
                </p>
              </div>
              <div>
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    type="button"
                    className="rounded-md flex justify-center bg-white items-center cursor-pointer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6.66797L8.4714 10.1966C8.21106 10.4569 7.78894 10.4569 7.5286 10.1966L4 6.66797"
                        stroke="#434343"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  {showDropdown && (
                    <div className="origin-top-right absolute z-50 right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <button
                          onClick={handleLogout}
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Logout
                        </button>
                        {/* Add more dropdown items if needed */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {pathname === '/other-vendors' ||
        (pathname === '/vendors' && (
          <div
            className="fixed top-[60px] right-0 bg-white text-primary z-40 shadow-sm text-black"
            style={{ width: 'calc(100% - 220px)' }}
          >
            <div className="flex justify-between items-center py-3 px-5">
              <div className="flex gap-4">
                <h4 className="text-base font-medium flex items-center gap-2">
                  <MdArrowBackIos />
                  Back
                </h4>
                <div className="border-l pl-2 flex items-center gap-3">
                  <p className="text-veriGreen text-sm font-normal">
                    Other vendors
                  </p>
                  <p className="text-sm font-normal text-[#667185]">
                    / Vendors near me
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <input
                    type="search"
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  />
                </div>
                <button className="py-2 px-3 border border-[#D0D5DD] rounded-md flex gap-2 items-center">
                  <IoFilter />
                  Filter
                </button>
              </div>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default MainHeader;
