import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoard from "./page/DashBoard";
import MainLayout from "./components/MainLayout";
import ListRenter from "./page/ListRenter";
import Renter from "./page/Renter";
import Login from "./page/Login";
import ListSeller from "./page/ListSeller";
import Seller from "./page/Seller";

import Soccer from "./page/Soccer";
import Badminton from "./page/Badminton";
import PingPong from "./page/PingPong";
import Tennis from "./page/Tennis";
import PickleBall from "./page/PickleBall";

import Transaction from "./page/Transaction";
import ProtectedRoute from "./page/ProtectedRoute";
import Order from "./page/Order";
import ListCoupon from "./page/ListCoupon";
import AddCoupon from "./page/addCoupon";
import Coupon from "./page/Coupon";
import SingleField from "./page/SingleField";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<MainLayout />}>
              <Route index element={<DashBoard />} />
              <Route path="renter" element={<ListRenter />} />
              <Route path='soccer' element={<Soccer />} />
              <Route path='badminton' element={<Badminton />} />
              <Route path='pingpong' element={<PingPong />} />
              <Route path='tennis' element={<Tennis />} />
              <Route path='pickleball' element={<PickleBall />} />
              <Route path='transaction' element={<Transaction />} />
              <Route path='order' element={<Order />} />
              <Route path="renter/:id" element={<Renter />} />
              <Route path='seller' element={<ListSeller />} />
              <Route path="seller/:id" element={<Seller />} />
              <Route path="list-coupon" element={<ListCoupon />} />
              <Route path="create-coupon" element={<AddCoupon />} />
              <Route path="list-coupon/:id" element={<Coupon />} />
              <Route path="field/:id" element={<SingleField />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
