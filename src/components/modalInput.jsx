import { Button, Modal } from 'react-bootstrap'
import React from 'react'

export default function ModalInput(props) {
    return (

        //props
        // show={modalShow}
        // onHide={() => setModalShow(false)}
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Passer un communiqué aux clients
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="mb-3 row">
                    <label
                      for="example-text-input"
                      class="col-md-2 col-form-label"
                    >
                      Message :
                  </label>
                    <div class="col-md-10">
                      <textarea
                        onChange={(e) => props.setModalText(e.target.value)}
                        class="form-control"
                        cols="3"
                        placeholder="veuillez entrer le message à envoyer.."
                        
                        required
                      ></textarea>
                    </div>
                  </div>
          
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={(e)=>props.onHide(e)}>Envoyer</Button>
          <a className="btn btn-danger" href onClick={()=>props.setModalShow(false)}>Envoyer</a>
        </Modal.Footer>
      </Modal>
  
    )
}
