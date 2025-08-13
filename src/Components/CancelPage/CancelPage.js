import React from "react";
import { Link } from "react-router-dom";
import "./CancelPage.css";

export default function CancelPage() {
  return (
    <div className="cancel-page">
      <div className="message-box">
        <h1 className="cancel-title">Payment Canceled</h1>
        <p className="cancel-text">
          Your order was not completed. You can try again at any time.
        </p>
        <Link to="/" className="back-button">
          Back to Store
        </Link>
      </div>
    </div>
  );
}
