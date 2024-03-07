import './App.css';

import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Sidebar from '../component/sidebar';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import { Settings } from '@mui/icons-material';


function App() {
  return (
    <>
    {/* <Sidebar/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element = {<Home/>} ></Route>
      <Route path='/about' exact element = {<About/>} ></Route>

      <Route path='/contact' exact element = {<Contact/>} ></Route>

      <Route path='/setting' exact element = {<Settings/>} ></Route>

    </Routes>
    </BrowserRouter>
    </>
      
   
  );
}

export default App;
