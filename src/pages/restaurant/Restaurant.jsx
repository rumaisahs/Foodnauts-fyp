import React from 'react'
import "./restaurant.css";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ReviewImg from "../../images/leave-a-review.png"
import ReviewImg1 from "../../images/review-img-1.png"
import ReviewImg2 from "../../images/review-img-2.png"
import ReviewImg3 from "../../images/review-img-3.png"
import Influencer from "../../images/influence.jpeg"
const Restaurant = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="p-4 container-lg">
          <h2 className=" d-inline">Xanders Cafe</h2>
          <h6 className='text-primary d-inline ps-2'> <icon className="bi-patch-check-fill"/> Verified</h6>
          <span className=' float-end'>
          <p className='d-inline pe-2'>4.5/5</p>
          <icon className="bi-star-fill text-warning" />
          <icon className="bi-star-fill text-warning" />
          <icon className="bi-star-fill text-warning" />
          <icon className="bi-star-fill text-warning" />
          <icon className="bi-star-half text-warning" />
          <p className='text-end'>Reviews(67)</p>
          </span>
          
          <div className="hotelImages pt-2 w-100">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className='row bg-light mt-3 w-100 mx-auto justify-content-center shadow-sm'>
          <button
                  type="button"
                  className="btn col-5 col-sm-4 col-md-3 col-lg-3 mx-3 my-2"
                >
                  <icon className="bi-phone pe-1" />
                  <a
                    className=" text-decoration-none text-black"
                    href={`tel:03129238226`}
                  >
                    (021) 34551096
                  </a>
          </button>
          <button
                  type="button"
                  className="btn col-3 col-sm-3 col-md-3 col-lg-2 mx-3 my-2"
                >
                  <icon className="bi-box-arrow-in-up-left pe-1" />
                  <a
                    className=" text-decoration-none text-black"
                    href={`https://xanders.pk`}
                  >
                    Website
                  </a>
          </button>
          <button
                  type="button"
                  className="btn col-3 col-sm-3 col-md-4 col-lg-2 mx-3 my-2"
                >
                  <icon className=" bi-journal-text pe-1" />
                  <a
                    className=" text-decoration-none text-black"
                    href={`tel:03129238226`}
                  >
                    Menu
                  </a>
          </button>
          <button
                  type="button"
                  className="btn col-1 my-2"
                >
                  <icon className=" bi-facebook pe-1" />
                  <a
                    className=" text-decoration-none text-black"
                    href={`https://www.facebook.com/xanderscafe/`}
                  >
                  </a>
          </button>
          <button
                  type="button"
                  className="btn col-1 my-2"
                >
                  <icon className=" bi-instagram pe-1" />
                  <a
                    className=" text-decoration-none text-black"
                    href={`https://www.instagram.com/xanderscafe/`}
                  >
                  </a>
          </button>
          <button
                  type="button"
                  className="btn col-1 my-2"
                >
                  <icon className=" bi-cart4 pe-1" />
                  <a
                    className=" text-decoration-none text-black"
                    href={`https://www.foodpanda.pk/restaurant/s2gf/xanders`}
                  >
                  </a>
          </button>

          </div>
          <div className='row mt-3 w-100 mx-auto justify-content-between'>
            <div className='col-lg-8 bg-light p-4 shadow-sm'>
              <div className='row'>
                <div className='col-5'>
                <h5>
                  Opening hours
                  <icon className="ps-2 bi-info-circle"/>
                </h5>
                <p>8:00 am - 10:00 pm</p>
                <h5>
                  Cuisine Type
                </h5>
                <p>Italian . Desi . American</p>
                <h5>
                  Ambience
                </h5>
                <p>Fine-Dine</p>
                <h5>
                  Meals
                </h5>
                <p>Breakfast . Lunch . Dinner</p>
                <p>Dine-In . Take-Away . Delivery</p>
              </div>
              <div className='col-7'>
                <h5>
                  Budget
                </h5>
                <p>$$$</p>
                <h5>
                  Discounts
                  <icon className="ps-2 bi-info-circle"/>
                </h5>
                <p>Bogo . HBL . Vouch360 . MCB</p>
                <span className='d-block'>
                <h5 className='d-inline pe-5'>
                  <icon className="pe-2 bi-check-circle" />
                  Hygiene
                </h5>
                <p className='d-inline '>4.5/5</p>
                </span>
                <span className='d-block'>
                <h5 className='d-inline pe-5'>
                  <icon className="pe-2 bi-bell" />
                  Value
                </h5>
                <p className='d-inline '>4.5/5</p>
                </span>
                <span className='d-block'>
                <h5 className='d-inline pe-5'>
                  <icon className="pe-2 bi-bell" />
                  Service
                </h5>
                <p className='d-inline '>4.5/5</p>
                </span>
                <h5 className='pt-3'>
                  Popular Dishes
                </h5>
                <p>Babar's Pasta . Chimichurri Steak . Calamari</p>
              </div>
              </div>
              
            </div>
            <div className='col-lg-4 pt-3 shadow-sm'>
              <h3 className='text-center'>
                Location
              </h3>
              <p className='px-4'>Tipu Sultan Rd. Karachi Memon Co operative Housing Society Jinnah ...</p>
              <span className='justify-content-center d-flex'>
                <iframe className='rounded-4' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115837.64059160984!2d66.99538585575809!3d24.866367693444644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3eb33f25da17cb5f%3A0x78967cb3148c0491!2sTipu%20Sultan%20Rd%2C%20Karachi%20Memon%20Co-operative%20Housing%20Society%20Jinnah%20Housing%20Society%20PECHS%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074200!3m2!1d24.8663903!2d67.07778739999999!5e0!3m2!1sen!2s!4v1698236935806!5m2!1sen!2s" width="350" height="200" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </span>
              <h3 className='p-3 pb-2 mb-0'>Other Branches</h3>
              <p className='px-3 my-0'>Xander's Clifton</p>
              <p className='px-3 my-0 pb-3'>Xander's DHA Bukhari</p>
            </div>

          </div>
          <div className='row bg-light w-100 mx-auto mt-3 p-3'>
              <div className='col-4'>
                <h4>Rate Your <p className='fs-6 mb-0'>Experience</p></h4>
                <span>
                  <icon className="bi-star" />
                <icon className="bi-star" />
                <icon className="bi-star" />
                <icon className="bi-star" />
                <icon className="bi-star" />
                </span>
                

                <h5 className='pt-3 mb-0'>Favourite Dish</h5>
                <input className=' border-0 shadow-sm' placeholder='Type here...' />
                <h5 className='pt-3 mb-0'>Type A Review</h5>
                <input className=' border-0 shadow-sm' type='text' placeholder='Type your review here...' />
              </div>
              <div className='col-4'>
                <h5 className='mb-0'>Upload Image</h5>
                <input className='rounded-5 border-0 shadow-sm' type="img" placeholder='png, jpeg, jpg' />
                <br />
                <br />
                <input className='' type="checkbox" />
                <h5 className='d-inline ps-2'>Hygiene</h5>
                <br />
                <input className='' type="checkbox" />
                <h5 className='d-inline ps-2'>Value</h5>
                <br />
                <input className='' type="checkbox" />
                <h5 className='d-inline ps-2'>Service</h5>
                <h5 className='pt-3'>Would You Visit Again</h5>
                <input type="radio" name="" id="" />
                <p className='d-inline ps-1 pe-3'>Yes</p>
                <input type="radio" name="" id="" />
                <p className='d-inline ps-1'>No</p>
              </div>
              <div className='col-4 text-center'>
                <img className='w-75' src={ReviewImg} alt="leave-a-review.png" />
                <button className='btn btn-dark rounded-4 w-50'>
                  Add a review
                </button>
              </div>
          </div>
          <h1 className='my-3'><icon className="bi-chat-square-dots pe-2"/>Read Reviews</h1>
          <div className='row border rounded-3 border-black border-1 p-3'>
              <div className='col-xl-1 col-sm-2 col-3'>
                <img className='rounded-circle' src={Influencer} alt="" height={100} />
              </div>
              <div className='col-7'>
                <p className='mb-0'>@arshanistan</p>
                <p className=''>Reviewed on 11 june, 2023</p>
                <p>
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem ipsum dolor sit amet, consectetur
adipiscing elit.Qorem ipsum dolor sit amet, consectetur adipiscing elit. Qorem ipsum dolor.
                </p>
                <img className='pe-2 object-fit-contain' src={ReviewImg1} height={130} alt="" />
                <img className='pe-2 object-fit-contain' src={ReviewImg2} height={130} alt="" />
                <img className='pe-2 object-fit-contain' src={ReviewImg3} height={130} alt="" />
              </div>
              <div className='col-3 justify-content-end d-flex'>
                <div>
                  <p className='fs-5 fw-light d-inline pe-2'>4.5/5</p>
                <span>
                  <icon className="bi-star-fill text-warning" />
                  <icon className="bi-star-fill text-warning" />
                  <icon className="bi-star-fill text-warning" />
                  <icon className="bi-star-fill text-warning" />
                  <icon className="bi-star-half text-warning" />
                </span>
                <p className='mb-0'><icon className="bi-check2 pe-2"/>Hygiene</p>
                <p className='mb-0'><icon className="bi-check2 pe-2"/>Value</p>
                <p className='mb-0'><icon className="bi-check2 pe-2"/>Service</p>
                </div>
                
              </div>
              <div className='justify-content-end d-flex'>
                <icon className="pe-2 bi-hand-thumbs-up" />
                <p>256</p>
                <icon className="pe-2 ps-3 bi-hand-thumbs-down" />
                <p>256</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Restaurant
