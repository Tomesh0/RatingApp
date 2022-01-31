import React from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';




export default function Rout() {
  return <div>

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>      
</BrowserRouter>
  </div>;
}
