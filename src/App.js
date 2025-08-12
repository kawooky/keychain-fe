import React from "react";
import { Routes, Route } from "react-router-dom";

import SuccessPage from "./Components/SuccessPage/SuccessPage";
import CancelPage from "./Components/CancelPage/CancelPage";
import HomePage from "./Components/HomePage/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
    </Routes>
  );
}
