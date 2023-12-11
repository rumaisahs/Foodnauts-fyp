import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddRestaurantModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [ambienceType, setAmbienceType] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [meals, setMeals] = useState([]);
  const [menuImages, setMenuImages] = useState([]);
  const [popularDishes, setPopularDishes] = useState('');
  const [additionalDescription, setAdditionalDescription] = useState('');

  // Error States
  const [nameError, setNameError] = useState('');
  const [menuImagesError, setMenuImagesError] = useState('');

  const handleClose = () => {
    // Clear the form and errors when closing the modal
    setShow(false);
    setName('');
    setAmbienceType('');
    setCuisineType('');
    setLocation('');
    setAddress('');
    setMeals([]);
    setMenuImages([]);
    setPopularDishes('');
    setAdditionalDescription('');
    setNameError('');
    setMenuImagesError('');
  };

  const handleShow = () => setShow(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAmbienceTypeChange = (e) => {
    setAmbienceType(e.target.value);
  };

  const handleCuisineTypeChange = (e) => {
    setCuisineType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleMealsChange = (e) => {
    const selectedMeals = Array.from(e.target.selectedOptions, (option) => option.value);
    setMeals(selectedMeals);
  };

  const handleMenuImagesChange = (e) => {
    const files = Array.from(e.target.files);

    // Validate image formats
    const validImageFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    const invalidImages = files.filter((file) => !validImageFormats.includes(file.type));

    if (invalidImages.length > 0) {
      setMenuImagesError('Please select only .jpeg, .png, or .jpg image files.');
    } else {
      setMenuImagesError('');
      setMenuImages(files);
    }
  };

  const handlePopularDishesChange = (e) => {
    setPopularDishes(e.target.value);
  };

  const handleAdditionalDescriptionChange = (value) => {
    setAdditionalDescription(value);
  };

  const handleAddRestaurant = () => {
    // Implement adding restaurant logic here
    console.log('Name:', name);
    console.log('Ambience Type:', ambienceType);
    console.log('Cuisine Type:', cuisineType);
    console.log('Location:', location);
    console.log('Address:', address);
    console.log('Meals:', meals);
    console.log('Menu Images:', menuImages);
    console.log('Popular Dishes:', popularDishes);
    console.log('Additional Description:', additionalDescription);
    handleClose();
  };

  useEffect(() => {
    // Validate minimum menu images
    if (menuImages.length < 3) {
      setMenuImagesError('Please select at least 3 menu images.');
    } else {
      setMenuImagesError('');
    }
  }, [menuImages]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Restaurant
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Add Restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Restaurant Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter restaurant name..."
                value={name}
                onChange={handleNameChange}
              />
              <Form.Text className="text-danger">{nameError}</Form.Text>
            </Form.Group>
            <Form.Group controlId="ambienceType">
              <Form.Label>Ambience Type</Form.Label>
              <Form.Control as="select" onChange={handleAmbienceTypeChange}>
                <option value="">--Select--</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="outdoor">Outdoor</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="cuisineType">
              <Form.Label>Cuisine Type</Form.Label>
              <Form.Control as="select" onChange={handleCuisineTypeChange}>
                <option value="">--Select--</option>
                <option value="italian">Italian</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location..."
                value={location}
                onChange={handleLocationChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address..."
                value={address}
                onChange={handleAddressChange}
              />
            </Form.Group>
            <Form.Group controlId="meals">
              <Form.Label>Meals</Form.Label>
              <Form.Control as="select" multiple onChange={handleMealsChange}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="menuImages">
              <Form.Label>Menu Images</Form.Label>
              <Form.Control type="file" onChange={handleMenuImagesChange} multiple />
              <Form.Text className="text-danger">{menuImagesError}</Form.Text>
              {/* Display selected menu images here */}
              <div className="thumbnail-container">
                {menuImages.map((image, index) => (
                  <div key={index} className="thumbnail">
                    <img src={URL.createObjectURL(image)} alt={`Image-${index}`} />
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="popularDishes">
              <Form.Label>Popular Dishes</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter popular dishes separated by comma..."
                value={popularDishes}
                onChange={handlePopularDishesChange}
              />
            </Form.Group>
            <Form.Group controlId="additionalDescription">
              <Form.Label>Additional Description</Form.Label>
              <ReactQuill
                value={additionalDescription}
                onChange={handleAdditionalDescriptionChange}
                placeholder="Write additional description..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddRestaurant}>
            Add Restaurant
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddRestaurantModal;
