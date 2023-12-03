import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import desktop from "../../images/yumbyamna.jpg"
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchItem from "../../components/searchItem/SearchItem";

import "./prodsearch.css"

export const ProdSearch = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleButtonClick = () => {
    setIsDivVisible(!isDivVisible);
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

  // Access the state data
  const { pageTitle } = location.state || {};

  return (
    <>
        <Navbar/>
        <body className="min-vh-100">
            <div className="row mt-4 mt-lg-5 ps-lg-5 container-lg-fluid justify-content-center">
              
              {/* Filter Button Toggle */}
              <div className="row container-fluid d-lg-none justify-content-end col-11 pb-3">
                <div className="text-center col-3 col-sm-2 btn border-0" onClick={handleButtonClick} >
                  <p className="d-inline pe-1">Filter</p>
                  <icon className=" bi-filter"/>
                </div>
              </div>

              {/* Filter Section */} 
              <div className={`col-11 col-md-10 col-lg-3 filter d-lg-flex row bg-dark bg-opacity-50 shadow rounded-4 align-content-start d-flex overflow-y-auto hidden-scrollbar pb-3 filter-position ${isDivVisible ? '' : 'd-none'}`} style={{height: "80vh",backdropFilter: "blur(20px)",WebkitBackdropFilter: "blur(20px)"}}>
                  <div className="my-3 col-6">
                  <h5 className="text-white">Filter</h5>
                  </div>
                  <div className="col-6 text-end my-3">
                    <icon className= {`text-white fs-5 btn border-0 p-0  ${windowWidth >= 992 ? 'bi-filter' : 'bi-x-lg'}`} onClick={handleButtonClick}/>
                  </div>
                  {/* Used */}
                  <div className="col-12">
                        <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
                        <label className="btn btn-outline-warning py-0 px-1" for="btncheck1"><icon className=" bi-check"/></label>
                        <p className="text-white d-inline ps-2">Used</p>
                  </div>
                  {/* New */}
                  <div className="col-12 pt-2">
                        <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
                        <label className="btn btn-outline-warning py-0 px-1" for="btncheck2"><icon className=" bi-check"/></label>
                        <p className="text-white d-inline ps-2">New</p>
                  </div>
                  {/* Price */}
                  <div className="col-12">
                      <label for="customRange1" className="form-label text-white mb-0 pb-2">Price</label>
                      <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">From</span>
                        <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                      </div>
                      <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">To</span>
                        <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                      </div>
                  </div>
                  {/* Memory */}
                  <div class="container">
                    <div class="row text-white">
                      <div class="col pb-2 text-start">
                        Memory
                      </div>
                    </div>
                    <div class="row text-white gap-2">
                      <div class="col">
                      <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
                      <label className="btn btn-outline-warning py-0 px-1" for="btncheck3">8gb</label>
                      </div>
                      <div class="col">
                      <input type="checkbox" className="btn-check" id="btncheck4" autocomplete="off"/>
                      <label className="btn btn-outline-warning py-0 px-1" for="btncheck4">12gb</label>
                      </div>
                      <div class="col">
                      <input type="checkbox" className="btn-check" id="btncheck5" autocomplete="off"/>
                      <label className="btn btn-outline-warning py-0 px-1" for="btncheck5">32gb</label>
                      </div>
                      <div class="col">
                      <input type="checkbox" className="btn-check" id="btncheck6" autocomplete="off"/>
                      <label className="btn btn-outline-warning py-0 px-1" for="btncheck6">64gb</label>
                      </div>
                      <div class="col">
                      <input type="checkbox" className="btn-check" id="btncheck7" autocomplete="off"/>
                      <label className="btn btn-outline-warning py-0 px-1" for="btncheck7">128gb</label>
                      </div>
                    </div>
                  </div>
                  {/* Location */}
                  <div class="container pt-3">
                    <div class="row text-white">
                      <div class="col pb-2 text-start">
                        Location
                      </div>
                    </div>
                    <div class="btn-group">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                        Pakistan
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item">Pakistan</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item">Karachi</a></li>
                        <li><a class="dropdown-item">Islamabad</a></li>
                        <li><a class="dropdown-item">Lahore</a></li>
                        <li><a class="dropdown-item">Peshawar</a></li>
                        <li><a class="dropdown-item">Sialkot</a></li>
                      </ul>
                    </div>
                  </div>
              </div>

              {/* Cards Section */}
              <div className="col-lg-9 col-10 col-sm-11 justify-content-center ps-0">
                <div className="justify-content-center d-flex pb-4">
                <h2 className="fw-light">Results for <h2 className="d-inline">"{pageTitle}"</h2></h2>
                </div>
              
                  <div className="row justify-content-center p-lg-4 pt-lg-0 pb-3">
                   
                      <div className="col-4 col-sm-3 col-md-3 p-md-0 pe-0 rounded-start-4 ">
                        <img src={desktop} className="rounded-start-4 object-fit-cover h-100 w-100 border-start border-bottom border-top border-black border-1" />
                      </div>
                      <div className="col-8 d-flex flex-column justify-content-between rounded-end-4 bg-light border-end border-bottom border-top border-black border-1">
                      <div className="siDesc">
        <h1 className="siTitle">Xanders</h1>
        <span className="siDistance">Tipu Sultan / E st / Bukhari</span>
        <span className="siFeatures">
          Cafe • Bakery • Fine-Dine
        </span>
        <span className="siCancelOpSubtitle">
          Discounts on Visa Card
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Reviews (80)</span>
          
          <button>8.9</button>
          
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. 1000 - 2000/per</span>
          <span className="siTaxOp">Inclusive of taxes</span>
          <button className="siCheckButton w-50">View Details</button>
        </div>
      </div>
                      </div>
                  </div>
                  <div className="row justify-content-center p-lg-4 pt-lg-0 pb-3">
                  <SearchItem />

                  </div>
                  <div className="row justify-content-center p-lg-4 pt-lg-0 pb-3">
                  <div className="col-4 col-sm-3 col-md-3 p-md-0 pe-0 rounded-start-4 ">
                        <img src={desktop} className="rounded-start-4 object-fit-cover h-100 w-100 border-start border-bottom border-top border-black border-1" />
                      </div>
                      <div className="col-8 d-flex flex-column justify-content-between rounded-end-4 bg-light border-end border-bottom border-top border-black border-1">
                      <div className="siDesc">
        <h1 className="siTitle">Xanders</h1>
        <span className="siDistance">Tipu Sultan / E st / Bukhari</span>
        <span className="siFeatures">
          Cafe • Bakery • Fine-Dine
        </span>
        <span className="siCancelOpSubtitle">
          Discounts on Visa Card
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Reviews (80)</span>
          
          <button>8.9</button>
          
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. 1000 - 2000/per</span>
          <span className="siTaxOp">Inclusive of taxes</span>
          <button className="siCheckButton w-50">View Details</button>
        </div>
      </div>
                      </div>
                  </div>
                  <div className="row justify-content-center p-lg-4 pt-lg-0 pb-3">
                  <div className="col-4 col-sm-3 col-md-3 p-md-0 pe-0 rounded-start-4 ">
                        <img src={desktop} className="rounded-start-4 object-fit-cover h-100 w-100 border-start border-bottom border-top border-black border-1" />
                      </div>
                      <div className="col-8 d-flex flex-column justify-content-between rounded-end-4 bg-light border-end border-bottom border-top border-black border-1">
                      <div className="siDesc">
        <h1 className="siTitle">Xanders</h1>
        <span className="siDistance">Tipu Sultan / E st / Bukhari</span>
        <span className="siFeatures">
          Cafe • Bakery • Fine-Dine
        </span>
        <span className="siCancelOpSubtitle">
          Discounts on Visa Card
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Reviews (80)</span>
          
          <button>8.9</button>
          
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. 1000 - 2000/per</span>
          <span className="siTaxOp">Inclusive of taxes</span>
          <button className="siCheckButton w-50">View Details</button>
        </div>
      </div>
                      </div>
                  </div>
                  <div className="row justify-content-center p-lg-4 pt-lg-0 pb-5">
                  <div className="col-4 col-sm-3 col-md-3 p-md-0 pe-0 rounded-start-4 ">
                        <img src={desktop} className="rounded-start-4 object-fit-cover h-100 w-100 border-start border-bottom border-top border-black border-1" />
                      </div>
                      <div className="col-8 d-flex flex-column justify-content-between rounded-end-4 bg-light border-end border-bottom border-top border-black border-1">
                      <div className="siDesc">
        <h1 className="siTitle">Xanders</h1>
        <span className="siDistance">Tipu Sultan / E st / Bukhari</span>
        <span className="siFeatures">
          Cafe • Bakery • Fine-Dine
        </span>
        <span className="siCancelOpSubtitle">
          Discounts on Visa Card
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Reviews (80)</span>
          
          <button>8.9</button>
          
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. 1000 - 2000/per</span>
          <span className="siTaxOp">Inclusive of taxes</span>
          <button className="siCheckButton w-50">View Details</button>
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