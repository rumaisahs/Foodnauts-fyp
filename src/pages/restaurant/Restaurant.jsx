import React, { useEffect } from 'react'
import "./restaurant.css";
import ReviewImg1 from "../../images/leave-a-review.png"

import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,

}
  from "@fortawesome/free-solid-svg-icons";
import { Icon } from '@iconify/react';
import { useState } from "react";
import ReviewImg from "../../images/leave-a-review.png"
import Rumaisa from "../../images/rumaisa.jpg"
import { getSingleAmbiance, getSingleCuisine, getSingleRestaurant, getSingleReview } from '../../services/restaurants';
import { NavLink, useParams } from 'react-router-dom';
import ImageUploadComp from '../../components/uploadImage';
import PostForm from '../../components/PostForm';
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
  const [rating, setRatingExp] = useState(null);
  const [rating1, setRatingVal] = useState(null);
  const [rating2, setRatingSer] = useState(null);

  const [rating3, setRatingHyg] = useState(null);

  const handleStarClick = (index) => {
    // Set the rating to the clicked star's index + 1
    setRatingExp(index + 1);
  };
  const handleStarClick1 = (index) => {
    // Set the rating to the clicked star's index + 1
    setRatingVal(index + 1);
  };
  const handleStarClick2 = (index) => {
    // Set the rating to the clicked star's index + 1
    setRatingSer(index + 1);

  }; const handleStarClick3 = (index) => {
    // Set the rating to the clicked star's index + 1
    setRatingHyg(index + 1);
  };
  const [data, setData] = useState([])
  const [cuisineType, setCuisineType] = useState([])
  const [ambianceType, setAmbianceType] = useState([])
  const [review, setReview] = useState([])

  console.log(review, 'review');
  const { id } = useParams()

  useEffect(() => {
    GetSingleRestaurant()
  }, [id])

  useEffect(() => {
    if (data?.cuisine_type) {
      GetSingleCuisine()
    }
  }, [data?.cuisine_type])

  useEffect(() => {
    if (data?.ambience_type) {
      GetSingleAmbiance()
    }
  }, [data?.ambience_type])

  useEffect(() => {
    if (data?.ambience_type) {
      GetSingleReview()
    }
  }, [data?.reviews])

  const GetSingleRestaurant = async () => {
    const res = await getSingleRestaurant(id)
    setData(res?.data?.data)
  }

  const GetSingleCuisine = async () => {
    const res = await getSingleCuisine(data?.cuisine_type)
    setCuisineType(res?.data?.data)
  }

  const GetSingleAmbiance = async () => {
    const res = await getSingleAmbiance(data?.ambience_type)
    setAmbianceType(res?.data?.data)
  }
  const GetSingleReview = async () => {
    const res = await getSingleReview(data?.reviews.length > 0 ? data?.reviews[0] : 1)
    setReview(res?.data?.data)
  }

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

  const inputDate = new Date(data?.createdAt);
  const formattedDate = inputDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const getImageUrl = (filename) => {
    const serverUrl = "http://localhost:4000";
    console.log( `${serverUrl}/${filename}`)
    return `${serverUrl}${filename}`;
  };

  return (
    <>
    <div className="  row justify-content-end">
      
      <div className="hotelContainer col-10">
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
          <h2 className=" d-inline">{data?.name}</h2>
          {
            data?.is_verified ?
              <h6 className='text-primary d-inline ps-2'> <icon className="bi-patch-check-fill" /> Verified</h6>
              :
              ''
          }
          <span className=' float-end'>
            <p className='d-inline pe-2'>{review?.rating}/5</p>
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-half text-warning" />
            <p className='text-end'>Reviews({data?.reviews?.length})</p>
          </span>

          <div className="hotelImages pt-2 w-100"> 
          {console.log("Location",data.images)}
            {data?.images && data?.images?.map((dt, i) => {
              return (
                <>
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={getImageUrl(dt)}
                      alt=""
                      className="hotelImg"
                    />
                  </div>

                </>
              )
            })}
          </div>
          <div className='row bg-light mt-3 w-100 mx-auto justify-content-center shadow-sm'>
            <button
              type="button"
              className="btn fs-5 col-5 col-sm-4 col-md-3 col-lg-3 mx-3 my-2"
            >
              <icon className="bi-phone pe-1 " />
              <a
                className=" text-decoration-none text-black fs-5"
                href={`tel:data?.phone`}
              >
                {data?.phone}
              </a>
            </button>
            <button
              type="button"
              className="btn col-3 col-sm-3 col-md-3 col-lg-2 mx-3 my-2"
            >
              <NavLink
                to={data?.social_links?.length > 0 ? data?.social_links[0]?.url : 'https://www.google.com/'
                }>
              <icon className="bi-box-arrow-in-up-left pe-1 fs-5" />
              <a
                className=" text-decoration-none text-black fs-5"
             
              >
                Website
              </a>
              </NavLink>
            </button>
            <button
              type="button"
              className="btn col-3 col-sm-3 col-md-4 col-lg-2 mx-3 my-2"
            >
              <NavLink
                to={data?.menu_images?.length > 0 ? data?.menu_images[0] : 'facebook.com'
                }>

                <icon className=" bi-journal-text pe-1 fs-5" />
                Menu
              </NavLink>
            </button>
            <button
              type="button"
              className="btn col-1 my-2"
            >
              <NavLink
                to={data?.social_links?.length > 0 ? data?.social_links[1]?.url : 'https://www.facebook.com/'
                }>
                <icon className=" bi-facebook pe-1  fs-5" />
              </NavLink>
            </button>
            <button
              type="button"
              className="btn col-1 my-2"
            > 
            <NavLink
            to={data?.social_links?.length > 0 ? data?.social_links[2]?.url : 'https://www.instagram.com/'
            }>
              <icon className=" bi-instagram pe-1  fs-5" />
              {/* <a
                className=" text-decoration-none text-black"
                href={`https://www.instagram.com/xanderscafe/`}
              >
              </a>  */}
              </NavLink>
            </button>
            <button
              type="button"
              className="btn col-1 my-2"
            >
               <NavLink
            to={data?.social_links?.length > 0 ? data?.social_links[3]?.url : 'https://www.foodpanda.pk/'
            }>
              
                <Icon icon="simple-icons:foodpanda  " style={{ color: 'blue'}} />
              </NavLink>
            </button>

          </div>
          <div className='row mt-3 w-100 mx-auto justify-content-between'>
            <div className='col-lg-8 bg-light p-4 shadow-sm'>
              <div className='row'>
                <div className='col-5'>
                  <h5>
                    Opening hours
                    <icon className="ps-2 bi-info-circle" />
                  </h5>
                  <p>{data?.opening_hours} {data?.closing_hours}</p>
                  <h5>
                    Cuisine Type
                  </h5>
                  <p>italian  {cuisineType?.name}
                  </p>
                  <h5>
                    Ambience
                  </h5>
                  <p>Casual{ambianceType?.name}</p>
                  <h5>
                    Meals
                  </h5>
                  <p>{data?.meals && data?.meals ? data?.meals?.map((dt, i) => {
                    return (
                      <>
                        {dt}
                        {i < data?.meals?.length - 1 && ','}
                      </>
                    )
                  })
                    : ''

                  }</p>
                  <p>Dine-In . Take-Away . Delivery</p>
                </div>
                <div className='col-7'>
                  <h5>
                    Budget
                  </h5>
                  <p>{`2000 Rs./person`}</p>
                  <h5>
                    Discounts
                    <icon className="ps-2 bi-info-circle" />
                  </h5>
                  <p>{data?.discountOn ? data?.discountOn.map((dt, i) => {
                    return (
                      <>
                        {dt}
                        {i < data?.discountOn?.length - 1 && ','}
                      </>
                    )
                  }) : ''}</p>
                  <span className='d-block'>
                    <h5 className='d-inline pe-5'>
                      <icon className="pe-2 bi-check-circle" />
                      Hygiene
                    </h5>
                    <p className='d-inline '>{review?.extras?.hygiene}4/5</p>
                  </span>
                  <span className='d-block'>
                    <h5 className='d-inline pe-5'>
                      <icon className="pe-2 bi-bell" />
                      Value
                    </h5>
                    <p className='d-inline '>{review?.extras?.value}3/5</p>
                  </span>
                  <span className='d-block'>
                    <h5 className='d-inline pe-5'>
                      <icon className="pe-2 bi-bell" />
                      Service
                    </h5>
                    <p className='d-inline '>{review?.extras?.service}4/5</p>
                  </span>
                  <h5 className='pt-3'>
                    Popular Dishes
                  </h5>
                  <p>{data?.popular_dishes}</p>
                </div>
              </div>

            </div>
            <div className='col-lg-4 pt-3 shadow-sm'>
              <h3 className='text-center'>
                Location
              </h3>
              <p className='px-4'>{data?.address}</p>
              <span className='justify-content-center d-flex'>
                <iframe className='rounded-4' src={`https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115837.64059160984!2d${data?.location?.coordinates[1]}!3d${data?.location?.coordinates[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s${encodeURIComponent(data?.address)}!2s!3m2!1d${data?.location?.coordinates[0]}!2d${data?.location?.coordinates[1]}!5e0!3m2!1sen!2s!4v1698236935806!5m2!1sen!2s`} width="350" height="200" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </span>
              {/* <h3 className='p-3 pb-2 mb-0'>Other Branches</h3>
              <p className='px-3 my-0'>{data?.name} Clifton</p>
              <p className='px-3 my-0 pb-3'>{data?.name} DHA Bukhari</p> */}
            </div>

          </div>
          <PostForm />
          <h1 className='my-3'><icon className="bi-chat-square-dots pe-2" />Read Reviews</h1>
          <div className='row border rounded-3 border-black border-1 p-3'>
            <div className='col-xl-1 col-sm-2 col-3'>
              <img className='rounded-circle' src={review?.user?.profile_image} alt="" height={90} />
            </div>
            <div className="col-7">
              <p className="mb-0 fs-5 fw-bold">@ {review?.user?.username}</p>
              {/* <p className=''>Reviewed on {formattedDate}</p> */}
              <p className="fs-5 pt-3">{review?.review}</p>
              <img
                  className="pe-2 object-fit-contain"
                  src={ReviewImg1}
                  height={30}
                  alt=""
                />
              {/* <img className='pe-2 object-fit-contain' src={ReviewImg2} height={130} alt="" />
              <img className='pe-2 object-fit-contain' src={ReviewImg3} height={130} alt="" /> */}
            </div>
            <div className="col-3 justify-content-end d-flex">
              <div>
                <p className="fs-5 fw-light d-inline pe-2">
                    {review?.rating}/5
                  </p>
                <span>
                  <icon className="bi-star-fill text-warning" />
                                 </span>
               </div>
              </div>
<div className="justify-content-end d-flex">
              <icon className="pe-2 bi-hand-thumbs-up text-orange" />
              <p>0</p>
              <icon className="pe-2 ps-3 bi-hand-thumbs-down text-orange" />
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
   
    </div>   <Footer /></>
  )
}

export default Restaurant
