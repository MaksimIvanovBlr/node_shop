import React , { useState }  from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { creatBrand } from '../../http/deviceAPI';

const CreateBrand = ({show, onHide}) => {

  const [value, setValue] = useState('')  
  const addBrand = () => {
    creatBrand({name: value}).then(data => {
    setValue('')
    onHide()
  })
}
    return (
      <Modal
      show = {show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder={"enter brands's name..."}
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
        <Button variant={'outline-success'} onClick={addBrand}>Add</Button>
      </Modal.Footer>
    </Modal>
    );
  };

export default CreateBrand;