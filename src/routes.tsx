import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Cadastrar } from "./Pages/Cadastrar";
import { Listar } from "./Pages/Listar";

export default function MainRoutes(){
   return(
       <Routes>
           <Route path="/" element={ <Cadastrar/> } />
           <Route path="/listar" element={ <Listar/> }/>
       </Routes>
   ); 
}

