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
import { Bkwas } from "../components/bkwas"
import { FriendRequest } from "../components/friends/FriendRequest";
import { UserProfileNav } from "../userProfile/UserProfileNav";
import { UserPost } from "../userProfile/UserPost";
import { UserAbout } from "../userProfile/UserAbout";
import { UserPhotos } from "../userProfile/UserPhotos";

export const Router = () => {
  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Navbar /></PrivateRoute>}>
          <Route path="/" element={<Homepage />} />
          <Route path="groups" element={<Homepage />} />
          <Route path="friends" element={<FriendRequest />} />
          <Route path="profile" element={<ProfileNav />}>
            <Route path="" element={<Post />} />
            <Route path="about" element={<About />} />
            <Route path="friends" element={<Friends />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          <Route path="userprofile" element={<UserProfileNav />}>
            <Route path="" element={<UserPost />} />
            <Route path="about" element={<UserAbout />} />
            <Route path="photos" element={<UserPhotos />} />
          </Route>
        </Route>

        <Route path="/bkwas" element={<Bkwas />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};
