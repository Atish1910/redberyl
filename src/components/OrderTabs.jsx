// OrderTabs.jsx
import React from "react";

const OrderTabs = ({ activeTab, setActiveTab, order }) => {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <ul className="nav nav-tabs">
          {[
            { key: "details", label: "Order Details" },
            { key: "requirements", label: "Order Requirements" },
            { key: "contacts", label: "Contacts" },
            { key: "documents", label: "Documents" },
            { key: "status", label: "Status History" },
            { key: "manager", label: "Account Manager" },
          ].map((tab) => (
            <li className="nav-item" key={tab.key}>
              <button
                className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content border border-top-0 p-3 bg-white rounded-bottom">
          {activeTab === "details" && order && (
            <div className="row order-01">
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
                        government, tax & legal correspondence about your
                        business.
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
                        <i className="bi bi-check2-circle fs-3 text-success"></i>
                        <div className="ps-3">
                          <h6 className="card-title mb-0">Order Created</h6>
                          <p className="mb-1">
                            Processed By <a href="">customer_name</a>
                          </p>
                          <p className="mb-0">{order.history.orderMessage}</p>
                        </div>
                      </div>
                      <h6 className="card-title mb-0">{order.history.oDate}</h6>
                    </div>
                  </div>

                  <div className="card-body border-bottom">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center ">
                        <i className="bi bi-check2-circle fs-3 text-success"></i>
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
  );
};

export default OrderTabs;
