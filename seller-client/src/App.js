import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import DashBoard from "./page/DashBoard";
import Login from "./page/Login";
import Profile from "./page/Profile";
import HistoryTransaction from "./page/HistoryTransaction";
import ListField from "./page/ListField";
import SingleField from "./page/SingleField";
import CreateField from "./page/CreateField";
import ListOrder from "./page/ListOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="history-transaction" element={<HistoryTransaction />} />
            <Route path="list-field" element={<ListField />} />
            <Route path="single-field/:id" element={<SingleField />} />
            <Route path="create-field" element={<CreateField />} />
            <Route path="list-order" element={<ListOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
