import React, { useEffect, useState } from "react";
import LoadingCard from "../../components/LoadingCard";
import { apiRequest } from "../../handlers/apiHandler";
import { formatDate } from "../../utils/formatedDate";
import EmptyCard from "../../components/EmptyCard";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../components/InfoCard";
import { usecheckStoreOwnership } from "../../handlers/checkOwnership";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const fetchOrders = async () => {
    setLoading(true);
    const response = await apiRequest("get", "list_orders_for_store/");
    if (response.success === false) {
      setError(true);
    } else {
      setLoading(false);
      setOrders(response);
    }
  };
  const filterOrders = async (filter_method) => {
    setLoading(true);
    const response = await apiRequest(
      "get",
      `filter_orders_store/?filter_method=${filter_method}`
    );
    if (response.success === false) {
      setError(true);
      setInfo("Couldn't load orders ");
    } else {
      setLoading(false);
      setOrders(response);
    }
  };
  const [ownsStore, loading, error, info, setInfo, setError, setLoading] =
    usecheckStoreOwnership(fetchOrders);
  return (
    <>
      <InfoCard iserror={error} info={info} />
      <div className=" h-[600px] relative">
        <LoadingCard show={loading} text="payment method" />

        {ownsStore ? (
          <div className="h-full overflow-y-scroll">
            <div className=" border-b-2 flex m-8 items-center">
              <span className="flex-1 font-bold text-2xl">
                Orders from customers
              </span>
              <div className="relative group bg-gray-100 rounded-lg z-[500]">
                <span className="px-4">
                  <i className="fa-solid fa-caret-down px-2"></i>Filter
                </span>
                <div className="absolute group-hover:opacity-100 opacity-0 pointer-events-none group-hover:pointer-events-auto cursor-pointer flex flex-col z-20 bg-white shadow-xl right-0 w-[200px] ">
                  <span
                    onClick={() => filterOrders("delivered")}
                    className="p-4 hover:bg-gray-100"
                  >
                    <i className="px-2 fa-solid fa-truck"></i> Delivered
                  </span>
                  <span
                    onClick={() => filterOrders("pending")}
                    className="p-4 hover:bg-gray-100"
                  >
                    <i className="px-2 fa-solid fa-spinner"></i> Pending
                  </span>
                  <span
                    onClick={() => filterOrders("cancelled")}
                    className="p-4 hover:bg-gray-100"
                  >
                    <i className="px-2 fa-solid fa-ban"></i> Canceled
                  </span>
                  <span
                    onClick={() => filterOrders("shipped")}
                    className="p-4 hover:bg-gray-100"
                  >
                    <i className="px-2 fa-solid fa-ship"></i> Shipped
                  </span>
                </div>
              </div>
            </div>
            <span className="mx-8 font-extralight">
              {orders?.length} orders
            </span>
            <div className="mx-8 text-orange-400">
              <i className="fa-solid fa-circle-exclamation text-orange-400"></i>
              <span className="px-2">Orders you see here have been paid</span>
            </div>
            <div className="m-4 flex flex-col  ">
              {orders.length > 0 ? (
                orders?.map((order) => (
                  <div
                    key={order.order_id}
                    className="h-[350px] rounded-lg m-2 shadow-lg  "
                  >
                    <div className="flex p-4 bg-gray-50">
                      <div className="flex flex-col flex-1">
                        <span className="">
                          Order id :
                          <span className="text-gray-400">
                            {order.order_id}
                          </span>
                        </span>
                        <span className="text-gray-400">
                          Date : {formatDate(order.date_created)}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-green-400">
                          Status : {order.status}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="p-4 font-light">
                        Store : {order.store.name}
                      </span>
                      <span>Total paid : {order.total_price}</span>
                    </div>

                    <div className="w-full overflow-x-scroll  flex items-center p-2  h-[150px] ">
                      {order.cart?.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex w-[250px] flex-shrink-0 h-full "
                        >
                          <img
                            src={item.product.image}
                            className="w-1/2 h-full"
                          />
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
                    <div className="flex flex-col p-4 font-light ">
                      <span>Order by : {order.creator?.username}</span>
                      <span>Address : Yeka city , addis ababa </span>
                    </div>
                  </div>
                ))
              ) : (
                <EmptyCard
                  text="You don't have any orders yet."
                  btext="Add more products"
                  handleClick={() => navigate(`/admin/products`)}
                />
              )}
            </div>
          </div>
        ) : (
          <EmptyCard
            styles=" w-full h-full "
            text="You don't own a store yet"
            btext="Create Store"
            handleClick={() => navigate("/admin/theme")}
          />
        )}
      </div>
    </>
  );
};

export default Orders;
