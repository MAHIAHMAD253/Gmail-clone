// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Messagess from "./Messagess";


const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Social",
  },
];

const Inbox = () => {
  const [mailSelected, setMailSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} className="hover:bg-gray-200 rounded-5xl" />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1-50 of 1000</p>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size={"20px"} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size={"20px"} />
          </button>
        </div>
      </div>

     

      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => (
            <button
              key={index}
              className={`${
                mailSelected === index
                  ? "border-b-4 border-blue-500 text-blue-500"
                  : "border-b-4 border-b-transparent"
              } flex items-center p-4 gap-5 w-52 hover:bg-gray-100`}
              onClick={() => setMailSelected(index)}
            >
              {item.icon}
              {item.text}
            </button>
          ))}
        </div>
        <Messagess />
      </div>
    </div>
  );
};

export default Inbox;
