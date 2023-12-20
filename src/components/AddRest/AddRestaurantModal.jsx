import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { GetAllCuisine } from '../../services/cuisine';
import { GetAllAmbience } from '../../services/ambience/ambience';
import { GetAuthUserLocalStorage } from '../../services/localStorage/localStorage';

const AddRestaurantModal = ({getAllRestaurants}) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [ambienceType, setAmbienceType] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [meals, setMeals] = useState([]);
  const [menuImages, setMenuImages] = useState([]);
  const [popularDishes, setPopularDishes] = useState('');
  const [longitude, setLongitude] = useState(0); // Set initial values as needed
  const [latitude, setLatitude] = useState(0);   // Set initial values as needed
  const [allAmbience, setAllAmbience] = useState([]);
  const [allCuisine, setAllCuisine] = useState([]);
  const [nameError, setNameError] = useState('');
  const [menuImagesError, setMenuImagesError] = useState('');
  const user = GetAuthUserLocalStorage()

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const handleShow = () => setShow(true);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleMealsChange = (e) => {
    const selectedMeals = Array.from(e.target.selectedOptions, (option) => option.value);
    setMeals(selectedMeals);
  };

  console.log(user,'=-=-=-')

  const handleAddRestaurant = async () => {
    try {
      // Validate that longitude and latitude are numbers
      // if (isNaN(longitude) || isNaN(latitude)) {
      //   console.error('Invalid longitude or latitude');
      //   return;
      // }

      // Prepare form data
      const formData = {
        name,
        ambience_type: ambienceType,
        cuisine_type: cuisineType,
        longitude: parseFloat(longitude),
        latitude: parseFloat(longitude),
        address,
        meals,
        menu_images: menuImages,
        popular_dishes: popularDishes,
        created_by: user?._id
      };

      // Make a POST request to the backend endpoint
      const response = await fetch('http://localhost:4000/restaurant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response from the server
      if (response.ok) {
        const result = await response.json();
        await getAllRestaurants()
        console.log(result);
        // Reset form fields or perform any other actions
        handleClose();
      } else {
        // Handle errors from the server
        const errorData = await response.json();
        console.error(errorData);
        // Update UI to show error messages
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  const resetForm = () => {
    setName('');
    setAmbienceType('');
    setCuisineType('');
    setLocation('');
    setAddress('');
    setMeals([]);
    setMenuImages([]);
    setPopularDishes('');
    setNameError('');
    setMenuImagesError('');
  };

  useEffect(() => {
    const getCusines = async () => {
      const res = await GetAllCuisine()
      setAllCuisine(res?.data?.data)
    }

    const getAmbience = async () => {
      const res = await GetAllAmbience()
      setAllAmbience(res?.data?.data)
    }

    getCusines()
    getAmbience()
  }, [])

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Restaurant
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Add Restaurant</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => { e.preventDefault(); handleAddRestaurant(); }}>
          <Form.Group controlId="name">
            <Form.Label>Restaurant Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter restaurant name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="latitude">
            <Form.Label>latitude</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter latitude..."
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="longitude">
            <Form.Label>longitude</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter longitude..."
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="ambienceType">
            <Form.Label>Ambience Type</Form.Label>
            <Form.Control
              as="select"
              value={ambienceType}
              onChange={(e) => setAmbienceType(e.target.value)}
            >
              <option value="" selected>--Select--</option>
              {
                allAmbience?.map((item, index) => (
                  <option key={index} value={item?._id}>{item?.name}</option>
                ))
              }
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="cuisineType">
            <Form.Label>Cuisine Type</Form.Label>
            <Form.Control
              as="select"
              value={cuisineType}
              onChange={(e) => setCuisineType(e.target.value)}
            >
              <option value="">--Select--</option>
              {
                allCuisine?.map((item, index) => (
                  <option key={index} value={item?._id}>{item?.name}</option>
                ))
              }
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="meals">
            <Form.Label>Meals</Form.Label>
            <Form.Control
              as="select"
              multiple
              value={meals}
              onChange={handleMealsChange}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="menuImages">
            <Form.Label>Menu Images</Form.Label>
            <Form.Control type="file" multiple />
            <Form.Text className="text-danger">{menuImagesError}</Form.Text>
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
              onChange={(e) => setPopularDishes(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Restaurant
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AddRestaurantModal;
