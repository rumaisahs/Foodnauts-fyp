import "./Product.css";
import SlideImage1 from "../../images/xanders.jpg";
import SlideImage2 from "../../images/xanders.jpg";
import SlideImage3 from"../../images/xanders.jpg";
import SellerImg from "../../images/influence.jpeg";
import VerificationBadge from "../../icons/verification-badge.png";
import ProfileIcon from "../../icons/profile-icon.svg";
import PhoneIcon from "../../icons/call-icon.svg";
import ChatIcon from "../../icons/chat-icon.svg";
import Product02 from "../../images/xanders.jpg";
import Product03 from "../../images/xanders.jpg";
import Product04 from "../../images/xanders.jpg";
import Product05 from "../../images/xanders.jpg";
import Product06 from "../../images/xanders.jpg";
import Product07 from "../../images/xanders.jpg";
import Product08 from "../../images/xanders.jpg";
import Product09 from "../../images/xanders.jpg";
import Product10 from "../../images/xanders.jpg";
import Product11 from "../../images/xanders.jpg";
import Product12 from"../../images/xanders.jpg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const Product = () => {
  const scrollableDivRef3 = useRef(null);

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
      
      <body className="min-vh-100">
        {/*Product Images Carousel Section */}
        <div
              id="product-img-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 col-sm-10 py-4">
            <div
              id="product-img-carousel"
              className="carousel slide border rounded-3"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="prod-img d-block w-100 object-fit-cover product-carousel-img rounded-3"
                    src={SlideImage1}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="prod-img d-block w-100 object-fit-cover product-carousel-img rounded-3"
                    src={SlideImage2}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="prod-img d-block w-100 object-fit-cover product-carousel-img rounded-3"
                    src={SlideImage3}
                    alt="Third slide"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#product-img-carousel"
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
                data-bs-target="#product-img-carousel"
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
          <div className="col-lg-2 align-items-center justify-content-center d-flex">
            <div
              id="product-img-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-indicators carousel-indicators-product "
              >
                <img
                  data-bs-target="#product-img-carousel"
                  data-bs-slide-to="0"
                  className="img-thumbnail active  mt-3"
                  aria-current="true"
                  aria-label="Slide 1"
                  src={SlideImage1}
                />
                <img
                  data-bs-target="#product-img-carousel"
                  data-bs-slide-to="1"
                  className="img-thumbnail mt-3"
                  aria-label="Slide 2"
                  src={SlideImage2}
                />
                <img
                  data-bs-target="#product-img-carousel"
                  data-bs-slide-to="2"
                  className="img-thumbnail mt-3"
                  aria-label="Slide 3"
                  src={SlideImage3}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-11 col-md-8 col-sm-10">
            {/* Important Features Section */}

            <div className="imp-features-container row justify-content-center">
              <div className="col-8">
                <div
                  id="prod-price-box"
                  className="highlighted-box d-inline-flex p-2"
                >
                  <p className=" prod-price mb-0 py-2 px-4 fs-4">RS 450,999</p>
                </div>
                <div
                  id="prod-condition-box"
                  className="highlighted-box d-inline-flex p-2"
                >
                  <p className="prod-condition mb-0 py-2 px-4 fs-4">Rental</p>
                </div>
              </div>
              <div className="col-4 share-save-icon">
                <icon className="bi bi-heart fs-2 p-2"/>
                <icon className="bi bi-share-fill fs-2 p-2"/>
              </div>
            </div>

            {/* Product Title Section */}

            <div id="product-title" className="pt-3">
              <h1 className="mb-0">
                Chinese Restaurant
              </h1>
            </div>
            <div id="seller-location" className="py-2">
              <icon className="bi bi-geo-alt-fill fs-3"/>
              <h4 className="px-2 mb-0"> Karachi-Pakistan</h4>
            </div>

            {/* Product Details Section */}

            <div id="prod-details-section" className="section-container bg-light">
              <h2 className="section-title mt-2">Property Details</h2>
              <div className="row justify-content-center mt-4 mt-0">
                <div className="col-12 col-sm-10 col-md-8">
                  <div className="row justify-content-center">
                    <div className="col-3 details-items">
                      <p>Furnished</p>
                      <p>Condition</p>
                      <p>Area Unit</p>
                    </div>
                    <div className="col-3">
                      <p>Yes</p>
                      <p>09/10</p>
                      <p>100</p>
                    </div>
                    <div className="col-3 details-items">
                      <p>Type</p>
                      <p>Condition</p>
                      <p>100</p>
                    </div>
                    <div className="col-3">
                      <p>Chinese</p>
                      <p>09/10</p>
                      <p>100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Description Section */}

            <div id="prod-desc-section" className="section-container">
              <h2 className="section-title mt-2">Property Description</h2>

              <div className="row justify-content-center">
                <div className="col-10">
                  <p className="my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam quis leo consectetur justo bibendum euismod. In
                    vestibulum lorem sit amet justo molestie, eu elementum
                    ligula accumsan. Sed venenatis efficitur velit. Ut eget
                    finibus ante. Etiam dolor eros, volutpat vitae ex sed,
                    mattis tincidunt nisi. Proin aliquam pulvinar neque, non
                    feugiat dui. Proin fringilla orci vitae ullamcorper luctus.
                  </p>
                </div>
              </div>
            </div>

            {/* Seller Info Section */}

            <div className="section-container bg-light justify-content-center">
              <h2 className="section-title pt-2">Seller Information</h2>

              <div className="row justify-content-center py-4">
                <div className="col-12 col-xl-3 col-md-4 text-center">
                  <img
                    className="seller-img rounded-circle object-fit-cover"
                    src={SellerImg}
                    alt=".."
                  />
                </div>
                <div className="col-12 col-xl-4 col-md-7 text-center">
                  <h3 className="pt-3">Marques Brownlee</h3>
                  <p className="verification-tag">
                    Verified Seller{" "}
                    <img
                      src={VerificationBadge}
                      alt="verification-badge"
                      width="25px"
                    />
                  </p>
                  <p>Member since 2023</p>
                </div>
              </div>

              {/* Seller Contact Buttons Section */}

              <div className="row justify-content-center pb-3">
                <Link to="/profile" className="text-decoration-none d-contents">
                  <button
                    type="button"
                    className="btn bg-orange text-white col-8 col-sm-6 col-md-5 col-lg-3 mx-3 my-2"
                  >
                    <img className="btn-icon" src={ProfileIcon} alt="" />
                    View Profile
                  </button>
                </Link>

                <button
                  type="button"
                  className="btn bg-orange text-white col-8 col-sm-6 col-md-5 col-lg-3 mx-3 my-2"
                >
                  <Link to="/chat" className="text-decoration-none text-white">
                    <img className="btn-icon" src={ChatIcon} alt="" />
                    Chat
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn bg-orange text-white col-8 col-sm-6 col-md-5 col-lg-3 mx-3 my-2"
                >
                  <img className="btn-icon" src={PhoneIcon} alt="" />
                  <a
                    className=" text-decoration-none text-white"
                    href={`tel:03129238226`}
                  >
                    Show Number
                  </a>
                </button>
              </div>
            </div>

            {/* <div className="col-10">
              <button type="button" className="btn btn-primary col-8 col-sm-4 mx-3 my-1"><img className="btn-icon" src={ProfileIcon} alt=""/>View Profile</button>
              <button type="button" className="btn btn-primary col-8 col-sm-4 mx-3 my-1"><img className="btn-icon" src={ChatIcon} alt=""/>Chat</button>
              <button type="button" className="btn btn-primary col-8 col-sm-4 mx-3 my-1"><img className="btn-icon" src={PhoneIcon} alt=""/>Show Number</button>
            </div> */}

          </div>
          {/* RECOMMENDED PRODUCTS*/}
          <div className="row justify-content-center py-5">
            <div className="col-1 d-none d-sm-flex align-items-center justify-content-center">
              <icon
                className="bi-chevron-left btn fs-1 text-orange border-0"
                onClick={() => scrollCardWidth(scrollableDivRef3, "left")}
              />
            </div>
            <div className="col-11 col-md-8 col-sm-10 bg-light rounded-3 p-4">
              <h2 className="section-title mb-4">Similar Products</h2>
              <div
                ref={scrollableDivRef3}
                className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto pe-4 hidden-scrollbar pb-1"
              >
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="card shadow-sm">
                    <img
                      src={Product02}
                      className="card-img-top r-card-height"
                      alt="img-name"
                    />
                    <div className="py-2 card-body">
                      <h5 className="card-title text-truncate fs-5">
                        SecretLab Gaming Chair The Batman Edition
                      </h5>
                      <p className="card-text text-truncate mb-0 text-orange">
                        Rs. 45,000
                      </p>
                      <p className="card-text text-truncate mb-0 text-muted">
                        Karachi, Sindh <icon className=" bi-geo-alt-fill" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="card shadow-sm ">
                    <img
                      src={Product03}
                      className="card-img-top r-card-height"
                      alt="img-name"
                    />
                    <div className="py-2 card-body">
                      <h5 className="card-title text-truncate fs-5">
                        NVIDIA GeForce RTX 3070Ti 8 GB Founders Edition
                      </h5>
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
                      <p className="card-text text-truncate mb-0 text-orange">
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
            <div className="col-1 d-none d-sm-flex align-items-center justify-content-center">
              <icon
                className="bi-chevron-right btn fs-1 text-orange border-0"
                onClick={() => scrollCardWidth(scrollableDivRef3, "right")}
              />
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default Product;
