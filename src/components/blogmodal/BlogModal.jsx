import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function BlogModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
Post Blog  </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
     
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Text</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <div>
          <i class="fs-3 bi bi-image"></i>
          <i class="fs-3 px-3 bi bi-link-45deg"></i>
          </div>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={handleClose}>
           Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BlogModal;