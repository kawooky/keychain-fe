import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function HomePage() {
  async function handleBuyNow() {
    try {
      const response = await fetch(
        "/.netlify/functions/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: 1 }),
        }
      );
      const { url } = await response.json();
      window.location = url;
    } catch (error) {
      alert("Failed to initiate checkout.");
      console.error(error);
    }
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Custom Keychain Store</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1565372910725-182f88775f9f?auto=format&fit=crop&w=600&q=80"
              className="card-img-top"
              alt="Keychain"
            />
            <div className="card-body">
              <h5 className="card-title">Stylish Custom Keychain</h5>
              <p className="card-text">
                High-quality keychain made from durable materials. Perfect gift
                or personal use.
              </p>
              <h4 className="text-primary">$12.99</h4>
              <button
                className="btn btn-primary btn-block mt-3"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessPage() {
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

function CancelPage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
    </Routes>
  );
}
