// features/orders/OrdersList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder } from "./ordersSlice";

const OrdersList = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  return (
    <div className="list-group">
      {orders.map((order) => (
        <button
          key={order.id}
          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center`}
          onClick={() => dispatch(selectOrder(order))}
        >
          <span>{order.id}</span>
          <span className={`badge bg-${getBadgeClass(order.status)}`}>
            {order.status}
          </span>
        </button>
      ))}
    </div>
  );
};

const getBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case "complete":
      return "success";
    case "in progress":
      return "info";
    case "approval pending":
      return "warning";
    case "draft":
      return "secondary";
    case "review":
      return "warning";
    case "submitted":
      return "primary";
    case "created":
      return "primary";
    case "query raised":
      return "danger";
    default:
      return "dark";
  }
};

export default OrdersList;
