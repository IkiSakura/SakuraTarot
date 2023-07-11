import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import Reading from '../pages/reading/Reading';
import Journal from "../pages/journal/Journal";
import Principal from '../pages/principal/Principal';


export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element= {<Principal/>}></Route> 
            <Route path="/Home" element= {<Home/>}></Route> 
            <Route path="/Reading" element= {<Reading/>}></Route> 
            <Route path="/Journal" element={<Journal/>}></Route>   
        </Routes>
    )
}