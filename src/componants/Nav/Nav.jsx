import React from "react";
import { IoIosNotifications } from "react-icons/io";

const Nav = () => {
  return (
    <div className="bg-white">
    <div className='w-11/12 mx-auto'>
      <div className="navbar bg-base-100 mt-3 flex justify-between ">
        <div className="">
          <a className=" text-xl text-[#003EA4] font-bold">
            Auction <span className="text-yellow-600 text-2xl">Gallery</span>
          </a>
        </div>
        <div className="flex gap-4 text-sm font-semibold text-neutral-700 ">
             <a className="hover:text-yellow-600" href="#">Home </a>
             <a className="hover:text-yellow-600" href="#">Auctions</a>
             <a className="hover:text-yellow-600" href="#">Categories</a>
             <a className="hover:text-yellow-600" href="#">How to works</a>
        </div>
        <div className="flex gap-2 items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg> */}
                <IoIosNotifications size={30} />
                
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co.com/DfxqtfQ7/me.jpg"
                />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nav;
