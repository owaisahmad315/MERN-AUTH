import { Outlet } from "react-router-dom";

 import React from 'react';
 import Header from "./components/Header";
 
 
 const App = () => {
   return (
      <>
        <Header />
        <Outlet />
      </>
   )
 }
 
 export default App