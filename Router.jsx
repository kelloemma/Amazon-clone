import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./src/pages/landing/Landing";
import Signup from "./src/pages/auth/Signup";
import Payment from "./src/pages/payment/Payment";
import Orders from "./src/pages/cart/orders/Orders";
import Cart from "./src/pages/cart/Cart";
import ProductDetail from './src/pages/productDetail/ProductDetail'

const Routeing = () => {
  return (
    <Router basename="/Amazon-clone">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products/:productid" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routeing;
