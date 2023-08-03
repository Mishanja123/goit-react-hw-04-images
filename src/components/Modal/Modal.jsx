import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import css from './Modal.module.css';

export const Modal = ({onClose, largeImg}) => {

  useEffect(() => {

    const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
    };

    document.addEventListener("keydown", handleKeyDown, false);

    return () => {

      document.removeEventListener("keydown", handleKeyDown, false);

    };

  }, [onClose]);


    return (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img className={css.modalImg} src={largeImg} alt="largeImg" />
        </div>
      </div>
    );
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
}
