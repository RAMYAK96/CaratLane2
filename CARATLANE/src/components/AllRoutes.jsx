import React from "react";
import { Route,Routes } from "react-router-dom";
import Bracelet from "../pages/Bracelet";
import Cart from "../pages/Cart";
import Earings from "../pages/Earings";
import FindStore from "../pages/FindStore";
import MangalSutras from "../pages/MangalSutras";
import MoreJewellery from "../pages/MoreJewellery";
import Solitaires from "../pages/Solitaires";
import Rings from "../pages/Rings";
import HomePage from "../pages/HomePage";
import Necklaces from "../pages/Necklaces";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";


const AllRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/rings' element={<Rings/>}/>
            <Route path='/solitaires' element={<Solitaires/>}/>
            <Route path='/morejewellery' element={<MoreJewellery/>}/>
            <Route path='/earings' element={<Earings/>}/>
             <Route path='/mangalsutras' element={<MangalSutras/>}/>
            <Route path='/findstore' element={<FindStore/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/bracelet' element={<Bracelet/>}/>
            <Route path='/necklaces' element={<Necklaces/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>


        </Routes>
       
    )
} 

export default AllRoutes