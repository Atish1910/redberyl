// features/orders/OrdersList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder } from "./ordersSlice";

const OrdersList = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  return (
    <ul className="list-group border py-3 left-navbar">
      <div className="ps-2">
        <h6>
          Orders : &nbsp;
          <span className="text-primary text-white bg-primary rounded-pill p-1">
            {orders.length}
          </span>
        </h6>
      </div>
      {orders.map((order) => (
        <button
          key={order.id}
          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center`}
          onClick={() => dispatch(selectOrder(order))}
        >
          <p className="mb-0">
            <span className="text-bold d-block order-id">{order.id}</span>
            <span className="text-bold order-company">{order.company}</span>
          </p>
          <p>
            <span className={`badge bg-${getBadgeClass(order.status)} me-3`}>
              {order.status}
            </span>
            <i class="bi bi-arrow-right"></i>
          </p>
        </button>
      ))}
    </ul>
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
