import React from "react";
import images from "../../constants/images";

const CustomerOrders = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="flex m-4 items-center  sticky top-0 ">
        <div className="flex-1 text-4xl font-extrabold ">Your Orders</div> 
        <div className="relative group bg-gray-100 rounded-lg">
          <span className="px-4"><i className="fa-solid fa-caret-down px-2"></i>Filter</span>
          <div className="absolute group-hover:opacity-100 opacity-0 pointer-events-none group-hover:pointer-events-auto cursor-pointer flex flex-col z-20 bg-white shadow-xl right-0 w-[200px] ">
            <span className="p-4 hover:bg-gray-100"><i className="px-2 fa-solid fa-truck"></i>Delivered</span>
            <span className="p-4 hover:bg-gray-100"><i className="px-2 fa-solid fa-spinner"></i>Pending</span>
            <span className="p-4 hover:bg-gray-100"><i className="px-2 fa-solid fa-ban"></i>Canceled</span>
          </div>
        </div>
      </div>
      <div className="m-4 flex flex-col ">
        <div className="h-[250px] rounded-lg m-2 shadow-lg">
          <div className="flex p-4 bg-gray-50">
            <div className="flex flex-col flex-1">
              <span className="">
                Order id : <span className="text-green-400">455</span>
              </span>
              <span className="text-gray-400">Date : 12/12/2021</span>
            </div>
            <div className="">
              <span className="text-green-400">Status : Delivered</span>
            </div>
          </div>
          <span className="p-4 font-light">From : Store Name</span>
          <div className="w-full overflow-x-scroll flex  items-center">
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
        
          </div>
        </div>
        <div className="h-[250px] rounded-lg m-2 shadow-lg">
          <div className="flex p-4 bg-gray-50">
            <div className="flex flex-col flex-1">
              <span className="">
                Order id : <span className="text-green-400">455</span>
              </span>
              <span className="text-gray-400">Date : 12/12/2021</span>
            </div>
            <div className="">
              <span className="text-green-400">Status : Delivered</span>
            </div>
          </div>
          <span className="p-4 font-light">From : Store Name</span>
          <div className="w-full overflow-x-scroll flex  items-center">
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
        
          </div>
        </div>   <div className="h-[250px] rounded-lg m-2 shadow-lg">
          <div className="flex p-4 bg-gray-50">
            <div className="flex flex-col flex-1">
              <span className="">
                Order id : <span className="text-green-400">455</span>
              </span>
              <span className="text-gray-400">Date : 12/12/2021</span>
            </div>
            <div className="">
              <span className="text-green-400">Status : Delivered</span>
            </div>
          </div>
          <span className="p-4 font-light">From : Store Name</span>
          <div className="w-full overflow-x-scroll flex  items-center">
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
        
          </div>
        </div>   <div className="h-[250px] rounded-lg m-2 shadow-lg">
          <div className="flex p-4 bg-gray-50">
            <div className="flex flex-col flex-1">
              <span className="">
                Order id : <span className="text-green-400">455</span>
              </span>
              <span className="text-gray-400">Date : 12/12/2021</span>
            </div>
            <div className="">
              <span className="text-green-400">Status : Delivered</span>
            </div>
          </div>
          <span className="p-4 font-light">From : Store Name</span>
          <div className="w-full overflow-x-scroll flex  items-center">
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
        
          </div>
        </div>   <div className="h-[250px] rounded-lg m-2 shadow-lg">
          <div className="flex p-4 bg-gray-50">
            <div className="flex flex-col flex-1">
              <span className="">
                Order id : <span className="text-green-400">455</span>
              </span>
              <span className="text-gray-400">Date : 12/12/2021</span>
            </div>
            <div className="">
              <span className="text-green-400">Status : Delivered</span>
            </div>
          </div>
          <span className="p-4 font-light">From : Store Name</span>
          <div className="w-full overflow-x-scroll flex  items-center">
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
            <div className="flex w-[250px] m-1 ">
              <img src={images.tech} className="w-1/2" />
              <div className="flex flex-col w-1/2 justify-center  ">
                <span className="w-full truncate">
                  Product name name name name
                </span>
                <span>x 2</span>
                <span>$999.99</span>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;
