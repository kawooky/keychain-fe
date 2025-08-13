import React from "react";
import { Link } from "react-router-dom";
import "./SuccessPage.css";

export default function SuccessPage() {
  return (
    <div className="success-page">
      <div className="message-box">
        <h1 className="success-title">Payment Successful 🎉</h1>
        <p className="success-text">
          Thank you for your order! Your keychain will be shipped soon.
        </p>
        <Link to="/" className="back-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
