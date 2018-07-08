import React from "react";
import Modal from "react-modal";

const CheckoutModal = props => (
  <Modal
    isOpen={!!props.handleOpenModal}
    contentLabel="Selected Option"
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Checkout</h3>
    {props.handleOpenModal && (
      <p className="modal__body">Checkout placeholder</p>
    )}
    <button className="button" onClick={props.handleCloseModal}>
      ok
    </button>
  </Modal>
);

export default CheckoutModal;
