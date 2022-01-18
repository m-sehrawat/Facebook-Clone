import { Login } from "../components/auth/login";

import {Routes, Route} from "react-router-dom";
import {Homepage} from "../components/homepage/home";
import {PrivateRoute} from "../components/auth/PrivateRouter"

export const Router = () => {

    return  (
        <>
        <Routes>
        <Route path={"/login"}  element={ <Login />}/>

{/* private routing to access home page.. only authorised use are allowed    */}
       <Route path={"/"} element={
       <PrivateRoute>
       <Homepage/>
       </PrivateRoute>
       }/>

        </Routes>
        </>
    );
};