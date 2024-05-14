import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Company from "../pages/Footer/Company";
import Investor from "../pages/Footer/Investor";
import Careers from "../pages/Footer/Careers";
import ContactUs from "../pages/Footer/ContactUs";
import HelpCentre from '../pages/Footer/ContactUs/HelpCentre';
import Request from '../pages/Footer/ContactUs/Request';
import Delivery from '../pages/Footer/ContactUs/Delivery';
import OrderAndProduct from '../pages/Footer/ContactUs/OrderProduct';


import Help from "../pages/Footer/Help";
import Guide from "../pages/Footer/CareSizeGuide";
import StyleChannel from '../pages/Footer/StyleChannel';
import TermsConditions from '../pages/Footer/TermsConditions';
import Privacy from '../pages/Footer/Privacy';

function FooterComp() {
    return (
        <Routes>
            <Route path='/style' element={<StyleChannel />} />
            <Route path='/terms' element={<TermsConditions />} />
            <Route path='/privacy' element={<Privacy />} />

            <Route path='/company' element={<Company />} />
            <Route path='/investor' element={<Investor />} />
            <Route path='/careers' element={<Careers />} />

            <Route path='/contact' element={<ContactUs />} />


            <Route path='/help-centre' element={< HelpCentre />} />
            <Route path='/request' element={<Request />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/order-and-product' element={<OrderAndProduct />} />


            <Route path='/help' element={<Help />} />
            <Route path='/guide' element={<Guide />} />

        </Routes>
    )
}

export default FooterComp