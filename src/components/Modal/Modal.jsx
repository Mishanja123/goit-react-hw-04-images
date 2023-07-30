import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {

  onClose = this.props.onClose
  largeImg = this.props.largeImg



  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.onClose();
    }
  };

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.onClose}>
        <div className={css.modal}>
          <img className={css.modalImg} src={this.largeImg} alt="largeImg" />
        </div>
      </div>
    );
  }
}

export default Modal;