import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { apiRequest } from "../../handlers/apiHandler";
import { formatDate } from "../../utils/formatedDate";
import EmptyCard from "../../components/EmptyCard";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../components/InfoCard"
const CustomerOrders = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info , setInfo] = useState("");

  const fetchOrders = async () => {
    const response = await apiRequest("get", "list_orders/");
    if (response.success === false) {
      setError(true);
    } else {
      setOrders(response);
      setLoading(false);
    }
  };
  const filterOrders = async (filter_method) => {
    const response = await apiRequest('get', `filter_orders_user/?filter_method=${filter_method}`)
    if (response.success === false) {
      setError(true)
      setInfo("Couldn't load orders ")
    }
    else {
      setLoading(false)
      setOrders(response)
    }
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="h-full  ">
      <InfoCard   info={info} iserror = {error} />
      <div className="flex m-4 items-center  sticky top-0 bg-white p-4">
        <div className="flex-1 text-4xl font-extrabold ">Your Orders</div>
        <div className="relative group bg-gray-100 rounded-lg z-[1000]">
          <span className="px-4">
            <i className="fa-solid fa-caret-down px-2"></i>Filter
          </span>
          <div className="absolute group-hover:opacity-100 opacity-0 pointer-events-none group-hover:pointer-events-auto cursor-pointer flex flex-col z-20 bg-white shadow-xl right-0 w-[200px] ">
            <span onClick={()=>filterOrders('delivered')} className="p-4 hover:bg-gray-100">
              <i className="px-2 fa-solid fa-truck"></i>Delivered
            </span>
            <span onClick={()=>filterOrders('pending')}  className="p-4 hover:bg-gray-100">
              <i className="px-2 fa-solid fa-spinner"></i>Pending
            </span>
            <span onClick={()=>filterOrders('cancelled')} className="p-4 hover:bg-gray-100">
              <i className="px-2 fa-solid fa-ban"></i>Canceled
            </span>
            <span onClick={()=>filterOrders('shipped')}  className="p-4 hover:bg-gray-100">
              <i className="px-2 fa-solid fa-ship"></i>Shipped
            </span>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex flex-col items-center">
          <img src={images.loading} className="w-[200px]" />
          <span className="my-4 text-xl font-extrabold">Loading Orders ...</span>
        </div>
      ) : (
        <div className="m-4 flex flex-col  ">
          {orders.length > 0 ? orders?.map((order) => (
            <div
              key={order.order_id}
              className="h-[250px] rounded-lg m-2 shadow-lg"
            >
              <div className="flex p-4 bg-gray-50">
                <div className="flex flex-col flex-1">
                  <span className="">
                    Order id :
                    <span className="text-gray-400">{order.order_id}</span>
                  </span>
                  <span className="text-gray-400">Date : {formatDate(order.date_created)}</span>
                </div>
                <div className="">
                  <span className="text-green-400">
                    Status : {order.status}
                  </span>
                </div>
              </div>
              <span className="p-4 font-light">From : {order.store.name}</span>
              <div className="w-full overflow-x-scroll flex items-center p-2  h-[150px]">
                {order.cart?.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex w-[250px] flex-shrink-0 h-full "
                  >
                    <img src={item.product.image} className="w-1/2 h-full" />
                    <div className="flex flex-col w-1/2 justify-center px-2 ">
                      <span className="w-full truncate">
                        {item.product.name}
                      </span>
                      <span>x {item.quantity}</span>
                      <span>${item.sub_total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )):
          <EmptyCard text="No orders found."  btext="visit stores" handleClick={()=>navigate(`/stores`)}/>}
        </div>
      )}
    </div>
  );
};

export default CustomerOrders;
