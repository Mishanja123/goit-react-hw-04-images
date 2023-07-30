import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from "./ImageGallery.module.css"

export const ImageGallery = ({hits, openModal}) => {
    return(
        <ul className={css.gallery}>
            {hits.map(({ id, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        openModal={openModal}
                    />
                );
            })}
        </ul>    
    )
}
ImageGallery.propTypes = {
    hits: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ).isRequired,
    openModal: PropTypes.func.isRequired,
  };