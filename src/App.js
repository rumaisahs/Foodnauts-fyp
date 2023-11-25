import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import {
   BrowserRouter as Router,
  Routes, 
  Route 
} from "react-router-dom";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import List from "./pages/link/List";
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
function App() {
  return (
    <>
    <Router>
      <Routes>
        
        <Route  path="/" element={<Home/>}/>
        <Route  path="/list" element={<List/>}/>
        <Route  path="/restaurants/:id" element={<Restaurant/>}/>
        {/* <Route  path="/sidebar" element={<SideBar/>}/> */}
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<SignUp/>}/>
        <Route  path="/ownprofile" element={<Profile/>}/>
        <Route  path="/community" element={<FoodCommunity/>}/>
        <Route  path="/editProfile" element={<EditProfile/>}/>
        <Route  path="/market" element={<Market/>}/>
        <Route  path="/product" element={<Product/>}/>
        <Route  path="/profile" element={<Profile/>}/>
        <Route  path="/prodsearch" element={<ProdSearch/>}/>
        <Route  path="/myblog" element={<MyBlogs/>}/>


      </Routes>
    </Router>
    </>
  );
}

export default App;