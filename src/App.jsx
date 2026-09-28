import React from 'react';
import Home from "../HOME PAGES/Home.jsx";
import Navbar from "../COMMON/Navbar.jsx";
import BookNow from "../HOME PAGES/BookNow.jsx";
import Footer from "../COMMON/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "../HOME PAGES/About.jsx";
import Vission from "../HOME PAGES/Vission.jsx";
import Contact from "../HOME PAGES/Contact.jsx";
import Service from "../HOME PAGES/Service.jsx";
import i18n from "i18next";
import Chatbot from "../COMMON/Chatbot.jsx";

const App = () => {
  const isArabic = i18n.language === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>


      <BrowserRouter>
       <Navbar />

       <Chatbot />

      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/BookNow' element={ <BookNow/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Vission' element={<Vission />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Service' element={<Service />} />
         
      </Routes>
            <Footer />
      </BrowserRouter>




    </div>
  )
}

export default App;