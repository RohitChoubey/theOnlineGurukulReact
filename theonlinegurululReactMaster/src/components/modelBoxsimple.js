import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import LoginForm from './Forms/LoginForm';

function ModelBoxsimple(props) {
    
  return (
    <>
        <div className="modelBoxsimple_component">
        <Modal className="modelBoxsimple_component12212" show={props.show} >
                <Modal.Header  style={{padding:0}} >
                <Modal.Body style={{padding:"0"}}>
                 <LoginForm/>
                </Modal.Body></Modal.Header>
            <button type="button" class="close close-signmodelBoxsimple" onClick={props.onHide}>
                <span aria-hidden="true" class="fadeandscale_close fand-clase">
                    <img src="/assets/web/images/close-pop.png" alt="close-pop.png"/></span>
            </button>
        </Modal>
        </div>
    </>
  )
}

export default ModelBoxsimple