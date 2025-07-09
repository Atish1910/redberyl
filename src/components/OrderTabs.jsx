// OrderTabs.jsx
import React from "react";

const OrderTabs = ({ activeTab, setActiveTab, order, photo }) => {
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
            <div className="row order-01">
              <div className="col-lg-6">
                <div className="card">
                  <h5 className="card-header text-primary">Requirements</h5>
                  <div className="card-body border-bottom">
                    <ul>
                      <li>
                        Here you'll find the documents or inputs required from
                        the client to fulfill the order request.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "contacts" && (
            <div className="row order-01">
              <div className="col-lg-6">
                <div className="card">
                  <h5 className="card-header text-primary">Contact</h5>
                  <div className="card-body border-bottom">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="card-title">Customer Care</h6>
                      <h6 className="card-title"></h6>
                    </div>
                    <ul>
                      <li>+202 123432</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "documents" && (
            <p>
              <strong>Documents tab content here...</strong>
            </p>
          )}
          {activeTab === "status" && (
            <div className="row order-01">
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
          {activeTab === "manager" && (
            <div className="row border rounded-3 mb-4">
              <div className="d-flex align-items-center py-3 border-bottom">
                <img src={photo} className="passport-img border" alt="" />
                <div className="ps-3">
                  <p className="mb-0">Ashish Kamble</p>
                  <span className="text-primary">Primary</span>
                </div>
              </div>
              <div className="py-3 personal-info">
                <p className="mb-1">
                  <i className="bi bi-telephone text-primary pe-2"></i>
                  8888428371
                </p>
                <p className="mb-1">
                  <i className="bi bi-envelope text-primary pe-2"></i>
                  atishkamble398@gmail.com
                </p>
                <p className="mb-1">
                  <i className="bi bi-geo-alt text-primary pe-2"></i>Balewadi
                  Plaza, Office No 201,2nd Floor, Near MITCON, Pune, Maharashtra
                  – 411045
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTabs;
