import React, { useState } from 'react'
import ImageUploadComp from './uploadImage';
import ReviewImg from "../images/leave-a-review.png"
import { Form } from "react-bootstrap"
import { Controller, useForm } from "react-hook-form";
import { GetAuthUserLocalStorage } from '../services/localStorage/localStorage';
import { NavLink, useParams } from 'react-router-dom';
import { createReview } from '../services/restaurants';

const PostForm = () => {
    const [rating, setRatingExp] = useState(0);
    const [rating1, setRatingVal] = useState(0);
    const [rating2, setRatingSer] = useState(0);
    const [rating3, setRatingHyg] = useState(0);
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const { register, handleSubmit, setValue, reset, watch, control, formState: { errors } } = useForm({
        mode: "onChange"
    });
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

    const { id } = useParams()
    const userId = GetAuthUserLocalStorage()?._id
    const onSubmit = async (data) => {
        data["user"] = userId
        data["restaurant"] = id
        data["extras"] = {
            "experience": rating,
            "hygiene": rating1,
            "value": rating2,
            "service": rating3
        }
        data['images'] = [file]
        console.log(data, 'haparaasaasa');
        const res = await createReview(data)
        console.log(res, 'res');
    }
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='row bg-light w-100 mx-auto mt-3 p-3'>
                    <div className='col-4'>
                        <h4>Rate Your <p className='fs-6 mb-0'>Experience</p></h4>
                        <div className="col-12 col-sm-12 justify-content-start d-flex pb-3">
                            {[1, 2, 3, 4, 5].map((value, index) => (
                                <i
                                    key={index}
                                    className={`fs-5 pb-1 ms-1 bi-star${rating >= value ? '-fill' : ''} text-orange`}
                                    onClick={() => handleStarClick(index)}
                                    {...register('experience')}
                                />
                            ))}
                        </div>


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
        </>
    )
}
export default PostForm