import React from 'react';
import {Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Register from "../pages/Register";
import FindStore from "../pages/FindStore";
import Gifts from "../pages/Gifts";
import Wishlist from "../pages/Wishlist";
import Piercing from '../pages/Piercing';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Collections from '../components/Common/Collections';
import Stylechannel from './styleChannel';
import PiercingSubRoutes from "./piercing";
import DeliveryExchange from "./deliveryExchange";
import FooterComp from "./footer"


import { useAuthContext } from '../context/AuthContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Routing() {

  const { authUser } = useAuthContext();

  return (
    <>
      <Header />
      <ScrollToTop /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/piercing' element={<Piercing />} />
        <Route path='/gifts' element={<Gifts />} />
        <Route path='/find-store' element={<FindStore />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path='/register' element={!authUser ? <Register /> : <Navigate to="/" />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/style-channel/*' element={<Stylechannel />} />
        <Route path='/piercing/*' element={<PiercingSubRoutes />} />
        <Route path='/delivery-payments/*' element={<DeliveryExchange />} />
        <Route path='/footer/*' element={<FooterComp />} />
        {/* <Route path='/collections/*' element={<New />} />
        <Route path='/collections/*' element={<Jewellery />} /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default Routing;
