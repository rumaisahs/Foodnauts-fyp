import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageNav from "../../components/PageNav";
import { getRestaurant } from "../../services/restaurants";
import { GetAllCuisine } from "../../services/cuisine";
import { GetAllAmbience } from "../../services/ambience/ambience";
import Img from "../../images/colette.jpg";

function AllRestaurants() {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [budgetMin, setBudgetMin] = useState(200);
  const [budgetMax, setBudgetMax] = useState(500);
  const [restaurant, setRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [cuisine, setCuisine] = useState([]);
  const [selectCuisine, setSelectCuisine] = useState([]);
  const [ambience, setAmbience] = useState([]);
  const [selectAmbience, setSelectAmbience] = useState([]);
  const [selectRes, setSelectRes] = useState("");
  let navigate = useNavigate();

  const handleButtonClick = () => {
    setIsDivVisible(!isDivVisible);
  };

  const handleBudgetChange = (event) => {
    setBudgetMin(event.target.value.split(",")[0]);
    setBudgetMax(event.target.value.split(",")[1]);
  };

  const getAllRestaurants = async () => {
    try {
      let query = {
        name: search === "" ? undefined : search,
        cuisine_type: selectCuisine,
        ambience_type: selectAmbience,
      };

      if (selectRes === "id") {
        query["id"] = search;
        delete query["name"];
      }
      if (selectRes === "name") query["name"] = search;

      let res = await getRestaurant(query);
      setRestaurant(res?.data?.data);
    } catch (e) {
      console.log(e.message);
    }
  };

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

  const getImageUrl = (filename) => {
    const serverUrl = "http://localhost:4000";
    return `${serverUrl}${filename}`;
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getAllRestaurants();
    getAllCuisine();
    getAllAmbience();
  }, [search, selectCuisine, selectAmbience]);

  return (
    <>
      <body className="container justify-content-end row min-vh-100 ms-auto">
        <div className="row col-11 mt-4 mt-lg-5 ps-lg-5 container-lg-fluid justify-content-center">
          {/* Filter Section */}
          <div
            className={`col-11 col-md-10 col-lg-3 filter d-lg-flex row bg-light-orange shadow rounded-4 align-content-start d-flex overflow-y-auto hidden-scrollbar pb-3 filter-position ${
              isDivVisible ? "" : "d-none"
            }`}
            style={{
              height: "80vh",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="my-3 col-6">
              <h5 className="">Filter</h5>
            </div>
            <div className="col-6 text-end my-3">
              <i
                className={` fs-5 btn border-0 p-0 ${
                  windowWidth >= 992 ? "bi bi-filter" : "bi bi-x-lg"
                }`}
                onClick={handleButtonClick}
              ></i>
            </div>
                {/* Budget Range */}
                <div className="col-12">
              <label htmlFor="budgetRange" className="form-label  mb-0 pb-2">
                Budget
              </label>
              <div className="mb-2">
                <small>Min: {budgetMin}</small>
                <small className="float-end">Max: {budgetMax}</small>
              </div>
              <input
                type="range"
                className="form-range"
                id="budgetRange"
                min="200"
                max="500"
                value={`${budgetMin},${budgetMax}`}
                onChange={handleBudgetChange}
              />
            </div>
            <div className="col-12 pt-2">
            <select
              class="form-select search-select"
              onChange={(e) => setSelectRes(e.target.value)}
            >
              <option value={""}>--Select--</option>
              <option value="id"> ID</option>
              <option value="name"> Name</option>
            </select></div>
            {/* Cuisine Type Dropdown */}
            <div className="col-12 pt-2">
              <label htmlFor="cuisineType" className="form-label  mb-0 pb-2">
                Cuisine Type
              </label>
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
                 {/* Ambience Dropdown */}
                 <div className="col-12 pt-2">
              <label htmlFor="ambience" className="form-label  mb-0 pb-2">
                Ambience
              </label>
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
                {/* Location & City Dropdowns */}
                <label className="form-label  mb-0 pb-2">Location</label>
            <div className="location position-relative row">
              <div className="col-7 pe-0">
                <select
                  className="form-select"
                  id="area"
                  data-bs-auto-close="true"
                >
                  <option value="4">Gulistan-e-jauhar</option>
                  <option value="5">DHA</option>
                  <option value="6">Gulshan</option>
                </select>
              </div>
              <div className="city col-5 px-0 ">
                <select
                  className="form-select"
                  id="city"
                  data-bs-auto-close="true"
                >
                  <option value="4">Karachi</option>
                  <option value="5">Lahore</option>
                  <option value="6">KPK</option>
                </select>
              </div>
            </div>
             {/* Discounts Dropdown */}
             <div className="col-12 pt-2">
              <label htmlFor="discounts" className="form-label  mb-0 pb-2">
                Discounts
              </label>
              <select className="form-select" id="discounts">
                <option value="7">10% off HBL Platinum</option>
                <option value="8">20% off Alfalah</option>
                <option value="9">30% off Faisal</option>
              </select>
            </div>
           
            {/* ... (existing filter content remains the same) */}
          </div>

          {/* Cards Section */}
          <div className="col-lg-9 col-12 col-sm-12 ps-5">
            <div className="text-center d-block pb-4">
              <h2 className="fw-light">
                Restaurants
              </h2>
           <div className="col-4 col-xxl-3 d-flex mx-auto align-items-center justify-content-center">
             <input
              type="keyword"
              class="form-control text-dark user-search-box"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Search Restaurant"
              style={{ width: "100%" }}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            </div>
            </div>    
        
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 container">
            
              {restaurant?.length > 0 &&
                restaurant?.map((dt) => (
                  <div key={dt?._id} className="col mb-4">
                    <div className="card position-relative" style={{ width: "14rem", height: "20rem" }}>
                      <Link to={`/restaurants/${dt?._id}`}>
                        <img
                          src={getImageUrl(dt?.images[0])}
                          alt=""
                          className="rounded-5 card-img-top"
                        />
                        <div
                          className="card-body position-absolute bg-light rounded-4 bg-opacity-75 border border-2 w-100 text-black"
                          style={{
                            bottom: "0",
                            left: "0",
                            right: "0",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                          }}
                        >
                          <h5 className="card-title fs-5 ">{dt?.name}</h5>
                          <p className="fpAddress text-grey">
                            <i className="bi bi-geo-alt-fill pe-1" />
                            {dt?.address}
                          </p>
                          <p className="fpAmbience d-inline pe-1 card-text text-grey">
                            {dt?.cuisine_type?.name}
                          </p>
                          <p className="fpAmbience d-inline pe-1 card-text text-grey">.</p>
                          <p className="fpCuisine d-inline card-text text-grey">
                            {dt?.ambience_type?.name}
                          </p>
                          <p className="fpPrice d-inline card-text">$$$</p>
                          <div className="fpRating mt-2">
                            <span className="text-grey">{`Reviews: ${
                              dt?.reviews?.length
                            }`}</span>
                          </div>
                        </div>
                      </Link>
                    </div>     
                
                  </div>
                ))}    
               <PageNav />
            </div>
          </div>
        </div>
    

      </body>
    </>
  );
}

export default AllRestaurants;
