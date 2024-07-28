import React from "react";
import { Route, Routes } from "react-router-dom";
import Bracelet from "../pages/Bracelet";
import Cart from "../pages/Cart";
import Earings from "../pages/Earings";
import FindStore from "../pages/Gifting.jsx";
import MangalSutras from "../pages/MangalSutras";
import MoreJewellery from "../pages/MoreJewellery";
import Solitaires from "../pages/Solitaires";
import Rings from "../pages/Rings";
import HomePage from "../pages/HomePage";
import Necklaces from "../pages/Necklaces";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Gifting from "../pages/Gifting.jsx";
import SingleProdRing from "../pages/SingleProdRing.jsx";
import SingleProdSolitaires from "../pages/SingleProdSolitaires.jsx";
import SingleProdMangalSutras from "../pages/SingleProdMangalSutras.jsx";
import SingleProdNecklace from "../pages/SingleProdNecklace.jsx";
import SingleProdEaring from "../pages/SingleProdBracelet.jsx";
import SingleProdGifting from "../pages/SingleProdGifting.jsx";
import SingleProdBracelet from "../pages/SingleProdEaring.jsx";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/rings' element={<Rings />} />
            <Route path='/solitaires' element={<Solitaires />} />
            <Route path='/morejewellery' element={<MoreJewellery />} />
            <Route path='/earings' element={<Earings />} />
            <Route path='/mangalsutras' element={<MangalSutras />} />
            <Route path='/gifting' element={<Gifting />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/bracelet' element={<Bracelet />} />
            <Route path='/necklaces' element={<Necklaces />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/rings/:id' element={<SingleProdRing />} />
            <Route path='/solitaires/:id' element={<SingleProdSolitaires />} />
            <Route path='/mangalsutras/:id' element={<SingleProdMangalSutras />} />
            <Route path='/Necklaces/:id' element={<SingleProdNecklace />} />
            <Route path='/Bracelet/:id' element={<SingleProdEaring />} />
            <Route path='/Gifting/:id' element={<SingleProdGifting />} />
            <Route path='/Earings/:id' element={<SingleProdBracelet />} />


        </Routes>

    )
}

export default AllRoutes