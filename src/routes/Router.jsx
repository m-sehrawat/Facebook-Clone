import {Routes, Route} from "react-router-dom"
import { Login } from "../components/Login";
import {Homepage} from "../components/Homepage";


export const Router = () => {

    return  (
        <>
        <Routes>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/home" element={<Homepage />}></Route>
        </Routes>
        </>
    );
};