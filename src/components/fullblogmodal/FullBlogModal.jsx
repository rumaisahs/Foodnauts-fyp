
  import { useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
  import Image from 'react-bootstrap/Image';
  import Form from 'react-bootstrap/Form';
  import influencer from "../../images/influence.jpeg";

  import "./fullblogmodel.css";
  
  function FullBlogModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  // Sample data
  const blogData = {
    title: 'A PLANT-BASED COMMUNITY FOCUSED SHARED COMMERCIAL KITCHEN',
    user: {
      name: 'John Doe',
      profilePicture: 'https://placekitten.com/50/50', // Replace with the actual URL
    },
    date: 'January 1, 2023',
    largePicture: 'https://placekitten.com/600/300', // Replace with the actual URL
    smallPictures: [
      'https://placekitten.com/50/50', // Replace with the actual URL
      'https://placekitten.com/50/50', // Replace with the actual URL
    ],
    content:
"The Food Studio is a community-based, plant-based, shared commercial kitchen in the Pittsburgh Yards Development in South Atlanta. It will offer several membership options for local plant-based food entrepreneurs and hospitality businesses that need food production space. It will be focused on plant-based nutrition and integrate infrastructure and entrepreneurial support to help aspiring food entrepreneurs create successful business ventures to improve their economic conditions and provide members of the target community access to healthier foods to improve their well-being.The Urban Oak Initiative operates it. This non-profit organization seeks to equip Black, Indigenous, and people of color youth, families, and communities to take full advantage of plant-based nutrition and the vegan economy through teaching, cooking, and convening. The Food Studio will be the central kitchen for the Urban Oak Initiative's plant-based community food programs. Additionally, it will house our job training and youth culinary outreach programs. Pittsburgh Yards® is an unprecedented opportunity to spur economic equity, job growth and entrepreneurship for residents of Adair Park, Capitol Gateway, Mechanicsville, Peoplestown, Pittsburgh, and Summerhill—often referred to as Neighborhood Planning Unit V (NPU-V)—and other southwest Atlanta neighborhoods. It’s more than a development project. It’s a transformative, community-led catalyst to positively impact residents and entrepreneurs for generations to come.Located near many of the city’s major redevelopment projects, including the Atlanta BeltLine, the former Turner Field and State Farmers Market, Hartsfield-Jackson International Airport and Fort McPherson, this 31-acre site is part of an area that is in the midst of realizing its significant promise for the neighborhood.For more information complete the interest form below or email us with questions.info@urbanoakfood.orgTHE POWER OF PLANT-BASEDPlant-based diets are becoming increasingly popular due to their many reported health benefits. Eating a plant-based diet can help with weight loss, reduce the risk of chronic illnesses such as diabetes and high blood pressure, and increase longevity. Here are five reasons why eating more plants can be beneficial for your health:Reason 1: Nutrient Dense: Plant foods are naturally full of vitamins, minerals, fiber,antioxidants and phytochemicals. Each of these are essential for good health, and consuming them in abundance on a daily basis helps to maintain optimal functioning of our body systems. A balanced plant-based diet is therefore much more nutrient dense than non-vegetarian eating patterns. Reason 2: Heart Healthy: Plant-based diets have been linked to lower levels of bad cholesterol (LDL). In addition, they are typically low in saturated fat and don’t contain any trans fats which have been associated with an increased risk of heart disease. Plant foods also supply other key ingredients such as omega 3 fatty acids which help protect the cardiovascular system from atherosclerosis.Reason 3: Cancer Protection: Plant foods may provide protection against certain forms of cancer due to their high antioxidant content. The antioxidants found in fruits and vegetables fight off free radicals which can damage cells in the body and lead to the development of tumors. Eating a variety of phytochemical-rich plants will ensure that you get a broad selection of antioxidants which may help guard against cancer. Reason 4: Weight Loss Potential: Following a plant-based diet has been linked to successful weight loss outcomes because these foods tend to be lower in calories then animal products while still providing an impressive amount of nutrition per serving. Plants also often contain dietary fiber which helps promote feelings of fullness so it is easier to eat less while still feeling satisfied after meals.Reason 5: Environmentally Friendly Option: Eating more plants is not only good for your own health but it can also benefit our planet too! Plant foods require less land and water compared to raising livestock so opting for vegan options whenever possible can help reduce your environmental footprint while still nourishing your body adequately.In conclusion, there are many advantages associated with choosing to eat a plant-based diet over one that contains animal products. By consuming mostly fruits, vegetables, nuts, seeds, and whole grains you can greatly improve your overall wellbeing while supporting sustainable farming practices too!",
   
comments: [
      {
        user: 'Jane Doe',
        comment: 'Great blog!',
      },
      {
        user: 'Bob Smith',
        comment: 'Well written!',
      },
    ],
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Blog
      </Button>

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
          <p>{blogData.content}</p>
          {/* Comments section */}
          <hr />
          <div className="comment-section">
            <h5>Comments</h5>
            <div className="comment-buttons">
              <button>👍</button> <span>10</span>
              <button>👎</button> <span>5</span>
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