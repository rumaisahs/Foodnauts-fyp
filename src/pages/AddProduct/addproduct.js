import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import React, { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from "react-select";

export const AddProduct = () => {
  const handleButtonClick = () => {
    setSelectedImages(Array(10).fill(null));
    setDisplayedImageIndex(0);
    formRef.current.reset(); // Reset the form
  };

  const formRef = useRef(null);
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);


  const [selectedImages, setSelectedImages] = useState(Array(10).fill(null));
  
  const handleImageChange = (e, index) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const updatedImages = [...selectedImages];
        updatedImages[index] = e.target.result;
        setSelectedImages(updatedImages);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages[index] = null;
    setSelectedImages(updatedImages);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedOptions, setSelectedOptions] = useState();
  const AmbeinceList = [
    { value: "Fancy", label: "Fancy" },
    { value: "Casual", label: "Casual" },
    { value: "Formal", label: "Formal" },
    { value: "Family", label: "Family" },
 
  ];
  const LocationList = [
    { value: "DHA", label: "DHA" },
    { value: "SMCHS", label: "SMCHS" },
    { value: "KDA", label: "KDA" },
    { value: "Gulistan-e-Johar", label: "Gulistan-e-Johar" },
    { value: "Gulshan", label: "Gulshan" }
  ];
  const CuisineList = [
    { value: "Italian", label: "Italian" },
    { value: "Asian", label: "Asian" },
    { value: "Desi", label: "Desi" },
    { value: "Continental", label: "Continental" },
   
  ];
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <>
      <Navbar />
      <body>
        <div class="row container mx-auto py-5">
          <div class="col-12 col-lg-6 text-center h-100">
            <h1>Add Products</h1>
            <div className="w-50 mx-auto my-5 align-items-center d-flex justify-content-center bg-light rounded-4 card-aspect">
              <div class="image-upload">
                <label for="file-input">
                  <icon className="input bi-upload fs-1 btn" />
                </label>
                <input className="d-none" id="file-input" type="file" />
              </div>
            </div>
            <div class="row justify-content-center">
              {[0, 1, 2, 3, 4].map((index) => (
                  <div className="col-2 col-lg-2 position-relative" key={index}>
                  <div className="image-upload bg-light rounded-4 align-items-center d-flex justify-content-center h-100 w-100 card-aspect">
                      {selectedImages[index] ? (
                      <>
                          <img
                          src={selectedImages[index]}
                          alt="Selected"
                          className="img-fluid"
                          style={{ maxHeight: '100%', maxWidth: '100%' }}
                          />
                          <button
                          className="btn btn-sm btn-danger rounded-circle"
                          onClick={() => handleRemoveImage(index)}
                          style={{
                              position: 'absolute',
                              top: '-10px',
                              right: '1px',
                              padding: '4px',
                          }}
                          >
                          <i className="bi bi-x" />
                          </button>
                      </>
                      ) : (
                      <>
                          <label htmlFor={`file-input-${index}`}>
                          <i className="input bi-upload fs-5 btn" />
                          </label>
                          <input
                          className="d-none"
                          id={`file-input-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, index)}
                          />
                      </>
                      )}
                  </div>
                  </div>
              ))}
            </div>
            <div class="row justify-content-center pt-3">
              {[5, 6, 7, 8, 9].map((index) => (
                  <div className="col-2 col-lg-2 position-relative" key={index}>
                  <div className="image-upload bg-light rounded-4 align-items-center d-flex justify-content-center h-100 w-100 card-aspect">
                      {selectedImages[index] ? (
                      <>
                          <img
                          src={selectedImages[index]}
                          alt="Selected"
                          className="img-fluid"
                          style={{ maxHeight: '100%', maxWidth: '100%' }}
                          />
                          <button
                          className="btn btn-sm btn-danger rounded-circle"
                          onClick={() => handleRemoveImage(index)}
                          style={{
                              position: 'absolute',
                              top: '-10px',
                              right: '1px',
                              padding: '4px',
                          }}
                          >
                          <i className="bi bi-x" />
                          </button>
                      </>
                      ) : (
                      <>
                          <label htmlFor={`file-input-${index}`}>
                          <i className="input bi-upload fs-5 btn" />
                          </label>
                          <input
                          className="d-none"
                          id={`file-input-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, index)}
                          />
                      </>
                      )}
                  </div>
                  </div>
              ))}
            </div>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ambience</Form.Label>
              <Select
          options={AmbeinceList }
          placeholder="Select ambience"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
           <Form.Label>Cuisine Type </Form.Label>
              <Select
          options={CuisineList}
          placeholder="Select cuisine type"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
         <Form.Label>Location </Form.Label>
              <Select
          options={LocationList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
              {/* <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            > */}
             
           
            </Form.Group>
          </Form>
          </div>

          <div class="col-12 col-lg-6 pt-5">
            <form class="row container-fluid" ref={formRef}>
              <div className="col-6">
                <label for="prod">Restaurant Name</label>
                <input
                  type="text"
                  id="prod"
                  name="prod"
                  className=" form-control"
                />
              </div>
              <div className="col-6">
                <label for="cond">Menu Images</label>
                <input
                  type="text"
                  id="cond"
                  name="cond"
                  className=" form-control"
                />
                 <div class="row justify-content-center">
              {[0, 1, 2, 3, 4].map((index) => (
                  <div className="col-2 col-lg-2 position-relative" key={index}>
                  <div className="image-upload bg-light rounded-4 align-items-center d-flex justify-content-center h-100 w-100 card-aspect">
                      {selectedImages[index] ? (
                      <>
                          <img
                          src={selectedImages[index]}
                          alt="Selected"
                          className="img-fluid"
                          style={{ maxHeight: '100%', maxWidth: '100%' }}
                          />
                          <button
                          className="btn btn-sm btn-danger rounded-circle"
                          onClick={() => handleRemoveImage(index)}
                          style={{
                              position: 'absolute',
                              top: '-10px',
                              right: '1px',
                              padding: '4px',
                          }}
                          >
                          <i className="bi bi-x" />
                          </button>
                      </>
                      ) : (
                      <>
                          <label htmlFor={`file-input-${index}`}>
                          <i className="input bi-upload fs-5 btn" />
                          </label>
                          <input
                          className="d-none"
                          id={`file-input-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, index)}
                          />
                      </>
                      )}
                  </div>
                  </div>
              ))}
            </div>
              </div>
            
              <div className="col-6">
                <label for="price">Price</label>
                <input
                  type="checkbox"
                  id="price"
                  name="price"
                  className=" form-control"
                />
              </div>
              <div className="col-6">
                <label for="catefory">Popular dishes</label>
                <input
                  type="text"
                  id="catefory"
                  name="catefory"
                  className=" form-control"
                />
              </div>
            
              <div className="col-12 col-lg-8">
                <label for="descr">Review</label>
                <textarea
                  className="col-12 col-lg-6 form-control"
                  rows={8}
                ></textarea>
              </div>
            </form>
          </div>

          <div className="col-12 pt-5 justify-content-center d-flex">
          <button
                className="btn bg-purple text-white"
                onClick={handleButtonClick}
              >
                Add Product
              </button>
          </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>

      <Footer />
    </>
  );
};
