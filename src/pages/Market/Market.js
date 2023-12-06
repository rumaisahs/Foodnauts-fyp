import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NZXT from  "../../images/xanders.jpg";
import Viper from  "../../images/xanders.jpg";
import Product04 from "../../images/xanders.jpg";
import Product05 from "../../images/xanders.jpg";
import Product06 from "../../images/xanders.jpg";
import Product07 from "../../images/xanders.jpg";
import Product08 from "../../images/xanders.jpg";
import Product09 from "../../images/xanders.jpg";
import Product10 from "../../images/xanders.jpg";
import Product11 from "../../images/xanders.jpg";
import Product12 from "../../images/xanders.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
//import 'animate.css';
//import { useInView } from "react-intersection-observer";

export const Home = () => {
  const scrollableDivRef1 = useRef(null);
  const scrollableDivRef2 = useRef(null);

  const scrollCardWidth = (scrollableDivRef, direction) => {
    const scrollableDiv = scrollableDivRef.current;

    if (scrollableDiv) {
      const cardWidth = scrollableDiv.querySelector(".card").offsetWidth;
      const scrollAmount = cardWidth * 2 * (direction === "left" ? -1 : 1);
      scrollableDiv.scrollLeft += scrollAmount;
    }
  };

 

  return (
    <>
      
      <body className=" min-vh-100 pt-0">
    

        {/* RECOMMENDED PRODUCTS*/}
        <div className="row justify-content-center py-5">
          <div className="col-1 align-items-center d-none d-sm-flex justify-content-center">
            <icon
              className="bi-chevron-left btn fs-1 text-purple border-0"
              onClick={() => scrollCardWidth(scrollableDivRef1, "left")}
            />
          </div>
          <div className="col-12 col-sm-10 bg-light rounded-3 p-4">
            <h1 className="text-black text-start pb-4 fs-3">
              Recommended Products
            </h1>
            <div
              ref={scrollableDivRef1}
              className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto pe-4 hidden-scrollbar pb-1"
            >
              <div className="col-lg-3 col-md-4 col-6">
                <Link to="/product" className="text-decoration-none">
                  <div className="card shadow-sm">
                    <img
                      src={NZXT}
                      className="card-img-top r-card-height"
                      alt="img-name"
                    />
                    <div className="py-2 card-body">
                      <h5 className="card-title text-truncate fs-5">
                        Waffle Cart
                      </h5>
                      <p className="card-text text-truncate mb-0 text-purple">
                        Rs. 45,000
                      </p>
                      <p className="card-text text-truncate mb-0 text-muted">
                        Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm ">
                  <img
                    src={Viper}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product04}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product05}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product06}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product07}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product08}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product09}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product10}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart{" "}
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product11}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product12}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 align-items-center d-none d-sm-flex justify-content-center">
            <icon
              className="bi-chevron-right btn fs-1 text-purple border-0"
              onClick={() => scrollCardWidth(scrollableDivRef1, "right")}
            />
          </div>
        </div>

        {/* RECOMMENDED PROPERTY*/}
        <div className="row justify-content-center py-5">
          <div className="col-1 align-items-center d-none d-sm-flex justify-content-center">
            <icon
              className="bi-chevron-left btn fs-1 text-purple border-0"
              onClick={() => scrollCardWidth(scrollableDivRef2, "left")}
            />
          </div>
          <div className="col-12 col-sm-10 bg-light rounded-3 p-4">
            <h1 className="text-black text-start pb-4 fs-3">
              Property Ads
            </h1>
            <div
              ref={scrollableDivRef2}
              className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto pe-4 hidden-scrollbar pb-1"
            >
              <div className="col-lg-3 col-md-4 col-6">
                <Link to="/product" className="text-decoration-none">
                  <div className="card shadow-sm">
                    <img
                      src={NZXT}
                      className="card-img-top r-card-height"
                      alt="img-name"
                    />
                    <div className="py-2 card-body">
                      <h5 className="card-title text-truncate fs-5">
                        Chinese Restaurant 
                      </h5>
                      <p className="card-text text-truncate mb-0 text-purple">
                        Rs. 450,000
                      </p>
                      <p className="card-text text-truncate mb-0 text-muted">
                        Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm ">
                  <img
                    src={Viper}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                     Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product04}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Chinese Restaurant 
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 450,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product05}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Chinese Restaurant 
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 450,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product06}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                     Waffle Cart
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product07}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Chinese Restaurant 
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 450,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm">
                  <img
                    src={Product12}
                    className="card-img-top r-card-height"
                    alt="img-name"
                  />
                  <div className="py-2 card-body">
                    <h5 className="card-title text-truncate fs-5">
                    Chinese Restaurant 
                    </h5>
                    <p className="card-text text-truncate mb-0 text-purple">
                      Rs. 45,000
                    </p>
                    <p className="card-text text-truncate mb-0 text-muted">
                      Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 align-items-center d-none d-sm-flex justify-content-center">
            <icon
              className="bi-chevron-right btn fs-1 text-purple border-0"
              onClick={() => scrollCardWidth(scrollableDivRef2, "right")}
            />
          </div>
        </div>

       

   
      </body>
      <Footer />
    </>
  );
};

export default Home;
