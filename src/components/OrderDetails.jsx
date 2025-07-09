import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import OrderTabs from "./OrderTabs";
import toast from "react-hot-toast";

const OrderDetails = ({ photo }) => {
  const order = useSelector((state) => state.orders.selectedOrder);
  const [activeTab, setActiveTab] = useState("details");
  const pdfRef = useRef();

  if (!order) return null;

  // ⬇️ Function to handle PDF download
  // pdf download format
  const pdfDownloadFormat = {
    margin: 0.5,
    filename: `${order.company.replace(/\s+/g, "_")}_${order.id}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // handle Download pdf
  const handleDownloadPDF = () => {
    const element = pdfRef.current;
    const opt = pdfDownloadFormat;
    html2pdf().set(opt).from(element).save();
    toast.success("Your Pdf is Downloaded successfully ");
  };

  // handle print pdf
  const handlePrintPDF = () => {
    const element = pdfRef.current;
    const opt = pdfDownloadFormat;
    html2pdf()
      .set(opt)
      .from(element)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        const blobUrl = pdf.output("bloburl");
        window.open(blobUrl, "_blank");
      });
    
      toast.success("Your pdf is ready You can download now");
  };

  return (
    <>
      <div className="container-fluid" ref={pdfRef}>
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
            <button className="btn btn-01 me-3" onClick={handlePrintPDF}>
              <i className="bi bi-printer pe-2"></i>Print
            </button>
            <button className="btn btn-01" onClick={handleDownloadPDF}>
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
              <a href={`tel:${order.contact.phone}`} className=" contact">
                  <i className="bi bi-telephone text-primary pe-2"></i>{order.contact.phone}</a>
                
                <p className="mb-1">
                  <a href={`mailto:${order.contact.email}`} className=" contact">
                  <i className="bi bi-envelope text-primary pe-2"></i>{order.contact.email}</a>
                </p>
                <p className="mb-1">
                  <i className="bi bi-geo-alt text-primary pe-2"></i>
                  {order.contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <OrderTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          order={order}
          photo={photo}
        ></OrderTabs>
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
