import {Routes, Route} from "react-router-dom"

import {Homepage} from "../components/Homepage";

import {Login } from "../components/auth/login";
import {PrivateRoute} from "../components/auth/PrivateRouter"


export const Router = () => {

    return  (
        <>
        <Routes>

       <Route path="/login" element={<Login />}></Route>
       <Route path="/" element={<PrivateRoute><Homepage /></PrivateRoute>}></Route>


        </Routes>
        </>
    );
};