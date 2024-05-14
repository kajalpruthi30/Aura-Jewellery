import React from 'react';
import {Routes, Route } from 'react-router-dom';

import BellyRings from "../collections/jewellery/bodyJewellery/BellyRings";


function New() {
  return (
      <Routes>
        <Route path='/belly-rings' element={<BellyRings />} />
      </Routes>
  )
}

export default New
