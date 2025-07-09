import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const OrderFilter = ({ orders, onFilter }) => {
  const [searchId, setSearchId] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");

  // Get unique companies and statuses for dropdowns
  const uniqueCompanies = [...new Set(orders.map((o) => o.company))];
  const uniqueStatuses = [...new Set(orders.map((o) => o.status))];

  // Trigger filter on any change
  useEffect(() => {
    onFilter({ searchId, company, status });
  }, [searchId, company, status, onFilter]);
  
  const handleFilter = () => {
    onFilter({ searchId, company, status });
  };

  const handleClear = () => {
    setSearchId("");
    setCompany("");
    setStatus("");
    onFilter({ searchId: "", company: "", status: "" });
    toast.success("Order list is clear")
  };

  return (
    <div className="px-3 mb-2 row">
      <div className="mb-2 col-lg-3 col-6">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search by Order ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>

      <div className="mb-2 col-lg-3 col-6">
        <select
          className="form-select form-select-sm"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="">Filter by Company</option>
          {uniqueCompanies.map((comp, idx) => (
            <option key={idx} value={comp}>
              {comp}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2 col-lg-3 col-6">
        <select
          className="form-select form-select-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Filter by Status</option>
          {uniqueStatuses.map((stat, idx) => (
            <option key={idx} value={stat}>
              {stat}
            </option>
          ))}
        </select>
      </div>

      <div className="col-lg-3 col-6 mb-2  align-items-center">
        <button className="btn  btn-sm  btn-primary px-3 me-3 d-none d-lg-inline" onClick={handleFilter}>
                Filter
                </button>
        <button className="btn  btn-sm btn-01" onClick={handleClear}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default OrderFilter;
