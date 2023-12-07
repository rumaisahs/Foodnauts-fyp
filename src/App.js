import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
  BrowserRouter
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
import Profile from "./pages/UserProfile/Profile";
import ProdSearch from "./pages/ProdSearch/ProdSearch";
import MyBlogs from "./pages/myblogs/myblogs";
import { AddProduct } from "./pages/AddProduct/addproduct";
import { GetTokenLocalStorage } from "./services/localStorage/localStorage";
import SideBar from "./components/sideBar/SideBar";
import OwnProfileP from "./pages/prof/OwnProfilePage";
import Navbar from "./components/navbar/Navbar";

function App() {


  const AuthRoute = () => {
    const token = GetTokenLocalStorage()

    return (
      token ? <Navigate to='/' /> : <Outlet />
    )
  }

  const ProtectedRoute = () => {
    const token = GetTokenLocalStorage()

    return (
      token ? <Outlet /> : <Navigate to='/' />
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route  path="/" element={<><Navbar /><Outlet /></>}> 

          <Route  path="/" element={<><SideBar /><Outlet /></>}> 
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/prof" element={<Profile />} />

          <Route element={<ProtectedRoute />}>
            {/* <Route path="/listt" element={<List />} /> */}
            <Route path="/restaurants/:id" element={<Restaurant />} />
            {/* <Route path="/sidebar" element={<SideBar />} /> */}
            <Route path="/community" element={<FoodCommunity />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/market" element={<Market />} />
            <Route path="/product" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/list" element={<ProdSearch />} />
            <Route path="/myblog" element={<MyBlogs />} />
            <Route path="/addrestaurant" element={<AddProduct />} />
            <Route path="/ownprofile/:id" element={<OwnProfileP />} />
            </Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;