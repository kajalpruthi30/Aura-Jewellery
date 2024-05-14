import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Faq from "../collections/piercing/Faq";
import AfterCare from "../collections/piercing/AfterCare";
import Edit from "../collections/piercing/Edit";
import GiftCard from "../collections/piercing/GiftCard";
import StudioServices from "../collections/piercing/StudioServices";


function New() {
  return (
      <Routes>
        <Route path='/faq' element={<Faq />} />
        <Route path='/after-care' element={<AfterCare />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/gift-card' element={<GiftCard />} />
        <Route path='/studio-services' element={<StudioServices />} />

      </Routes>
  )
}

export default New
