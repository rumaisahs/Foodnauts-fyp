import React from 'react'
import '../../pages/restaurant/restaurant.css';

import ReviewImg1 from "../../images/review-img-1.png"
import ReviewImg2 from "../../images/review-img-2.png"
import ReviewImg3 from "../../images/review-img-3.png"
import Influencer from "../../images/influence.jpeg"
import moment from 'moment';

function blog({ data }) {
  return (
    <>
      <div className='container mx-auto row border rounded-3 border-black border-1 p-3'>
        <div className='col-xl-1 col-sm-2 col-3'>
          <img className='rounded-circle' src={Influencer} alt="" height={100} />
        </div>
        <div className='col-7'>
          <p className='mb-0 text-lowercase'>@{data?.user?.name}</p>
          {/* <p className=''>Published on {moment(data?.createdAt)}</p> */}
          <p>
            {data?.description}
          </p>
          {
            data?.images?.map((item, index) => (
              <img kye={index} className='pe-2 object-fit-contain' src={item} height={130} alt="" />
            ))
          }
        </div>
        <div className='col-3 justify-content-end d-flex'>
          {/* <div>
            <p className='fs-5 fw-light d-inline pe-2'>4.5/5</p>
          <span>
    <h1 className='my-3'><icon className="bi-chat-square-dots pe-2"/>Blogs</h1>
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-fill text-warning" />
            <icon className="bi-star-half text-warning" />
          </span>
          <p className='mb-0'><icon className="bi-check2 pe-2"/>Hygiene</p>
          <p className='mb-0'><icon className="bi-check2 pe-2"/>Value</p>
          <p className='mb-0'><icon className="bi-check2 pe-2"/>Service</p>
          </div> */}

        </div >
        {/* <div className='mt-auto' > */}
        <div className='justify-content-end d-flex ms-auto'>
          <icon className="pe-2 bi bi-share-fill" />
          <icon className="pe-2 bi-hand-thumbs-up" />
          <p>{data?.likes?.length}</p>
          <icon className="pe-2 ps-3 bi-hand-thumbs-down" />
          <p>{data?.dislikes?.length}</p>
        </div>
        <div className='justify-content-start d-flex me-auto'>
          <icon className="pe-2 bi bi-chat-dots" />
          <p>Comments</p>

          {/* </div> */}
        </div></div>
    </>
  )
}

export default blog