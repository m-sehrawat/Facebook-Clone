import {Routes,Route} from "react-router-dom"
import { Homepage } from "../components/homepage/home";
import { PrivateRoute } from "../components/auth/PrivateRouter";
import { Login } from "../components/auth/login";

export const Router = () => {

    return  (
        <>

        <Routes>
        <PrivateRoute>
            <Route path="/" element={<Homepage/>} />
        </PrivateRoute>

            <Route path="/login" element={<Login/>}/>
        </Routes>
        
        </>
    );
};