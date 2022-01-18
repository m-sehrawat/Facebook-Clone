import {Routes, Route} from "react-router-dom"
import { Login } from "../components/Login";
import {Homepage} from "../components/homepage/home";


export const Router = () => {

    return  (
        <>
        <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Homepage />}></Route>
        </Routes>
        </>
    );
};