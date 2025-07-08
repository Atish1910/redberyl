// components/OrderDetails.jsx
import React from "react";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const order = useSelector((state) => state.orders.selectedOrder);

  if (!order) return null;

  return (
    <>
      <div className="row order-details border rounded-3 pt-3 bg-white">
        <div className="col-lg-7 ">
          <div className="order-id">
            #IN1001{" "}
            <span className={`badge bg-success mx-3 `}>in progress</span>
          </div>
          <div className="pt-2">
            <p className="company">
              Infosys Pvt Ltd
              <a href="callto:8888428371" className="ps-3 contact">
                contact_person
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-5 text-end">
          <button className="btn btn-01 me-3">
            <i class="bi bi-printer pe-2"></i>Print
          </button>
          <button className="btn btn-01">
            <i class="bi bi-download pe-2"></i>Save As Pdf
          </button>
        </div>
      </div>
      <div className="row mt-4 border rounded-3 pt-3 bg-white">
        <div className="col-lg-8">
          <div className="row mb-5">
            <div className="col-lg-3">
              <div className="">
                <h6 className="mb-0 fw-bold">Placed By</h6>
                <p>Ravi Kumar</p>
              </div>
              <div className="">
                <h6 className="mb-0 fw-bold">Order Date</h6>
                <p>Mar 20, 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
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
