import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill-emoji/dist/quill-emoji.css';
import './blogmodal.css'; // Add the CSS file for styling

const BlogModal = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setAdditionalImages([...additionalImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...additionalImages];
    updatedImages.splice(index, 1);
    setAdditionalImages(updatedImages);
  };

  const handlePublish = () => {
    // Implement publishing logic here
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Main Image:', mainImage);
    console.log('Additional Images:', additionalImages);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Post Blog
      </Button>

      <Modal show={show} onHide={handleClose} 
         dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Create Blog</Modal.Title>
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
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                placeholder="Write your blog post..."
              />
            </Form.Group>
            <Form.Group controlId="mainImage">
              <Form.Label>Main Image</Form.Label>
              <Form.Control type="file" onChange={handleMainImageChange} />
              {mainImage && <img src={URL.createObjectURL(mainImage)} alt="Main" />}
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

export default BlogModal;
