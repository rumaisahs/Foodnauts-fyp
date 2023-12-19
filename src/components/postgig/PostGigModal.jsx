import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './gigmodal.css'
const PostGigModal = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [deliverables, setDeliverables] = useState('');
  const [duration, setDuration] = useState('');
  const [promotionChannels, setPromotionChannels] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [additionalBenefits, setAdditionalBenefits] = useState('');

  // Validation states
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [deliverablesError, setDeliverablesError] = useState('');
  const [durationError, setDurationError] = useState('');
  const [promotionChannelsError, setPromotionChannelsError] = useState('');
  const [termsAndConditionsError, setTermsAndConditionsError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [additionalBenefitsError, setAdditionalBenefitsError] = useState('');
  const [mainImageError, setMainImageError] = useState('');
  const [additionalImagesError, setAdditionalImagesError] = useState('');
  const [content, setContent] = useState('');

  const handleClose = () => {
    setTitle('');
    setContent('');
    setMainImage(null);
    setAdditionalImages([]);
    setTitleError('');
    setMainImageError('');
    setAdditionalImagesError('');
    setShow(false);
    resetErrors();
  };

  const handleShow = () => setShow(true);

  const isImageValid = (file) => {
    const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
    return allowedFormats.includes(file.type);
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];

    // Check if the selected file is an image and in a valid format
    if (file && !isImageValid(file)) {
      setMainImageError('Please select a valid JPG, JPEG, or PNG image file.');
      setMainImage(null);
    } else {
      setMainImageError('');
      setMainImage(file);
    }
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);

    // Check if all selected files are images and in a valid format
    const invalidFiles = files.some((file) => !isImageValid(file));
    if (invalidFiles) {
      setAdditionalImagesError('Please select valid JPG, JPEG, or PNG image files.');
      setAdditionalImages([]);
    } else {
      setAdditionalImagesError('');
      setAdditionalImages([...additionalImages, ...files]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...additionalImages];
    updatedImages.splice(index, 1);
    setAdditionalImages(updatedImages);
  };

  const resetErrors = () => {
    setTitleError('');
    setDescriptionError('');
    setDeliverablesError('');
    setDurationError('');
    setPromotionChannelsError('');
    setTermsAndConditionsError('');
    setPhoneError('');
    setEmailError('');
    setAdditionalBenefitsError('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // Example validation: Title should not be empty
    if (!e.target.value.trim()) {
      setTitleError('Title is required');
    } else {
      setTitleError('');
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    // Example validation: Description should have at least 10 characters
    if (e.target.value.length < 10) {
      setDescriptionError('Description should have at least 10 characters');
    } else {
      setDescriptionError('');
    }
  };

  const handleDeliverablesChange = (e) => {
    setDeliverables(e.target.value);
    // Add your custom validation for deliverables field
    // For example, checking if it's not empty
    if (!e.target.value.trim()) {
      setDeliverablesError('Deliverables are required');
    } else {
      setDeliverablesError('');
    }
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value.length);
    if (e.target.value.length < 4) {
      setDurationError('Duration should have at least 4 characters');
    } else {
      setDurationError('');
    }
  };
  
  const handlePromotionChannelsChange = (e) => {
    setPromotionChannels(e.target.value);
    // Add your custom validation for promotion channels field
    // For example, checking if it's not empty
    if (!e.target.value.trim()) {
      setPromotionChannelsError('Promotion channels are required');
    } else {
      setPromotionChannelsError('');
    }
  };

  const handleTermsAndConditionsChange = (e) => {
    setTermsAndConditions(e.target.value);
    // Add your custom validation for terms and conditions field
    // For example, checking if it's not empty
    if (!e.target.value.trim()) {
      setTermsAndConditionsError('Terms and conditions are required');
    } else {
      setTermsAndConditionsError('');
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    // Add your custom validation for phone field
    // For example, checking if it's a valid phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(e.target.value)) {
      setPhoneError('Please enter a valid phone number');
    } else {
      setPhoneError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Add your custom validation for email field
    // For example, checking if it's a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleAdditionalBenefitsChange = (e) => {
    setAdditionalBenefits(e.target.value);
    // Add your custom validation for additional benefits field
    // For example, checking if it's not empty
    if (!e.target.value.trim()) {
      setAdditionalBenefitsError('Additional benefits are required');
    } else {
      setAdditionalBenefitsError('');
    }
  };

  const handlePublish = () => {
    // Check for validations before publishing
    if (!validateForm()) {
      // If there are errors, prevent publishing
      return;
    }

    // Implement publishing logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Main Image:', mainImage);
    console.log('Additional Images:', additionalImages);
    console.log('Deliverables:', deliverables);
    console.log('Duration:', duration);
    console.log('Promotion Channels:', promotionChannels);
    console.log('Terms and Conditions:', termsAndConditions);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Additional Benefits:', additionalBenefits);
    handleClose();
  };

  const validateForm = () => {
    // Add validations for each field
    const isTitleValid = title.trim() !== '';
    const isDescriptionValid = description.length >= 10;
    const isDeliverablesValid = deliverables.trim() !== '';
    const isPromotionChannelsValid = promotionChannels.trim() !== '';
    const isTermsAndConditionsValid = termsAndConditions.trim() !== '';
    const isPhoneValid = /^\d{10}$/.test(phone);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isAdditionalBenefitsValid = additionalBenefits.trim() !== '';

    // Set error states based on validations
    setTitleError(isTitleValid ? '' : 'Title is required');
    setDescriptionError(isDescriptionValid ? '' : 'Description should have at least 10 characters');
    setDeliverablesError(isDeliverablesValid ? '' : 'Deliverables are required');
    setPromotionChannelsError(isPromotionChannelsValid ? '' : 'Promotion channels are required');
    setTermsAndConditionsError(isTermsAndConditionsValid ? '' : 'Terms and conditions are required');
    setPhoneError(isPhoneValid ? '' : 'Please enter a valid phone number');
    setEmailError(isEmailValid ? '' : 'Please enter a valid email address');
    setAdditionalBenefitsError(isAdditionalBenefitsValid ? '' : 'Additional benefits are required');

    // Return true if all fields are valid, otherwise false
    return (
      isTitleValid &&
      isDescriptionValid &&
      isDeliverablesValid &&
      isPromotionChannelsValid &&
      isTermsAndConditionsValid &&
      isPhoneValid &&
      isEmailValid &&
      isAdditionalBenefitsValid
    );
  };

  return (
    <>
      <Button style={{width:'150px'}} variant="primary" onClick={handleShow}>
        Post Gig
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName=" custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Post Gig</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title..."
                value={title}
                onChange={handleTitleChange}
              />
              <div className="error-message">{titleError}</div>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price..."
             
              />
              <div className="error-message">{titleError}</div>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description..."
                value={description}
                onChange={handleDescriptionChange}
              />
              <div className="error-message">{descriptionError}</div>
            </Form.Group>
            <Form.Group controlId="mainImage">
              <Form.Label>Main Image</Form.Label>
              <Form.Control type="file" onChange={handleMainImageChange} />
            </Form.Group>
            <Form.Group controlId="additionalImages">
              <Form.Label>Additional Images</Form.Label>
              <Form.Control type="file" onChange={handleAdditionalImagesChange} multiple />
              <div className="thumbnail-container">
                {additionalImages.map((image, index) => (
                  <div key={index} className="thumbnail">
                    <img src={URL.createObjectURL(image)} alt={`Image-${index}`} />
                    <span className="remove-icon" onClick={() => handleRemoveImage(index)}>
                      &times;
                    </span>
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="deliverables">
              <Form.Label>Deliverables</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter deliverables..."
                value={deliverables}
                onChange={handleDeliverablesChange}
              />
              <div className="error-message">{deliverablesError}</div>
            </Form.Group>
            <Form.Group controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter duration..."
                onChange={handleDurationChange}
              />
              <div className="error-message">{durationError}</div>
            </Form.Group>
            <Form.Group controlId="promotionChannels">
              <Form.Label>Promotion Channels</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter promotion channels..."
                value={promotionChannels}
                onChange={handlePromotionChannelsChange}
              />
              <div className="error-message">{promotionChannelsError}</div>
            </Form.Group>
            <Form.Group controlId="termsAndConditions">
              <Form.Label>Terms and Conditions</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter terms and conditions..."
                value={termsAndConditions}
                onChange={handleTermsAndConditionsChange}
              />
              <div className="error-message">{termsAndConditionsError}</div>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone..."
                value={phone}
                onChange={handlePhoneChange}
              />
              <div className="error-message">{phoneError}</div>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email..."
                value={email}
                onChange={handleEmailChange}
              />
              <div className="error-message">{emailError}</div>
            </Form.Group>
            <Form.Group controlId="additionalBenefits">
              <Form.Label>Additional Benefits</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter additional benefits..."
                value={additionalBenefits}
                onChange={handleAdditionalBenefitsChange}
              />
              <div className="error-message">{additionalBenefitsError}</div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePublish}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostGigModal;
