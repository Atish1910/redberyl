import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder } from "./ordersSlice";

const OrdersList = ({ orders, getBadgeClass}) => {
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // Calculate visible orders
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ul className="list-group border py-3 left-navbar">
      <div className="px-3 mt-2">
        <h6>
          Orders:
          <span className="text-primary text-white bg-primary rounded-pill p-1">
            {orders.length}
          </span>
        </h6>
      </div>

      {currentOrders.map((order) => (
        <button
          key={order.id}
          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center 
            ${selectedOrder?.id === order.id ? "active bg-active text-dark" : ""}`}
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
            <i className="bi bi-arrow-right"></i>
          </p>
        </button>
      ))}

      {/* Pagination Controls */}
      <div className="px-3 py-2 d-flex justify-content-between">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </ul>
  );
};

export default OrdersList;
