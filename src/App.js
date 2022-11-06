import React from "react";
import "./index.css";
// import "./joinModal.css";
// import "./joinModalForm.css";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./mainPage.js";
import {Route, Routes} from 'react-router-dom';
import Recruit from "./recruit";
import RecruitNotice from "./recruitNotice";
import RecruitBlueBeaker from "./recruitBluebeaker";
import Search from "./search";
import SearchDetail from "./searchDetail";



const App = () => {

  return (
    <>
    
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/recruit" element={<Recruit />}></Route>
        <Route path="/developeAll" element={<RecruitNotice />}></Route>
        <Route path="/developeAll/:id" element={<RecruitBlueBeaker />}></Route>
        <Route path="/search" element={ <SearchDetail  />}></Route>
      </Routes>
      <Footer />
        
    </>
  )
 

} 

export default App;
