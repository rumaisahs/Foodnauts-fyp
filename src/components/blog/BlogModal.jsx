import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill-emoji/dist/quill-emoji.css';
import './blogmodal.css'; // Add the CSS file for styling
import { GetAuthUserLocalStorage } from '../../services/localStorage/localStorage';
import { UploadImage } from '../../services/uploadImage';

const BlogModal = ({getAllBlogs}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [blogImages, setBlogImages] = useState([]);
  const user = GetAuthUserLocalStorage()
  
  const handleClose = () => {
    setShow(false);
    resetForm();
  };
  const handleShow = () => setShow(true);
  const handleContentChange = (value, delta, source, editor) => {
    setContent(value);
  }; 

  const handleRemoveImage = (index) => {
    const updatedImages = [...additionalImages];
    updatedImages.splice(index, 1);
    setAdditionalImages(updatedImages);
  };

  const handlePublish = async () => {
    try {
      
      // Prepare form data for main images
  const blogFormData = new FormData();
  for (const image of blogImages) {
    blogFormData.append('file', image);
  }
      // Prepare form data for all images
      const allImagesFormData = new FormData();
      additionalImages.forEach((image) => allImagesFormData.append('file', image));
  
      const imgResponse = await UploadImage(blogFormData);
      const imageUrls =imgResponse?.data?.data || [];
  
      // Prepare form data for blog post
      const formData = {
        title: title,
        description: content,
        images: imageUrls,
        user: user?._id,
      };
  
      // Make a POST request to the backend endpoint
      const response = await fetch('http://localhost:4000/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Handle the response from the server
      if (response.ok) {
        const result = await response.json();
        await getAllBlogs();
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
      console.error('Error adding blog:', error);
    }
  };

  
  const resetForm = () => {
    setTitle('');
    setContent('');
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Post Blog
      </Button>

      <Modal show={show} onHide={handleClose}  dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Create Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => { e.preventDefault(); handlePublish(); }}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <ReactQuill
  value={content}
  onChange={handleContentChange}
  placeholder="Write your blog post..."
/>
            </Form.Group>
            {/* <Form.Group controlId="mainImage">
              <Form.Label>Main Image</Form.Label>
              <Form.Control type="file" onChange={handleMainImageChange} />
              {mainImage && <img src={URL.createObjectURL(mainImage)} alt="Main" />}
            </Form.Group> */}
            <Form.Group controlId="additionalImages">
              <Form.Label>Additional Images</Form.Label>
              <Form.Control type="file"  onChange={(e) => setBlogImages([...blogImages, ...e.target.files])} multiple />
              <div className="thumbnail-container">
                {blogImages.map((image, index) => (
                  <div key={index} className="thumbnail">
                    <img src={URL.createObjectURL(image)} alt={`Image-${index}`} />
                    <span className="remove-icon" onClick={() => handleRemoveImage(index)}>
                      &times;
                    </span>
                  </div>
                ))}
              </div>
            </Form.Group>
          </Form>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type='submit' onClick={handlePublish}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BlogModal;
