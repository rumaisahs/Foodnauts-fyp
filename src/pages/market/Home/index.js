import Header from "../../components/header";
import Footer from "../../components/footer";
import GPU from "../../images/gpu-img-4.jpeg";
import Laptop from "../../images/laptops.webp";
import NZXT from "../../images/nzxt.jpeg";
import Viper from "../../images/viper.jpeg";
import Seller from "../../images/seller-img.jpg";
import Buyer from "../../images/buyer-img.jpeg";
import Product04 from "../../images/products/prod-04.jpg";
import Product05 from "../../images/products/prod-05.jpg";
import Product06 from "../../images/products/prod-06.jpg";
import Product07 from "../../images/products/prod-07.jpg";
import Product08 from "../../images/products/prod-08.jpg";
import Product09 from "../../images/products/prod-09.jpg";
import Product10 from "../../images/products/prod-10.jpg";
import Product11 from "../../images/products/prod-11.jpg";
import Product12 from "../../images/products/prod-12.jpg";
import CarouselImg3 from "../../images/carousel-img-3.jpg";
import CarouselImg2 from "../../images/carousel-img-2.jpg";
import RAM from "../../images/ram.png";
import Mouse from "../../images/mouse.jpeg";
import Keyboard from "../../images/keyboard.jpg";
import Motherboard from "../../images/motherboard.jpg";
import AboutUs from "../../images/aboutus-img.png"
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import 'animate.css';
import { useInView } from "react-intersection-observer";

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

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const [animateView, setAnimateView] = useState(false);

  const [animateViewRef, animateViewInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Change the threshold to 0.5 (50%)
  });

  React.useEffect(() => {
    if (animateViewInView) {
      setAnimateView(true);
    }
  }, [animateViewInView]);

  return (
    <>
      <Header />
      <body className=" min-vh-100 pt-0">
        {/* Main Carousel */}
        <div className="row justify-content-center d-flex py-5">
          <div className="col-10">
            <div
              id="mainCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators top-100 pt-4">
                <button
                  type="button"
                  data-bs-target="#mainCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#mainCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#mainCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="image-overlay">
                    <img
                      src={GPU}
                      className="d-block w-100 rounded-5 object-fit-cover main-carousel-img"
                      alt="gpu-img"
                    />
                    <div className="overlay-text rounded-5">
                      <h1 className="fw-bold fs-3 text-start p-5">
                      {message}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                <div className="image-overlay">
                    <img
                      src={CarouselImg2}
                      className="d-block w-100 rounded-5 object-fit-cover main-carousel-img"
                      alt="gpu-img"
                    />
                    <div className="overlay-text rounded-5">
                      <h1 className="fw-bold fs-3 text-start p-5 text-uppercase">
                        Broader Market reach
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="image-overlay">
                    <img
                      src={CarouselImg3}
                      className="d-block w-100 rounded-5 object-fit-cover main-carousel-img"
                      alt="gpu-img"
                    />
                    <div className="overlay-text rounded-5">
                      <h1 className="fw-bold fs-3 text-start p-5 text-uppercase">
                        No more hassle to go to shops, just search online
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="row justify-content-center pt-4">
          <div className="col-1 d-none d-sm-flex align-items-center justify-content-center">
            <icon
              className="bi-chevron-left btn fs-1 text-purple border-0"
              onClick={() => scrollCardWidth(scrollableDivRef1, "left")}
            />
          </div>
          <div className="col-12 col-sm-10 bg-light rounded-3 p-4">
            <h1 className="text-black text-start pb-4 fs-3">Categories</h1>
            <div
              ref={scrollableDivRef1}
              className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto pe-4 hidden-scrollbar pb-1"
            >
              <div className="col-lg-3 col-md-4 col-6">
                <Link
                  to={{
                    pathname: "/prodsearch",
                    state: { pageTitle: "Laptop" },
                  }} className=" text-decoration-none"
                >
                  <div className="card shadow-sm card-aspect">
                    <img
                      src={Laptop}
                      className="card-img-top h-75"
                      alt="img-name"
                    />
                    <div className="py-2 card-body-align px-3 justify-content-center d-flex align-items-center">
                      <h5 className="card-title text-center text-truncate mb-0 ">
                        Laptop
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm card-aspect">
                  <img src={GPU} className="card-img-top h-75" alt="img-name" />
                  <div className="py-2 card-body-align px-3 justify-content-center d-flex align-items-center">
                    <h5 className="card-title text-center text-truncate mb-0 ">
                      GPU
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm card-aspect">
                  <img src={RAM} className="card-img-top h-75" alt="img-name" />
                  <div className="py-2 card-body-align px-3 justify-content-center d-flex align-items-center">
                    <h5 className="card-title text-center text-truncate mb-0 ">
                      Ram
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm card-aspect">
                  <img
                    src={Mouse}
                    className="card-img-top h-75"
                    alt="img-name"
                  />
                  <div className="py-2 card-body-align px-3 justify-content-center d-flex align-items-center">
                    <h5 className="card-title text-center text-truncate mb-0 ">
                      Mouse
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm card-aspect">
                  <img
                    src={Keyboard}
                    className="card-img-top h-75"
                    alt="img-name"
                  />
                  <div className="py-2 card-body-align px-3 justify-content-center d-flex align-items-center">
                    <h5 className="card-title text-center text-truncate mb-0 ">
                      Keyboard
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="card shadow-sm card-aspect">
                  <img
                    src={Motherboard}
                    className="card-img-top h-75"
                    alt="img-name"
                  />
                  <div className="py-2 card-body-align px-3 justify-content-center d-flex align-items-center">
                    <h5 className="card-title text-center text-truncate mb-0 ">
                      Motherboard
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-none d-sm-flex align-items-center justify-content-center">
            <icon
              className="bi-chevron-right btn fs-1 text-purple border-0"
              onClick={() => scrollCardWidth(scrollableDivRef1, "right")}
            />
          </div>
        </div>

        {/* RECOMMENDED PRODUCTS*/}
        <div className="row justify-content-center py-5">
          <div className="col-1 align-items-center d-none d-sm-flex justify-content-center">
            <icon
              className="bi-chevron-left btn fs-1 text-purple border-0"
              onClick={() => scrollCardWidth(scrollableDivRef2, "left")}
            />
          </div>
          <div className="col-12 col-sm-10 bg-light rounded-3 p-4">
            <h1 className="text-black text-start pb-4 fs-3">
              Recommended Products
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
                        NZXT H510
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
                      Razer Viper Ultimate Cyberpunk 2077 Edition Wireless
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
                      Asus TUF VG27AQ 27" IPS 165Hz Gaming Monitor
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
                      Dell Alienware AW988 Wireless Gaming Headset
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
                      Macbook Air Midnight Blue M2 13.6" 2TB SSD
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
                      Samsung 970 EVO Plus M.2 NVMe SSD 1TB
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
                      NZXT Kraken Z63 280mm AIO Liquid Cooler with LCD Screen
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
                      NZXT H510 Elite Mid-Tower Case
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
                      Razer Seiren X Classic Black Gaming Microphone{" "}
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
                      Kingston Fury Beast RGB DDR4 16GB 3200MHz RAM
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
                      MSI B450 Tomahawk Max II Motherboard
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

        <div className="row justify-content-evenly container mx-auto mb-5">
          <div
            className={`bg-purple col-12 col-lg-5 rounded-5 align-items-center bg-lines d-flex animate__animated ${animateView ? "animate__fadeInLeft" : ""}  animate__slower`}
            style={{ height: "500px" }}
            ref={animateViewRef}
          >
            <div>
              <h3
                className="text-white text-center m-5 font-monospace"
                style={{
                  backdropFilter: "blur(1px) saturate(100%)",
                  WebkitBackdropFilter: "blur(1px) saturate(100%)",
                }}
              >
                Are you uncertain about the compatibility of the PC component
                you intend to purchase with your existing components or those
                you plan to acquire?
              </h3>
            </div>
          </div>
          <div className="col-12 col-lg-1 align-items-center d-flex flex-lg-column justify-content-center">
            <icon className="bi-pc-display text-purple fs-1 py-4 px-2 p-lg-0" />
            <icon className="bi-gpu-card text-purple fs-1 py-4 px-2 p-lg-0" />
            <icon className="bi-memory text-purple fs-1 py-4 px-2 p-lg-0" />
            <icon className="bi-hdd-stack-fill text-purple fs-1 py-4 px-2 p-lg-0" />
            <icon className="bi-mouse-fill text-purple fs-1 py-4 px-2 p-lg-0" />
            <icon className="bi-keyboard text-purple fs-1 py-4 px-2 p-lg-0" />
          </div>
          <div
            className={`bg-black col-12 col-lg-5 rounded-5 align-items-center bg-bl-lines d-flex animate__animated ${animateView ? "animate__fadeInRight" : ""}  animate__slower`}
            style={{ height: "500px" }}
            ref={animateViewRef}
          >
            <div>
              <h3
                className="text-white text-center m-5 font-monospace"
                style={{
                  backdropFilter: "blur(1px) saturate(100%)",
                  WebkitBackdropFilter: "blur(1px) saturate(100%)",
                }}
              >
                You can now put your worries to rest because our PCAI is here to
                help you effortlessly assess the compatibility of your PC
                components.
              </h3>
            </div>
          </div>
        </div>

        <div className="row py-5 mb-5">
          <div className="h-auto col-xl-8 col-10 mx-auto rounded-4 bg-light border border-1 shadow-sm">
            <div className="p-5 row position-relative">
              <div className="col-lg-7 col-12 font-monospace">
                <h1 className=" fs-1 fw-bold">ABOUT US</h1>
                <p className="pt-4 fs-6">
                  Welcome to MEGAHERTZ - your ultimate one-stop marketplace for
                  computer enthusiasts all over Pakistan. At MEGAHERTZ, we pride
                  ourselves on providing a seamless platform that brings
                  together buyers and sellers, creating a thriving community of
                  tech enthusiasts.
                </p>
              </div>
              <div className="col-lg-5 col-12 justify-content-center d-lg-flex d-none">
                <img
                  src={AboutUs}
                  className="position-absolute"
                  style={{
                    height: "120%",
                    top: -50,
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default Home;
