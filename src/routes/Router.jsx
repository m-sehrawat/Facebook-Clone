import { Routes, Route } from "react-router-dom";
import { Homepage } from "../components/homepage/home";
import { Login } from "../components/auth/login";
import { PrivateRoute } from "../components/auth/PrivateRouter";
import { Navbar } from "../components/navbar/Navbar";

export const Router = () => {
  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<PrivateRoute><Navbar /></PrivateRoute>}>
          <Route path="home" element={<Homepage />} />
          <Route path="groups" element={<Homepage />} />
          <Route path="friends" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
};
