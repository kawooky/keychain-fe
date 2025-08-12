import React from "react";
import { Link } from "react-router-dom";
import "./CancelPage.css";

export default function CancelPage() {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-danger">Payment Canceled</h1>
      <p>Your order was not completed. You can try again at any time.</p>
      <Link to="/" className="btn btn-secondary">
        Back to Store
      </Link>
    </div>
  );
}
