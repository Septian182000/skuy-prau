import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages';
import ReviewPendaki from '../pages/reviewPendaki'
import ReviewAdmin from '../pages/reviewAdmin';
import JalurPendaki from '../pages/jalurPendaki';
import JalurAdmin from '../pages/jalurAdmin';
import About from '../pages/about';
import NotFound from '../pages/notFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/review-pendaki' element={<ReviewPendaki/>}/>
        <Route path='/admin100101001' element={<ReviewAdmin/>}/>
        <Route path='/jalur-pendaki' element={<JalurPendaki/>}/>
        <Route path='/jalur100101001' element={<JalurAdmin/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;