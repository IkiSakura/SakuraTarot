import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../pages/home/Home"
import Reading from '../pages/reading/Reading';
import Journal from "../pages/journal/Journal"


export default function AppRouter(){
    return(
            <Routes>
                <Route path="/" element= {<Home/>}></Route> 
                <Route path="/Reading" element= {<Reading/>}></Route> 
                <Route path="/Journal" element={<Journal/>}></Route>   
            </Routes>
    )

}