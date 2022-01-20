
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const PrivateRoute = ({ children }) => {

    const { token,isAuth} = useSelector(state => ({ token: state.token, isAuth: state.isAuth }));

     
      

    return (!isAuth)? <Navigate to={"/login"}/> : (children)
}

