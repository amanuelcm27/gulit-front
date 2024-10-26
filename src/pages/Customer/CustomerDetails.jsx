import React from "react";
import SubmitButton from "../../components/SubmitButton";

const CustomerDetails = () => {
  return (
    <div>
      <span className="text-4xl font-extrabold m-4">Your Details</span>
      <div className="m-4 ">
        <div className="border-b-2">Personal details</div>
        <div className="flex flex-col bg-gray-100  m-4 ">
          <div className="flex p-4 items-center">
            <span>First Name </span>
            <div className="bg-gray-200 w-[200px] mx-2 p-2">amanuel</div>
            <span>Last Name </span>
            <div className="bg-gray-200 w-[200px] mx-2 p-2">lema</div>
            <div className="ml-auto">
              <i className="fa-solid fa-pen"></i>
            </div>
          </div>
          <div className="flex items-center p-4">
            <span>Email</span>
            <div className="mx-2 p-2 w-[200px] truncate bg-gray-200">
              lorem@email.com
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 ">
        <div className="border-b-2">Delivery details</div>
        <div className="flex flex-col bg-gray-100  m-4 ">
          <div className="flex p-4 items-center">
            <span>City </span>
            <div className="bg-gray-200 w-[200px] mx-2 p-2">harlem</div>
            <span>State </span>
            <div className="bg-gray-200 w-[200px] mx-2 p-2">New york</div>
            <div className="ml-auto">
              <i className="fa-solid fa-pen"></i>
            </div>
          </div>
          <div className="flex items-center p-4">
            <span>Address</span>
            <div className="mx-2 p-2 w-[200px] truncate bg-gray-200">
              lorem@x.com
            </div>
          </div>
        </div>
        <SubmitButton name="Save" otherStyles='bg-orange-400 px-8' />
      </div>
    </div>
  );
};

export default CustomerDetails;
