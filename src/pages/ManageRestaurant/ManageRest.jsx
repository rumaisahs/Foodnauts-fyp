import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Listings.css";
import PageNav from "../../components/PageNav";
import { getRestaurant } from "../../services/restaurants";
import { GetAllCuisine } from "../../services/cuisine";
import { GetAllAmbience } from "../../services/ambience/ambience";
import AddRestaurantModal from "../../components/AddRest/AddRestaurantModal";
import Img from "../../images/colette.jpg";

const ManageRest = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [cuisine, setCuisine] = useState([]);
  const [selectCuisine, setSelectCuisine] = useState([]);
  const [ambience, setAmbience] = useState([]);
  const [selectAmbience, setSelectAmbience] = useState([]);
  const [selectRes, setSelectRes] = useState("");

  const getAllRestaurants = async () => {
    try {
      let query = {
        name: search == "" ? undefined : search,
        cuisine_type: selectCuisine,
        ambience_type: selectAmbience,
      };
      if (selectRes == "id") {
        query["id"] = search;
        delete query["name"];
      }
      if (selectRes == "name") query["name"] = search;
      let res = await getRestaurant(query);
      setRestaurant(res?.data?.data);
    } catch (e) {
      console.log(e.message);
    }
  };
console.log(restaurant)
  const getAllCuisine = async () => {
    try {
      let res = await GetAllCuisine();
      setCuisine(res?.data?.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getAllAmbience = async () => {
    try {
      let res = await GetAllAmbience();
      setAmbience(res?.data?.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  
  useEffect(() => {
    getAllRestaurants();
    getAllCuisine();
    getAllAmbience();
  }, [search, selectCuisine, selectAmbience]);

  const getImageUrl = (filename) => {
    const serverUrl = "http://localhost:4000";
    console.log( `${serverUrl}/${filename}`)
    return `${serverUrl}${filename}`;
  };

  return (
    <div className="container ">
      {/*Page Title */}
      <div className="row">
        <h1 className="fw-bold p-4">Manage my Restaurants</h1>
        <hr />
        <div className="d-flex mb-3">
          <h6 className="me-5">Total Listings: 0</h6>
     
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-8 col-xxl-6 d-flex pe-0">
            <input
              type="keyword"
              class="form-control text-dark user-search-box"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Enter Keyword"
              style={{ width: "100%" }}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
          {/*<div className="col-3">*/}
          {/*    <button className="btn button text-light">Search</button>*/}
          {/*</div>*/}
        </div>
        <hr />

        {/*Filter Section*/}
        <h3 className="fw-bold pb-2">Filters</h3>

        <div className="row align-items-center mb-3">
          <div className="col-1 me-2">
            <h6 className="mb-0 me-3">Restaurant: </h6>
          </div>
          <div className="col-3 col-xxl-2 d-flex align-items-center">
            <select
              class="form-select search-select"
              onChange={(e) => setSelectRes(e.target.value)}
            >
              <option value={""}>--Select--</option>
              <option value="id"> ID</option>
              <option value="name"> Name</option>
            </select>
          </div>
          <div className="col-4 col-xxl-3 d-flex align-items-center">
            <input
              type="keyword"
              class="form-control text-dark user-search-box"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Enter Keyword"
              style={{ width: "100%" }}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row align-items-center mb-3">
          <div className="col-1 col-xxl-1 me-2">
            <h6 className="mb-0 me-3 text-xxl-wrap">Ambience: </h6>
          </div>
          <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
            <select
              class="form-select search-select"
              onChange={(e) => setSelectAmbience(e.target.value)}
            >
              <option value={""}>--Select--</option>
              {ambience.length > 0 &&
                ambience.map((dt) => {
                  return <option value={dt?._id}>{dt?.name}</option>;
                })}
            </select>
          </div>
          <div className="col-1">
            <h6 className="mb-0">Cuisine-Type: </h6>
          </div>
          <div className="search-section col-3 col-xxl-2 d-flex align-items-center">
            <select
              class="form-select search-select"
              onChange={(e) => setSelectCuisine(e.target.value)}
            >
              <option value={""}>--Select--</option>
              {cuisine.length > 0 &&
                cuisine.map((dt) => {
                  return <option value={dt?._id}>{dt?.name}</option>;
                })}
            </select>
          </div>
        </div>
        <div>
          {/* <button className="btn button btn-sm text-light">
            <Link to="/addrestaurant">Add Restaurant</Link>
          </button> */}
          <AddRestaurantModal getAllRestaurants={getAllRestaurants} />
        </div>
        {/*Table Section*/}
        <table className="table table-hover my-4">
          <thead className="table-dark">
            <tr>
              <th className="col-1" scope="col">
                Thumbnail
              </th>
              
              <th className="col-1" scope="col">
                Name
              </th>
              <th className="col-1" scope="col">
                Location
              </th>
              <th className="col-1" scope="col">
                Ambience
              </th>
              <th className="col-1" scope="col">
                Cuisine
              </th>
              <th className="col-1" scope="col">
                User Name
              </th>
              <th className="col-1" scope="col">
                Reviews
              </th>
              <th className="col-1" scope="col">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
        
            {restaurant?.length > 0 &&
              restaurant?.map((dt) => {
                {console.log("Location",dt.images)}
                return (
                  <tr>
                    {console.log("dt",dt)}
                    <td>
                      <div
                        className="fixed-size-container"
                        style={{ width: "120px", height: "120px" }}
                      >
                        <img
                          src={getImageUrl(dt?.images[0])}
                          className="object-fit-cover w-100 h-100"
                          alt="review-img"
                        />
                      </div>
                    </td>
                    <td className="">{dt?.name}</td>
                    <td>{dt?.address}</td>
                    <td>{dt?.ambience_type?.name}</td>
                    <td>{dt?.cuisine_type?.name}</td>
                    <td>{dt?.created_by?.username}</td>
                    <td>{dt?.reviews?.length}</td>
                    <td>
                      <a
                        // href={`/view-listing/${dt?._id}`}
                        className="btn button btn-sm text-orange"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <PageNav />
      </div>
    </div>
  );
};

export default ManageRest;
