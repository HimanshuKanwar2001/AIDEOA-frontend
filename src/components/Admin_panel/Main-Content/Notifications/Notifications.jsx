import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const Notifications = () => {
  // Define the dynamic data as an array of objects
  const [contactData, setContactData] = useState([
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Olivia Rhye",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      user_type:"membership",
      action: <RiDeleteBinLine /> ,
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Phoenix Baker",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      message: "Our area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      user_type:"All User",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Lana Steiner",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      message: "The roads in our area have developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      user_type:"membership",
      action: <HiOutlineDotsVertical />,
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Demi Wilkinson",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      message: "Area has developed numerous potholes...",
      date: "12 Nov 6:00 pm",
      user_type:"All User",
      action: <HiOutlineDotsVertical />,
    },
  ]);

  return (
    <div >
      

      {/* Events Section */}
      <div className="w-full bg-white shadow-md rounded-lg ">
        <div className="w-full flex justify-between items-center p-6 pb-2">
          {/* Table Title */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Events</h2>
            <sup className="text-xs text-purple-500 font-medium bg-purple-100 p-1 px-2 rounded-full">
              100 users
            </sup>
          </div>

          {/* Search Bar and Action Buttons */}
          <div className="flex justify-between items-center w-[42%]">
            <div className="relative w-[55%]">
              <CiSearch className="absolute top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div>

            <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm">
              Download all
            </button>
            <div className="flex items-center gap-2 bg-purple-800 text-white px-4 py-2 rounded-lg text-sm">
              <IoCloudUploadOutline size={18}/>
              <button className="">Create</button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                  />
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Heading
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Date & Time
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Content
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  User Type
                </th>
                <th className="py-3 px-4 text-left font-normal text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((contact, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{contact.checkbox}</td>
                  <td className="py-3 px-4">{contact.name}</td>
                  <td className="py-3 px-4">{contact.date}</td>
                  <td className="py-3 px-4 truncate">{contact.message}</td>
                  <td className="py-3 px-4">
                    <span className={` font-medium ${contact.user_type == "membership" ?"text-purple-800 bg-purple-100" :"text-green-800 bg-green-100"} px-3 py-1 rounded-full`}>
                      {contact.user_type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-gray-500 flex gap-x-5 hover:text-gray-700">
                    <RiDeleteBinLine  />  <FiEdit2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 p-6">
            <div className="relative border border-gray-500 p-2 justify-evenly items-center rounded-md w-24 flex">
              <FaArrowRight size={15} className="rotate-180" />
              <button className="text-gray-500 text-sm">Previous</button>
            </div>
            <div className="space-x-2 flex gap-x-1 items-baseline">
              <button className="px-3 py-1 rounded-md bg-purple-100 text-purple-800">
                1
              </button>
              <button className="px-3 py-1 rounded-md  text-purple-800">
                2
              </button>
              <button className="px-3 py-1 rounded-md  text-purple-800">
                3
              </button>
              <button>.....</button>

              <button className="px-3 py-1 rounded-md  text-purple-800">
                8
              </button>
              <button className="px-3 py-1 rounded-md  text-purple-800">
                9
              </button>
              <button className="px-3 py-1 rounded-md  text-purple-800">
                10
              </button>
            </div>
            <div className="relative border border-gray-500 p-2 justify-evenly items-center rounded-md w-24 flex">
              <button className="text-gray-500 text-sm">Next</button>
              <FaArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
