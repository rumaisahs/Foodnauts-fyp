
  import { useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
  import Image from 'react-bootstrap/Image';
  import Form from 'react-bootstrap/Form';
  import influencer from "../../images/rumaisa.jpg";

  import "./fullblogmodel.css";
  
  function FullBlogModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  // Sample data
  const blogData = {
    title: 'Recipe: Easy Peanut Butter Cups',
    user: {
      name: 'Rayah Rizvi',
      profilePicture: 'data:image/jpeg;base64,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', // Replace with the actual URL
    },
    date: '12/10/2023',
    largePicture: 'https://www.vegkit.com/app/uploads/2023/10/peanut_butter_cups_1.jpg', // Replace with the actual URL
    smallPictures: [
      'https://www.vegkit.com/app/uploads/2023/10/peanut_butter_cups_1.jpg', // Replace with the actual URL
      'https://www.vegkit.com/app/uploads/2023/09/tim_tam_1.jpg', // Replace with the actual URL
    ],
    content:
   "These little cups of delight are so easy to whip up and make for great gifts, too. Once you’ve nailed the recipe, experiment with vegan white chocolate or other nut butters, for something truly unique. Though frankly, we don’t imagine you’ll ever get sick of this one!These little cups of delight are so easy to whip up and make for great gifts, too. Once you’ve nailed the recipe, experiment with vegan white chocolate or other nut butters, for something truly unique. Though frankly, we don’t imagine you’ll ever get sick of this one!These little cups of delight are so easy to whip up and make for great gifts, too. Once you’ve nailed the recipe, experiment with vegan white chocolate or other nut butters, for something truly unique. Though frankly, we don’t imagine you’ll ever get sick of this one!",
   
comments: [
      {
        user: '@',
        comment: 'Great content! Keep it up',
      },
     
    ],
  };

  return (
    <>
      <button className='text-orange bg-transparent border-0' onClick={handleShow}>
        Read More
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="custom-modal-width"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {blogData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '85vh', overflowY: 'auto' }}>
          <div className="d-flex align-items-center">
            <Image
              src={blogData.user.profilePicture}
              roundedCircle
              width={50}
              height={50}
              className="me-2"
              alt="User"
            />
            <div>
              <p>{blogData.user.name}</p>
              <p>{blogData.date}</p>
            </div>
          </div>
          <Image
            src={blogData.largePicture}
            fluid
            className="mb-3"
            alt="Large Blog"
          />
          <div className="d-flex justify-content-start">
            {blogData.smallPictures.map((smallPicture, index) => (
              <Image
                key={index}
                src={smallPicture}
                rounded
                width={50}
                height={50}
                className="me-2"
                alt={`Small Blog ${index + 1}`}
              />
            ))}
          </div>
          <hr />
          <p className='fs-5'>{blogData.content}</p>
          {/* Comments section */}
          <hr />
          <div className="comment-section">
            <h5>Comments</h5>
            <div className="comment-buttons">
              <button className='border-0 bg-transparent'><i class="bi bi-hand-thumbs-up fs-4 text-orange"></i></button> <span>1</span>
              <button className='border-0 bg-transparent'><i class="bi bi-hand-thumbs-down fs-4 text-orange"></i></button> <span>0</span>
            </div>
          </div>
          {blogData.comments.map((comment, index) => (
            <div key={index} className="comment-container">
              <Image
                src={influencer}
                roundedCircle
                width={30}
                height={30}
                alt={`${comment.user}'s Image`}
              />
              <div>
                <strong>{comment.user}:</strong> {comment.comment}
              </div>
            </div>
          ))}
          {/* Comment form */}
          <Form>
            <Form.Group controlId="commentForm">
              <Form.Label>Add a Comment</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your comment..." />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post Comment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FullBlogModal;