import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderDetails = ({ photo }) => {
  const order = useSelector((state) => state.orders.selectedOrder);
  const [activeTab, setActiveTab] = useState("details");

  if (!order) return null;

  return (
    <>
      {/* Existing Order Header */}
      <div className="row order-details border rounded-3 pt-3 bg-white">
        <div className="col-lg-7 ">
          <div className="order-id">
            #{order.id}
            <span className={`badge bg-${getBadgeClass(order.status)} mx-2`}>
              {order.status}
            </span>
          </div>
          <div className="pt-2">
            <p className="company">
              {order.company}
              <a href={`tel:${order.contact.phone}`} className="ps-3 contact">
                contact_person
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-5 text-lg-end pb-4">
          <button className="btn btn-01 me-3">
            <i className="bi bi-printer pe-2"></i>Print
          </button>
          <button className="btn btn-01">
            <i className="bi bi-download pe-2"></i>Save As Pdf
          </button>
        </div>
      </div>

      {/* Existing Order Info Section */}
      <div className="row mt-4 border rounded-3 pt-3 bg-white order-details">
        <div className="col-lg-8">
          <div className="row mb-5">
            <div className="col-lg-3 col-6">
              <h6 className="mb-0 fw-bold key">Placed By</h6>
              <p className="value">{order.contact.name}</p>
              <h6 className="mb-0 fw-bold key">Order Date</h6>
              <p className="value">{order.orderDate}</p>
            </div>
            <div className="col-lg-3 col-6">
              <h6 className="mb-0 fw-bold key">Requester</h6>
              <p className="value">{order.contact.name}</p>
              <h6 className="mb-0 fw-bold key">Expected Date</h6>
              <p className="value">{order.expectedDate}</p>
            </div>
            <div className="col-lg-3 col-6">
              <h6 className="mb-0 fw-bold key">PO/ External ID</h6>
              <p className="value">{order.contact.name}</p>
              <h6 className="mb-0 fw-bold key">Completion Date</h6>
              <p className="value">{order.completionDate}</p>
            </div>
            <div className="col-lg-3 col-6">
              <h6 className="mb-0 fw-bold key">Requester Email ID</h6>
              <p className="value">{order.email}</p>
              <h6 className="mb-0 fw-bold key">Service Level</h6>
              <p className="value">{order.serviceLevel}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 pe-lg-4 px-4">
          <div className="row border rounded-3 mb-4">
            <div className="d-flex align-items-center py-3 border-bottom">
              <img src={photo} className="passport-img border" alt="" />
              <div className="ps-3">
                <p className="mb-0">{order.contact.name}</p>
                <span className="text-primary">Primary</span>
              </div>
            </div>
            <div className="py-3 personal-info">
              <p className="mb-1">
                <i className="bi bi-telephone text-primary pe-2"></i>{" "}
                {order.contact.phone}
              </p>
              <p className="mb-1">
                <i className="bi bi-envelope text-primary pe-2"></i>{" "}
                {order.contact.email}
              </p>
              <p className="mb-1">
                <i className="bi bi-geo-alt text-primary pe-2"></i>{" "}
                {order.contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW TABS ROW */}
      <div className="row mt-4">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "details" ? "active" : ""
                }`}
                onClick={() => setActiveTab("details")}
              >
                Order Details
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "requirements" ? "active" : ""
                }`}
                onClick={() => setActiveTab("requirements")}
              >
                Order Requirements
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "contacts" ? "active" : ""
                }`}
                onClick={() => setActiveTab("contacts")}
              >
                Contacts
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "documents" ? "active" : ""
                }`}
                onClick={() => setActiveTab("documents")}
              >
                Documents
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "status" ? "active" : ""}`}
                onClick={() => setActiveTab("status")}
              >
                Status History
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "manager" ? "active" : ""
                }`}
                onClick={() => setActiveTab("manager")}
              >
                Account Manager
              </button>
            </li>
          </ul>

          {/* TAB CONTENT */}
          <div className="tab-content border border-top-0 p-3 bg-white rounded-bottom">
            {activeTab === "details" && (
              <div className="row  order-01">
                <div className="col-lg-6">
                  <div className="card">
                    <h5 className="card-header text-primary">Receipt</h5>
                    <div className="card-body border-bottom">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="card-title">State Filling</h6>
                        <h6 className="card-title">${order.stateFiling}</h6>
                      </div>
                      <ul>
                        <li>
                          The Filling Fee For the application as per state
                          selected
                        </li>
                        <li>Government fee</li>
                      </ul>
                    </div>

                    <div className="card-body border-bottom">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="card-title">Registered Agent Service</h6>
                        <h6 className="card-title">${order.agentFee}</h6>
                      </div>
                      <ul>
                        <li>
                          Fees To appoint Registered Agent to handle necessary
                          government, tax & legal corrospondence about your
                          business.{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card">
                    <h5 className="card-header text-primary">Order history</h5>
                    <div className="card-body border-bottom">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center ">
                          <i class="bi bi-check2-circle fs-3 text-success"></i>
                          <div className="ps-3">
                            <h6 className="card-title mb-0">Order Created</h6>
                            <p className="mb-1">
                              Processed By <a href="">customer_name</a>
                            </p>
                            <p className="mb-0">{order.history.orderMessage}</p>
                          </div>
                        </div>

                        <h6 className="card-title mb-0">
                          {order.history.oDate}
                        </h6>
                      </div>
                    </div>
                    <div className="card-body border-bottom">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center ">
                          <i class="bi bi-check2-circle fs-3 text-success"></i>
                          <div className="ps-3">
                            <h6 className="card-title mb-0">At State</h6>
                            <p className="mb-1">
                              Processed By <a href="">State_manager</a>
                            </p>
                            <p className="mb-0">{order.history.stateMessage}</p>
                          </div>
                        </div>

                        <h6 className="card-title mb-0">
                          {order.history.stateDate}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <p><strong>Order Details:</strong> #{order.id} for <strong>{order.company}</strong></p> */}
              </div>
            )}
            {activeTab === "requirements" && (
              <p>
                <strong>Requirements will be displayed here...</strong>
              </p>
            )}
            {activeTab === "contacts" && (
              <p>
                <strong>Contacts tab content here...</strong>
              </p>
            )}
            {activeTab === "documents" && (
              <p>
                <strong>Documents tab content here...</strong>
              </p>
            )}
            {activeTab === "status" && (
              <p>
                <strong>Status History tab content here...</strong>
              </p>
            )}
            {activeTab === "manager" && (
              <p>
                <strong>Account Manager tab content here...</strong>
              </p>
            )}
          </div>
        </div>
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
    case "created":
      return "primary";
    case "query raised":
      return "danger";
    default:
      return "dark";
  }
};

export default OrderDetails;
