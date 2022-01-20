
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const PrivateRoute = ({ children }) => {

    const { token } = useSelector(state => ({ token: state.token, isAuth: state.isAuth }));

    return !(token.length > 2) ? <Navigate to={"/login"} /> : children;
}



