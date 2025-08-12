import React from "react";
import { Link } from "react-router-dom";
import "./SuccessPage.css";

export default function SuccessPage() {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-success">Payment Successful 🎉</h1>
      <p>Thank you for your order! Your keychain will be shipped soon.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}
