import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import desktop from "../../images/influence.jpeg";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fetchData from "../../utils/fetchData";
import axios from 'axios';

// const [restaurants, setRestaurants] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   // Function to fetch data from the API
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/searchRestaurants', {
//         params: {
//           name: 'YourRestaurantName', // Add your search parameters here
//           // Other search parameters...
//         },
//       });

//       setRestaurants(response.data.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Call the function to fetch data
//   fetchData();
// }, []); // The empty dependency array ensures the effect runs only once on mount

// if (loading) {
//   return <p>Loading...</p>;
// };


export const ProdSearch = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [budgetMin, setBudgetMin] = useState(200);
  const [budgetMax, setBudgetMax] = useState(500);
  const handleButtonClick = () => {
    setIsDivVisible(!isDivVisible);
  };
  const handleBudgetChange = (event) => {
    setBudgetMin(event.target.value.split(',')[0]);
    setBudgetMax(event.target.value.split(',')[1]);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const location = useLocation();
 
  const searchQuery = new URLSearchParams(location.search).get('query');
 
  const [searchResults, setSearchResults] = useState([]);
 useEffect(() => {
  const handleSearch = async () => {
    try {
      // Call the fetchData function with the searchQuery
      const data = await fetchData(searchQuery);

      // Update the state with the fetched data
      setSearchResults(data);
      console.log(searchResults)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  
};handleSearch();
},[]);

  // Access the state data
  const { pageTitle } = location.state || {};

  return (
    <>
        <body className="container min-vh-100 ms-auto">
            <div className="row mt-4 mt-lg-5 ps-lg-5 container-lg-fluid justify-content-center">
              
              {/* Filter Button Toggle */}
              <div className="row container-fluid d-lg-none justify-content-end col-11 pb-3">
                <div className="text-center col-3 col-sm-2 btn border-0" onClick={handleButtonClick} >
                  <p className="d-inline pe-1">Filter</p>
                  <icon className=" bi-filter"/>
                </div>
              </div>

              {/* Filter Section */} 
              <div className={`col-11 col-md-10 col-lg-3 filter d-lg-flex row bg-light-orange shadow rounded-4 align-content-start d-flex overflow-y-auto hidden-scrollbar pb-3 filter-position ${isDivVisible ? '' : 'd-none'}`} style={{ height: "80vh", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      <div className="my-3 col-6">
        <h5 className="">Filter</h5>
      </div>
      <div className="col-6 text-end my-3">
        <i className={` fs-5 btn border-0 p-0 ${windowWidth >= 992 ? 'bi bi-filter' : 'bi bi-x-lg'}`} onClick={handleButtonClick}></i>
      </div>
      {/* Budget Range */}
      <div className="col-12">
        <label htmlFor="budgetRange" className="form-label  mb-0 pb-2">Budget</label>
        <div className="mb-2">
          <small>Min: {budgetMin}</small>
          <small className="float-end">Max: {budgetMax}</small>
        </div>
        <input type="range" className="form-range" id="budgetRange" min="200" max="500" value={`${budgetMin},${budgetMax}`} onChange={handleBudgetChange} />
      </div>
      {/* Cuisine Type Dropdown */}
      <div className="col-12 pt-2">
        <label htmlFor="cuisineType" className="form-label  mb-0 pb-2">Cuisine Type</label>
        <select className="form-select" id="cuisineType">
          <option value="1">Italian</option>
          <option value="2">Mexican</option>
          <option value="3">Asian</option>
        </select>
      </div>
      {/* Ambience Dropdown */}
      <div className="col-12 pt-2">
        <label htmlFor="ambience" className="form-label  mb-0 pb-2">Ambience</label>
        <select className="form-select" id="ambience">
          <option value="4">Cozy</option>
          <option value="5">Modern</option>
          <option value="6">Romantic</option>
        </select>
      </div>
          {/* Location & City Dropdowns */}
      <label className="form-label  mb-0 pb-2">Location</label>
      <div className='location position-relative row'>
        <div className='col-7 pe-0'>
        <select className="form-select" id="area" data-bs-auto-close="true">
          <option value="4">Gulistan-e-jauhar</option>
          <option value="5">DHA</option>
          <option value="6">Gulshan</option>
        </select>
        </div>
        <div className='city col-5 px-0 '>
        <select className="form-select" id="city" data-bs-auto-close="true">
          <option value="4">Karachi</option>
          <option value="5">Lahore</option>
          <option value="6">KPK</option>
        </select>
        </div>
      </div>
  
    
      {/* Discounts Dropdown */}
      <div className="col-12 pt-2">
        <label htmlFor="discounts" className="form-label  mb-0 pb-2">Discounts</label>
        <select className="form-select" id="discounts">
          <option value="7">10% off HBL Platinum</option>
          <option value="8">20% off Alfalah</option>
          <option value="9">30% off Faisal</option>
        </select>
      </div>
      <div className="col-12 pt-3">
        <button className="btn btn-dark" onClick={() => alert('Filter Applied')}>Apply</button>
      </div>
    </div>

              {/* Cards Section */}
              <div className="col-lg-9 col-10 col-sm-11 justify-content-center ps-0">
                <div className="justify-content-center d-flex pb-4">
                <h2 className="fw-light">Results for <h2 className="d-inline">"{pageTitle}"</h2></h2>
                </div>
                <div className="row justify-content-center  p-lg-4 pt-lg-0 pb-3">
              <div className="col-4 col-sm-3 col-md-3 p-md-0 pe-0 rounded-start-4">
                <img
                  src={desktop}
                  className="rounded-start-4 object-fit-cover h-100 w-100 border-start border-bottom border-top border-black border-1"
                />
              </div>
              <div className="col-8 d-flex p-4 flex-column  justify-content-center rounded-end-4 bg-light border-end border-bottom border-top border-black border-1">
                <div className="row h-100 ">
                  <div className="col-10">
                    <h5 class=" fs-4 ">Xanders</h5>
                    <p className="fpAddress text-grey">
                      {" "}
                      <i className="bi bi-geo-alt-fill pe-1" />
                      Address
                    </p>
                    {/* <span className="fpAmbience">Cafe</span> */}
                    <p className="fpAmbience d-inline pe-1  text-grey">
                      Ambience
                    </p>
                    <p className="fpAmbience d-inline pe-1 text-grey">.</p>
                    <p className="fpCuisine d-inline text-grey">Cuisine type</p>
                    <p className="fpPrice  pe-1">$$$</p>
                    <div className="fpRating mt-2">
                      <p className=" d-inline pe-1">
                        {" "}
                        <i className="bi bi-star-fill me-1 text-warning" />
                        4.0
                      </p>
                      <span className="text-grey">Review</span>
                    </div>
                    <div>Discounts</div>
                  </div>
                  <div className="col-2 justify-content-end d-flex align-items-center">
                    <button className=" rounded-5  border-1 text-orange bg-transparent px-3 border-orange" style={{height:'200px'}}>
                      <i className="bi bi-chevron-right " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
                      </div>
                  </div>
               
             
            <div className=" justify-content-center align-items-center d-flex pb-5">
                  <icon className="btn btn-link text-black bi-arrow-left pe-4"/>
                  <a className="btn btn-link text-purple py-1 mb-0 px-3 rounded-2 d-inline text-decoration-none">1</a>
                  <a className="btn btn-link text-black py-1 mb-0 px-3 d-inline text-decoration-none">2</a>
                  <a className="btn btn-link text-black py-1 mb-0 px-3 d-inline text-decoration-none">3</a>
                  <icon className="btn btn-link text-black bi-arrow-right ps-4"/>
            </div>
        </body>
        <Footer/>
    </>
  );
};

export default ProdSearch;