import React from "react";
import "./HomePage.css";

export default function HomePage() {
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
    <div className="home-container">
      <img src="/logo-white.png" alt="Custom Keychain" className="title" />

      <div className="product-container">
        <img
          src="/keychain-pic.jpeg"
          alt="Custom Keychain"
          className="product-image"
        />

        <div className="product-info">
          <h2 className="product-title">CPT Wallop Key Chain</h2>
          <p className="product-description">Wallop Gary Ring</p>
          <h3 className="product-price">£4.00</h3>

          <button className="buy-button" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
