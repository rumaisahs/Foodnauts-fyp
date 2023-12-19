import React from 'react'
import React, { useState } from 'react'
import ImageUploadComp from './uploadImage';
import ReviewImg from "../images/leave-a-review.png"
import { Form } from "react-bootstrap"
import { Controller, useForm } from "react-hook-form";
import { GetAuthUserLocalStorage } from '../services/localStorage/localStorage';
import { NavLink, useParams } from 'react-router-dom';
import { createRestaurant } from '../../services/restaurants';

const Addrestt = () => {
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const { register, handleSubmit, setValue, reset, watch, control, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const { id } = useParams()
    const userId = GetAuthUserLocalStorage()?._id
    const onSubmit = async (data) => {
        data["user"] = userId
        data["restaurant"] = id
        data["name"] = resname
        data["address"] = address
        data["popular_dishes"] = popular_dishes
        data["opening_hours"] = opening_hours
        data["closing_hours"] = closing_hours
        data["cuisine_type"] = cuisine_type
        data["ambience_type"] = ambience_type
        data["discountOn"] = discountOn
        data['images'] = [file]
        data['menu_images'] = [file]

        console.log(data, 'haparaasaasa');
        const res = await createRestaurant(data)
        console.log(res, 'res');
    }


  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='row bg-light w-100 mx-auto mt-3 p-3'>
            <div className='col-4'>
         
                <h5 className='pt-3 mb-0'>Favourite Dish</h5>
                <input className=' border-0 shadow-sm'
                    {...register('favourite_dish')}
                    placeholder='Type here...' />
                <h5 className='pt-3 mb-0'>Type A Review</h5>
                <textarea className=' border-0 shadow-sm' type='text-area' placeholder='Type your review here...'

                    {...register('review')}
                />
            </div>
            <div className='col-4'>
                <div className="">
                    <h5 className='mb-0'>{'Upload Image'}</h5>
                    <input type="file" onChange={handleChange} />
                    <img style={{ height: '100px' }} src={file} />
                </div>
                <br />
                <br />
                <div className="d-flex align-items-center">
<h5 className='d-inline ps-2'>Hygiene</h5>
<div className="col-12 col-sm-12 justify-content-start d-flex px-2 pb-2 d-inline">
{[1, 2, 3, 4, 5].map((value, index) => (
    <i
        key={index}
        className={`fs-5  ms-1 bi-star${rating1 >= value ? '-fill' : ''} text-orange`}
        onClick={() => handleStarClick1(index)}
        {...register('hygiene')}
    />
))}
</div>
</div>
                <br />
                <div className="d-flex align-items-center">
                <h5 className='d-inline ps-2'>Value</h5>
                <div className="col-12 col-sm-12 justify-content-start d-flex px-2 pb-2 d-inline">
                    {[1, 2, 3, 4, 5].map((value, index) => (
                        <i
                            key={index}
                            className={`fs-5 pb-1 ms-1 bi-star${rating2 >= value ? '-fill' : ''} text-orange`}
                            onClick={() => handleStarClick2(index)}
                            {...register('value')}
                        />
                    ))}
                </div></div>
                <br />
                <div className="d-flex align-items-center">
                <h5 className='d-inline ps-2'>Service</h5>
                <div className="col-12 col-sm-12 justify-content-start d-flex px-2 pb-2 d-inline">
                    {[1, 2, 3, 4, 5].map((value, index) => (
                        <i
                            key={index}
                            className={`fs-5 pb-1 ms-1 bi-star${rating3 >= value ? '-fill' : ''} text-orange`}
                            onClick={() => handleStarClick3(index)}
                            {...register('service')}
                        />
                    ))}
                </div></div>
                <h5 className='pt-3'>Would You Visit Again</h5>
                <input type="radio" name="" id="" />
                <p className='d-inline ps-1 pe-3'>Yes</p>
                <input type="radio" name="" id="" />
                <p className='d-inline ps-1'>No</p>
            </div>
            <div className='col-4 text-center'>
                <img className='w-75' src={ReviewImg} alt="leave-a-review.png" />
                <button className='btn btn-dark rounded-4 w-50' type='submit'>
                    Add a review
                </button>
            </div>
        </div>
    </Form>
</>  )
}

export default Addrestt