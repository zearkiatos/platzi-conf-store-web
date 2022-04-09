/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '@containers/Home';
import Checkout from '@containers/Checkout';
import Information from '@containers/Information';
import Payment from '@containers/Payment';
import Success from '@containers/Success';
import NotFound from '@containers/NotFound';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/checkout" element={<Checkout />}  />
            <Route path="/checkout/information" element={<Information />}  />
            <Route path="/checkout/payment" element={<Payment />}  />
            <Route path="/checkout/success" element={<Success />}  />
            <Route path="*" element={<NotFound />}  />
        </Routes>
    )
};

export default Router;