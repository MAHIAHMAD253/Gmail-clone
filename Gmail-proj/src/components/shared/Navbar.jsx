// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16 ">

      <div className="flex items-center gap-2">
        <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
          <RxHamburgerMenu size={"20px"} />
        </div>
        <img
          className="w-8"
          src="https://thumbs.dreamstime.com/b/gmail-logo-google-product-icon-logotype-editorial-vector-illustration-vinnitsa-ukraine-october-199405574.jpg"
        />
        <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
      </div>

      {/* serach bar input field  */}

      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center  bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>

      {/* icons -put */}

      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <Avatar
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw09UjNhMoGchoLXP4ZIjW_s&ust=1725827680416000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiGvJ_XsYgDFQAAAAAdAAAAABAE"
            size="40"
            round={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
