import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './page/Home';
import PrivacyPolicy from './page/PrivacyPolicy';
import RefundPolicy from './page/RefundPolicy';
import TermsOfService from './page/TermService';
import Login from './page/Login';
import AllField from './page/AllField';
import SingleField from './page/SingleField';
import RentField from './page/RentField';
import Order from './page/Order';
import Blog from './page/Blog';
import Contact from './page/Contact';
import Profile from './page/Profile';
import HistoryOrder from './page/HistoryOrder';
import SignUp from './page/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/term-service' element={<TermsOfService />} />
            <Route path='/all-field' element={<AllField />} />
            <Route path='/all-field/:id' element={<SingleField />} />
            <Route path='/rent-field/:id' element={<RentField />} />
            <Route path='/order' element={<Order />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/history-order' element={<HistoryOrder />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

