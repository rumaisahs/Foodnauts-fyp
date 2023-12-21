import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
// import SideBar from "./components/sidebar/SideBar";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import FoodCommunity from "./pages/foodCommunity/foodCommunity";
import EditProfile from "./pages/EditProfile/EditProfile";
import Market from "./pages/Market/Market";
import Product from "./pages/Products/Product";
import ProdSearch from "./pages/ProdSearch/ProdSearch";
import MyBlogs from "./pages/myblogs/myblogs";
import { GetTokenLocalStorage } from "./services/localStorage/localStorage";
import SideBar from "./components/sideBar/SideBar";
import OwnProfile from "./pages/prof/OwnProfilePage";
import Navbar from "./components/navbar/Navbar";
import AllRestaurants from "./pages/allrestaurants/AllRestaurants";
import Verification from "./pages/Verification/ProfileVerification";
import ManageRest from "./pages/ManageRestaurant/ManageRest";
import MyGigs from "./pages/MyGigis/MyGigs";
import Profile from "./pages/UserProfile/Profile";

function App() {
  const AuthRoute = () => {
    const token = GetTokenLocalStorage();

    return token ? <Navigate to="/" /> : <Outlet />;
  };

  const ProtectedRoute = () => {
    const token = GetTokenLocalStorage();

    return token ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route
              path="/"
              element={
                <>
                  <SideBar />
                  <Outlet />
                </>
              }
            >
              <Route element={<AuthRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>

              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/restaurants/:id" element={<Restaurant />} />
              <Route path="/community" element={<FoodCommunity />} />
              <Route path="/list" element={<ProdSearch />} />
              <Route path="/market" element={<Market />} />
              <Route path="/allrest" element={<AllRestaurants />} />

              <Route element={<ProtectedRoute />}>
                {/* <Route path="/listt" element={<List />} /> */}
                {/* <Route path="/sidebar" element={<SideBar />} /> */}
                <Route path="/editProfile" element={<EditProfile />} />
                <Route path="/product" element={<Product />} />
                <Route path="/myblog" element={<MyBlogs />} />
                <Route path="/managerest" element={<ManageRest />} />
                <Route path="/ownprofile" element={<OwnProfile />} />
                <Route path="/verify" element={<Verification />} />
                <Route path="/mygigs" element={<MyGigs />} />
                <Route path="/profile/:userId" element={<Profile />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
