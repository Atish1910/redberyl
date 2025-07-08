// components/OrderDetails.jsx
import React from "react";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const order = useSelector((state) => state.orders.selectedOrder);

  if (!order) return null;

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <strong>Order #{order.id}</strong>
        <span className={`badge bg-${getBadgeClass(order.status)}`}>
          {order.status}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {order.company} | {order.state}
        </h5>
        <p>
          <strong>Order Date:</strong> {order.orderDate}
        </p>
        <p>
          <strong>Expected:</strong> {order.expectedDate}
        </p>
        <p>
          <strong>Completion:</strong> {order.completionDate}
        </p>
        <p>
          <strong>Service Level:</strong> {order.serviceLevel}
        </p>
        <p>
          <strong>Email:</strong> {order.email}
        </p>

        <hr />
        <h6>Receipt</h6>
        <p>State Filing: ${order.stateFiling}</p>
        <p>Agent Fee: ${order.agentFee}</p>

        <hr />
        <h6>Contact</h6>
        <p>
          <strong>{order.contact.name}</strong> ({order.contact.role})
        </p>
        <p>{order.contact.phone}</p>
        <p>{order.contact.email}</p>
        <p>{order.contact.address}</p>

        <hr />
        <h6>Order History</h6>
        <ul>
          {order.history.map((entry, idx) => (
            <li key={idx}>
              {entry.message} - <em>{entry.date}</em>
            </li>
          ))}
        </ul>
      </div>
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

export default OrderDetails;
