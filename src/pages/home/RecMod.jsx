import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Select from "react-select";


function RecMod() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedOptions, setSelectedOptions] = useState();
  const [selectedOptions1, setSelectedOptions1] = useState();
  const [selectedOptions2, setSelectedOptions2] = useState();

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
  function handleSelect1(data) {
    setSelectedOptions1(data);
  }
  function handleSelect2(data) {
    setSelectedOptions2(data);
  }
  return (
    <>
      <Button className="btn bg-orange shadow rounded-1 justify-content-center d-flex mx-auto align-items-center position-absolute z-1 w-25" style={{top:'473px'}} onClick={handleShow}>
        Let Us Recommend
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let Us Recommend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label for="customRange2" class="form-label">Budget/person</Form.Label>
<input type="range" className="form-range border-0" min="0" max="5" id="customRange2"/>
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
          value={selectedOptions1}
          onChange={handleSelect1}
          isSearchable={true}
          isMulti
        />
         <Form.Label>Location </Form.Label>
              <Select
          options={LocationList}
          placeholder="Select color"
          value={selectedOptions2}
          onChange={handleSelect2}
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
              <Form.Label>Additional Instructions</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
         
          </Form>
        </Modal.Body>
        <Modal.Footer>
           <Button className="btn bg-orange shadow rounded-1 justify-content-center" onClick={handleClose}>
            Recommend
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecMod;
