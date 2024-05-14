import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Blog1 from "../pages/StyleChannel/ReadMore1";
import Blog2 from "../pages/StyleChannel/ReadMore2";
import Blog3 from "../pages/StyleChannel/ReadMore3";
import Blog4 from "../pages/StyleChannel/ReadMore4";



function New() {
  return (
      <Routes>
        <Route path='/blog1' element={<Blog1 />} />
        <Route path='/blog2' element={<Blog2 />} />
        <Route path='/blog3' element={<Blog3 />} />
        <Route path='/blog4' element={<Blog4 />} />
      </Routes>
  )
}

export default New
