import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({ webformatURL, largeImageURL, openModal}) => {

    return(
        <li className={css.galleryItem}>
            <img className={css.galleryImg} src={webformatURL} data-large={largeImageURL} alt="cat" onClick={openModal} />
        </li>
      )
}
ImageGalleryItem.propTypes = {
    
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
  };