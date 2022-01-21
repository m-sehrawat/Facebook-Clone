import { Routes, Route } from "react-router-dom";
import { Homepage } from "../components/homepage/home";
import { Login } from "../components/auth/login";
import { PrivateRoute } from "../components/auth/PrivateRouter";
import { Navbar } from "../components/navbar/Navbar";
import { ProfileNav } from "../profile/ProfileNav";
import { Post } from "../profile/Post";
import { About } from "../profile/About";
import { Friends } from "../profile/Friends";
import { Photos } from "../profile/Photos";
import {Bkwas} from "../components/bkwas"

export const Router = () => {
  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Navbar /></PrivateRoute>}>
          <Route path="/" element={<Homepage />} />
          <Route path="groups" element={<Homepage />} />
          <Route path="profile" element={<ProfileNav />}>
            <Route path="" element={<Post />} />
            <Route path="about" element={<About />} />
            <Route path="friends" element={<Friends />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>

        <Route path="/bkwas" element={<Bkwas/>} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
};
